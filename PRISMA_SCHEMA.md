# FORGEE — Prisma Schema Completo

> Schema gerado com base em 100% das telas e entidades do sistema:
> Dashboard, Alunos, Novo Aluno (7 seções), Check-ins, Recepção e Configurações.

---

## `schema.prisma`

```prisma
// ─────────────────────────────────────────────────────────────────────────────
// Datasource & Generator
// ─────────────────────────────────────────────────────────────────────────────

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")   // Supabase connection pooler (port 6543)
  directUrl = env("DIRECT_URL")     // Supabase direct connection  (port 5432)
}

generator client {
  provider = "prisma-client-js"
}

// ─────────────────────────────────────────────────────────────────────────────
// Enums
// ─────────────────────────────────────────────────────────────────────────────

/// Tipos de plano nativos + plano personalizado criado pelo admin
enum TipoPlano {
  BASIC
  PREMIUM
  ELITE
  PERSONALIZADO
}

/// Status financeiro/de acesso do aluno (exibido nos cards e filtros)
enum StatusAluno {
  EM_DIA       // pagamento em dia
  VENCENDO     // vencimento em até 5 dias
  EM_ATRASO    // pagamento atrasado
  PAUSADO      // pausado temporariamente (conta como inativo)
  CANCELADO    // contrato cancelado       (conta como inativo)
  BLOQUEADO    // bloqueio manual pelo admin
}

/// Status de uma cobrança individual
enum StatusPagamento {
  PAGO
  PENDENTE
  ATRASADO
  CANCELADO
}

/// Formas de pagamento disponíveis no cadastro e nas cobranças
enum MetodoPagamento {
  PIX
  CARTAO_CREDITO
  CARTAO_DEBITO
  BOLETO
  DINHEIRO
}

/// Sexo biológico / gênero do aluno
enum Genero {
  FEMININO
  MASCULINO
  OUTRO
}

/// Estado civil do aluno
enum EstadoCivil {
  SOLTEIRO
  CASADO
  DIVORCIADO
  VIUVO
  OUTRO
}

/// Objetivo principal do aluno (seção 4 do cadastro)
enum Objetivo {
  EMAGRECIMENTO
  HIPERTROFIA
  CONDICIONAMENTO
  REABILITACAO
  SAUDE_GERAL
  OUTRO
}

/// Nível de acesso do usuário admin
enum RoleAdmin {
  SUPER_ADMIN    // dono / gestor master
  ADMIN          // administrador padrão
  RECEPCIONISTA  // acesso limitado (recepção + check-ins)
}

/// Pressão arterial declarada na anamnese
enum Pressao {
  NORMAL
  ALTA
  BAIXA
}

// ─────────────────────────────────────────────────────────────────────────────
// Academia
// Configurações globais da unidade (Tab "Geral" em /configurações)
// ─────────────────────────────────────────────────────────────────────────────

model Academia {
  id        String   @id @default(uuid())
  nome      String
  cnpj      String   @unique
  telefone  String
  email     String
  endereco  String
  cidade    String
  estado    String   @db.Char(2)
  cep       String
  logoUrl   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relacionamentos
  admins        Admin[]
  alunos        Aluno[]
  planos        Plano[]
  config        AcademiaConfig?
  horarios      HorarioFuncionamento[]

  @@map("academias")
}

// ─────────────────────────────────────────────────────────────────────────────
// Admin
// Usuários que acessam o dashboard (Tab "Perfil" em /configurações)
// ─────────────────────────────────────────────────────────────────────────────

model Admin {
  id         String    @id @default(uuid())
  academiaId String
  nome       String
  email      String    @unique
  telefone   String?
  senhaHash  String    // bcrypt hash — nunca armazenar senha em texto plano
  role       RoleAdmin @default(ADMIN)
  avatarUrl  String?
  ativo      Boolean   @default(true)
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  academia   Academia  @relation(fields: [academiaId], references: [id])
  sessoes    Sessao[]

  @@map("admins")
}

/// Sessões autenticadas dos admins (JWT / cookie sessions)
model Sessao {
  id        String   @id @default(uuid())
  adminId   String
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())

  admin     Admin    @relation(fields: [adminId], references: [id], onDelete: Cascade)

  @@map("sessoes")
}

// ─────────────────────────────────────────────────────────────────────────────
// Plano
// Configuração de planos e benefícios (Tab "Planos" em /configurações)
// ─────────────────────────────────────────────────────────────────────────────

model Plano {
  id         String     @id @default(uuid())
  academiaId String
  nome       String     // "BASIC", "PREMIUM", "ELITE" ou nome customizado
  tipo       TipoPlano  @default(PERSONALIZADO)
  descricao  String?    // tagline curta: "Plano mais popular"
  preco      Decimal    @db.Decimal(10, 2)
  cor        String?    // hex: "#C8F135", "#E8271A", "#FF6B1A"
  destaque   Boolean    @default(false)
  ativo      Boolean    @default(true)
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt

  academia   Academia   @relation(fields: [academiaId], references: [id])
  beneficios BeneficioPlano[]
  matriculas Matricula[]

  @@map("planos")
}

/// Benefícios listados em cada plano (lista com bullet points)
model BeneficioPlano {
  id      String @id @default(uuid())
  planoId String
  texto   String
  ordem   Int    @default(0)

  plano   Plano  @relation(fields: [planoId], references: [id], onDelete: Cascade)

  @@map("beneficios_plano")
}

// ─────────────────────────────────────────────────────────────────────────────
// Aluno
// Ficha completa do membro (tela /alunos + formulário /alunos/novo)
// ─────────────────────────────────────────────────────────────────────────────

model Aluno {
  id         String      @id @default(uuid())
  academiaId String
  codigo     String      @unique // código de 4-6 dígitos usado na recepção/QR

  // ── Seção 1: Dados Pessoais ─────────────────────────────────────────────
  nome                 String
  nascimento           DateTime    @db.Date
  cpf                  String      @unique
  rg                   String?
  genero               Genero
  estadoCivil          EstadoCivil?
  profissao            String?
  telefone             String
  email                String      @unique
  endereco             String?
  avatarUrl            String?

  // Contato de emergência
  contatoEmergenciaNome     String?
  contatoEmergenciaTelefone String?

  // ── Status ──────────────────────────────────────────────────────────────
  status    StatusAluno @default(EM_DIA)
  bloqueado Boolean     @default(false)

  // ── Timestamps ──────────────────────────────────────────────────────────
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt

  // ── Relacionamentos ─────────────────────────────────────────────────────
  academia   Academia           @relation(fields: [academiaId], references: [id])
  anamnese   Anamnese?          // Seção 2
  parq       Parq?              // Seção 3
  objetivo   ObjetivoAluno?     // Seção 4
  medidas    MedidasCorporais[] // Seção 5 (múltiplas ao longo do tempo)
  matriculas Matricula[]        // Seção 6
  pagamentos Pagamento[]
  checkins   CheckIn[]
  termos     TermoResponsabilidade[]

  @@index([academiaId])
  @@index([status])
  @@map("alunos")
}

// ─────────────────────────────────────────────────────────────────────────────
// Anamnese — Seção 2 do cadastro
// Questionário de saúde pré-participação
// ─────────────────────────────────────────────────────────────────────────────

model Anamnese {
  id                 String   @id @default(uuid())
  alunoId            String   @unique
  doenca             Boolean?
  doencaDetalhe      String?
  cardiaco           Boolean?
  pressao            Pressao  @default(NORMAL)
  diabetes           Boolean?
  desmaios           Boolean?
  respiratorio       Boolean?
  articular          Boolean?
  cirurgia           Boolean?
  cirurgiaDetalhe    String?
  medicacao          Boolean?
  medicacaoDetalhe   String?
  gestante           Boolean?
  limitacao          Boolean?
  limitacaoDetalhe   String?
  recomendacaoMedica Boolean?
  observacoes        String?
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt

  aluno              Aluno    @relation(fields: [alunoId], references: [id], onDelete: Cascade)

  @@map("anamneses")
}

// ─────────────────────────────────────────────────────────────────────────────
// PAR-Q — Seção 3 do cadastro
// Questionário de prontidão para atividade física (6 perguntas)
// ─────────────────────────────────────────────────────────────────────────────

model Parq {
  id        String   @id @default(uuid())
  alunoId   String   @unique
  p1        Boolean? // Algum médico já disse que você possui problema cardíaco?
  p2        Boolean? // Sente dor no peito ao realizar atividade física?
  p3        Boolean? // Sentiu dor no peito no último mês?
  p4        Boolean? // Perde o equilíbrio por tontura ou já perdeu a consciência?
  p5        Boolean? // Possui problema ósseo ou articular que pode piorar com exercício?
  p6        Boolean? // Seu médico já recomendou restrição de atividade física?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  aluno     Aluno    @relation(fields: [alunoId], references: [id], onDelete: Cascade)

  @@map("parq")
}

// ─────────────────────────────────────────────────────────────────────────────
// ObjetivoAluno — Seção 4 do cadastro
// Histórico de treino e metas do aluno
// ─────────────────────────────────────────────────────────────────────────────

model ObjetivoAluno {
  id                 String    @id @default(uuid())
  alunoId            String    @unique
  objetivo           Objetivo?
  jaTreinou          Boolean?
  tempoExercicio     String?   // "6 meses", "2 anos"
  vezesSemana        Int?      // 1 a 6
  horarioPreferencia String?   // "manhã", "tarde", "noite"
  createdAt          DateTime  @default(now())
  updatedAt          DateTime  @updatedAt

  aluno              Aluno     @relation(fields: [alunoId], references: [id], onDelete: Cascade)

  @@map("objetivos_aluno")
}

// ─────────────────────────────────────────────────────────────────────────────
// MedidasCorporais — Seção 5 do cadastro
// Permite múltiplos registros ao longo do tempo (evolução)
// ─────────────────────────────────────────────────────────────────────────────

model MedidasCorporais {
  id            String   @id @default(uuid())
  alunoId       String
  peso          Decimal? @db.Decimal(5, 2) // kg
  altura        Decimal? @db.Decimal(5, 2) // cm
  imc           Decimal? @db.Decimal(4, 2) // calculado automaticamente
  gordura       Decimal? @db.Decimal(4, 2) // %
  // Medidas detalhadas (opcionais)
  bracoDireito  Decimal? @db.Decimal(5, 2) // cm
  bracoEsquerdo Decimal? @db.Decimal(5, 2)
  peitoral      Decimal? @db.Decimal(5, 2)
  cintura       Decimal? @db.Decimal(5, 2)
  quadril       Decimal? @db.Decimal(5, 2)
  coxaDireita   Decimal? @db.Decimal(5, 2)
  coxaEsquerda  Decimal? @db.Decimal(5, 2)
  observacoes   String?  // texto livre adicional
  createdAt     DateTime @default(now())

  aluno         Aluno    @relation(fields: [alunoId], references: [id], onDelete: Cascade)

  @@index([alunoId])
  @@map("medidas_corporais")
}

// ─────────────────────────────────────────────────────────────────────────────
// Matricula — Seção 6 do cadastro
// Vínculo entre aluno e plano contratado
// ─────────────────────────────────────────────────────────────────────────────

model Matricula {
  id              String          @id @default(uuid())
  alunoId         String
  planoId         String
  valor           Decimal         @db.Decimal(10, 2)
  dataInicio      DateTime        @db.Date
  dataVencimento  DateTime        @db.Date
  formaPagamento  MetodoPagamento
  ativo           Boolean         @default(true)
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  aluno           Aluno           @relation(fields: [alunoId], references: [id])
  plano           Plano           @relation(fields: [planoId], references: [id])
  pagamentos      Pagamento[]

  @@index([alunoId])
  @@index([dataVencimento])
  @@map("matriculas")
}

// ─────────────────────────────────────────────────────────────────────────────
// TermoResponsabilidade — Seção 7 do cadastro
// Registro de aceite do aluno ao termo LGPD
// ─────────────────────────────────────────────────────────────────────────────

model TermoResponsabilidade {
  id             String   @id @default(uuid())
  alunoId        String
  assinatura     String   // nome completo como assinatura
  dataAssinatura DateTime @db.Date
  versaoTermo    String   @default("v1") // controle de versão do texto
  ipOrigem       String?
  createdAt      DateTime @default(now())

  aluno          Aluno    @relation(fields: [alunoId], references: [id])

  @@map("termos_responsabilidade")
}

// ─────────────────────────────────────────────────────────────────────────────
// Pagamento
// Histórico financeiro do aluno (exibido em StudentProfile)
// ─────────────────────────────────────────────────────────────────────────────

model Pagamento {
  id             String          @id @default(uuid())
  alunoId        String
  matriculaId    String?
  valor          Decimal         @db.Decimal(10, 2)
  status         StatusPagamento @default(PENDENTE)
  metodo         MetodoPagamento
  dataVencimento DateTime        @db.Date
  dataPagamento  DateTime?       // preenchido ao confirmar pagamento
  referencia     String?         // ex: "Mensalidade Abril/2026"
  observacoes    String?
  createdAt      DateTime        @default(now())
  updatedAt      DateTime        @updatedAt

  aluno          Aluno           @relation(fields: [alunoId], references: [id])
  matricula      Matricula?      @relation(fields: [matriculaId], references: [id])

  @@index([alunoId])
  @@index([dataVencimento])
  @@index([status])
  @@map("pagamentos")
}

// ─────────────────────────────────────────────────────────────────────────────
// CheckIn
// Registro de cada entrada do aluno na academia
// Usado em /checkins e no modo /recepcao
// ─────────────────────────────────────────────────────────────────────────────

model CheckIn {
  id         String   @id @default(uuid())
  alunoId    String
  dataHora   DateTime @default(now()) // timestamp completo
  permitido  Boolean  @default(true)  // false = acesso negado (em-atraso)
  metodo     String?  // "qrcode" | "codigo" | "email" | "manual"
  observacao String?
  createdAt  DateTime @default(now())

  aluno      Aluno    @relation(fields: [alunoId], references: [id])

  @@index([alunoId])
  @@index([dataHora])
  @@map("checkins")
}

// ─────────────────────────────────────────────────────────────────────────────
// AcademiaConfig
// Todas as configurações do painel (Tab "Sistema" em /configurações)
// ─────────────────────────────────────────────────────────────────────────────

model AcademiaConfig {
  id                        String   @id @default(uuid())
  academiaId                String   @unique

  // Notificações
  notificacaoPagamento      Boolean  @default(true)
  notificacaoCheckin        Boolean  @default(false)
  notificacaoNovoCadastro   Boolean  @default(true)

  // Financeiro
  diasAlertaVencimento      Int      @default(5)   // avisar X dias antes
  bloqueioAutomatico        Boolean  @default(true) // bloqueia ao atrasar
  permitirAcessoAtrasado    Boolean  @default(false)

  // Recepção
  pinRecepcionHash          String?  // bcrypt hash do PIN de 4 dígitos
  tempoOverlayCheckin       Int      @default(4)   // segundos de exibição
  modoCodigo                Boolean  @default(true)
  modoEmail                 Boolean  @default(true)
  modoQrCode                Boolean  @default(true)

  // Site público
  siteMensagemCta           String?  // mensagem customizada no CTA

  updatedAt                 DateTime @updatedAt

  academia                  Academia @relation(fields: [academiaId], references: [id])

  @@map("academia_config")
}

// ─────────────────────────────────────────────────────────────────────────────
// HorarioFuncionamento
// Horários exibidos na homepage /localização + Tab "Sistema"
// ─────────────────────────────────────────────────────────────────────────────

model HorarioFuncionamento {
  id         String   @id @default(uuid())
  academiaId String
  diaSemana  String   // "Segunda a Sexta" | "Sábado" | "Domingo e Feriados"
  horaInicio String   // "05:00"
  horaFim    String   // "23:00"
  fechado    Boolean  @default(false)

  academia   Academia @relation(fields: [academiaId], references: [id], onDelete: Cascade)

  @@map("horarios_funcionamento")
}
```

