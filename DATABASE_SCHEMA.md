# FORGEE Academy — Database Schema

Documentação do schema PostgreSQL rodando no Supabase.

> Migration completa em: `supabase/migrations/20260508000000_initial_schema.sql`

---

## Enums

| Enum | Valores |
|------|---------|
| `aluno_status` | `ATIVO`, `INATIVO`, `INADIMPLENTE`, `SUSPENSO` |
| `status_plano_aluno` | `ATIVO`, `VENCIDO`, `CANCELADO`, `SUSPENSO` |
| `status_pagamento` | `PENDENTE`, `PAGO`, `ATRASADO`, `CANCELADO` |
| `tipo_check_in` | `MANUAL`, `AUTO`, `QR_CODE` |
| `tipo_notificacao` | `INFO`, `AVISO`, `URGENTE`, `PAGAMENTO`, `VENCIMENTO` |

---

## Tabelas

### `usuarios`
Staff da academia (admins, recepcionistas).

| Coluna | Tipo | Notas |
|--------|------|-------|
| `id` | uuid PK | Mesmo ID do `auth.users` |
| `auth_id` | uuid UNIQUE | FK para `auth.users.id` |
| `nome` | text NOT NULL | |
| `email` | text NOT NULL UNIQUE | |
| `telefone` | text | |
| `cargo` | text | `Administrador`, `Recepcionista` |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | Auto via trigger |

---

### `alunos`
Membros da academia.

| Coluna | Tipo | Notas |
|--------|------|-------|
| `id` | uuid PK | |
| `nome` | text NOT NULL | |
| `cpf` | text NOT NULL UNIQUE | |
| `email` | text NOT NULL UNIQUE | |
| `telefone` | text | |
| `status` | `aluno_status` | Default: `ATIVO` |
| `matricula` | text UNIQUE | Código de matrícula |
| `qr_code_token` | text UNIQUE | Token para check-in via QR |
| `foto_url` | text | URL da foto no Storage |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | Auto via trigger |

---

### `dados_saude`
Informações de saúde do aluno (1:1 com alunos).

### `parq`
Questionário PAR-Q (6 perguntas booleanas + restrição).

### `objetivos`
Objetivos e histórico de treino do aluno.

### `dados_fisicos`
Avaliação física: peso, altura, IMC, gordura, medidas.

### `planos`
Planos disponíveis na academia (Basic, Premium, Elite etc.).

### `planos_alunos`
Vínculo entre aluno e plano com datas e status.

### `pagamentos`
Histórico de pagamentos por aluno.

### `checkins`
Registro de entradas na academia (manual, QR code, automático).

### `termos_responsabilidade`
Termo assinado pelo aluno no cadastro.

### `configuracoes_academia`
Configurações globais da academia (1 registro único).

### `notificacoes`
Notificações internas do sistema.

### `logs_auditoria`
Log de ações dos usuários staff.

---

## Funções

| Função | Retorno | Descrição |
|--------|---------|-----------|
| `is_admin()` | boolean | Verifica se o auth.uid() tem cargo `Administrador` |
| `is_staff()` | boolean | Verifica se o auth.uid() existe em `usuarios` |
| `set_updated_at()` | trigger | Atualiza `updated_at` automaticamente |
| `handle_new_user()` | trigger | Cria registro em `usuarios` ao criar auth.user |

---

## RLS — Row Level Security

Todas as tabelas têm RLS ativo. A regra geral é:

```sql
FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin())
```

Somente usuários autenticados com `cargo = 'Administrador'` em `public.usuarios` têm acesso total.

A tabela `usuarios` tem regra adicional: cada usuário pode visualizar/editar seu próprio registro.