---

## Mapa de Relacionamentos

```
Academia
 ├── Admin (1:N)          → quem acessa o dashboard
 ├── Plano (1:N)          → BASIC / PREMIUM / ELITE / customizados
 │    └── BeneficioPlano  → bullets de cada plano
 ├── Aluno (1:N)
 │    ├── Anamnese (1:1)  → questionário de saúde
 │    ├── Parq (1:1)      → PAR-Q 6 perguntas
 │    ├── ObjetivoAluno (1:1)
 │    ├── MedidasCorporais (1:N)  → evolução ao longo do tempo
 │    ├── Matricula (1:N)
 │    │    └── Pagamento (1:N)
 │    ├── Pagamento (1:N)         → acesso direto sem passar por matricula
 │    ├── CheckIn (1:N)
 │    └── TermoResponsabilidade (1:N)
 ├── AcademiaConfig (1:1) → todas as configurações do sistema
 └── HorarioFuncionamento (1:N)
```

---

## Variáveis de Ambiente (`.env`)

```env
# Supabase — Connection Pooler (usar para queries normais via Prisma)
DATABASE_URL="postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Supabase — Direct Connection (usar para migrações: prisma migrate)
DIRECT_URL="postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:5432/postgres"
```

---

## Comandos Essenciais

```bash
# 1. Instalar Prisma
npm install prisma @prisma/client

# 2. Inicializar (cria /prisma/schema.prisma)
npx prisma init

# 3. Aplicar schema ao Supabase (primeira vez)
npx prisma migrate dev --name init

# 4. Gerar o Prisma Client
npx prisma generate

# 5. Visualizar o banco no Prisma Studio
npx prisma studio

# 6. Seed com dados iniciais (após criar /prisma/seed.ts)
npx prisma db seed
```

---

## Notas de Implementação com Supabase

| Tabela | Row Level Security (RLS) | Observação |
|--------|--------------------------|------------|
| `academias` | Sim — `admin.academiaId = auth.uid()` | Isolamento por academia |
| `admins` | Sim — somente o próprio registro | Perfil editável |
| `alunos` | Sim — por `academiaId` | Dados sensíveis (LGPD) |
| `anamneses` | Sim — por `alunoId` | Dados de saúde (sensível) |
| `parq` | Sim — por `alunoId` | Dados de saúde (sensível) |
| `pagamentos` | Sim — por `academiaId` | Financeiro |
| `checkins` | Sim — por `academiaId` | Leitura pública para recepção |
| `planos` | Sim — por `academiaId` | Leitura pública (homepage) |

> **LGPD:** os campos `cpf`, `rg`, `nascimento` e dados de anamnese são considerados dados pessoais sensíveis. Habilite encriptação em nível de coluna ou use Supabase Vault para CPF/RG.
