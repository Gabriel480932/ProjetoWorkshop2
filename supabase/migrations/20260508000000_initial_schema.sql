-- =============================================================================
-- FORGEE Academy — Schema Inicial
-- Gerado em: 2026-05-08
-- =============================================================================

-- ─── Extensions ──────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── Enums ───────────────────────────────────────────────────────────────────
CREATE TYPE public.aluno_status       AS ENUM ('ATIVO', 'INATIVO', 'INADIMPLENTE', 'SUSPENSO');
CREATE TYPE public.status_plano_aluno AS ENUM ('ATIVO', 'VENCIDO', 'CANCELADO', 'SUSPENSO');
CREATE TYPE public.status_pagamento   AS ENUM ('PENDENTE', 'PAGO', 'ATRASADO', 'CANCELADO');
CREATE TYPE public.tipo_check_in      AS ENUM ('MANUAL', 'AUTO', 'QR_CODE');
CREATE TYPE public.tipo_notificacao   AS ENUM ('INFO', 'AVISO', 'URGENTE', 'PAGAMENTO', 'VENCIMENTO');

-- ─── Funções auxiliares ───────────────────────────────────────────────────────

-- Atualiza updated_at automaticamente
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

-- Verifica se o usuário autenticado é admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.usuarios
    WHERE auth_id = auth.uid()
      AND cargo   = 'Administrador'
  );
$$;

-- Verifica se o usuário autenticado é staff
CREATE OR REPLACE FUNCTION public.is_staff()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.usuarios u
    WHERE u.auth_id = auth.uid()
  );
$$;

-- Cria registro em public.usuarios quando um novo auth.user é criado
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public AS $$
BEGIN
  INSERT INTO public.usuarios (id, auth_id, email, nome, cargo, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nome', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'cargo', 'Recepcionista'),
    now(),
    now()
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- ─── Tabelas ─────────────────────────────────────────────────────────────────

-- Usuários (staff da academia)
CREATE TABLE public.usuarios (
  id          uuid        PRIMARY KEY,
  auth_id     uuid        UNIQUE,
  nome        text        NOT NULL,
  email       text        NOT NULL UNIQUE,
  telefone    text,
  senha_hash  text,
  cargo       text        NOT NULL DEFAULT 'Recepção',
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

-- Alunos
CREATE TABLE public.alunos (
  id             uuid            PRIMARY KEY DEFAULT gen_random_uuid(),
  nome           text            NOT NULL,
  data_nasc      date,
  cpf            text            NOT NULL UNIQUE,
  rg             text,
  sexo           text,
  estado_civil   text,
  profissao      text,
  telefone       text,
  email          text            NOT NULL UNIQUE,
  endereco       text,
  contato_emerg  text,
  tel_emerg      text,
  foto_url       text,
  status         aluno_status    NOT NULL DEFAULT 'ATIVO',
  matricula      text            NOT NULL UNIQUE,
  qr_code_token  text            UNIQUE,
  created_at     timestamptz     NOT NULL DEFAULT now(),
  updated_at     timestamptz     NOT NULL DEFAULT now()
);

-- Dados de saúde
CREATE TABLE public.dados_saude (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id            uuid        NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  doenca              boolean     NOT NULL DEFAULT false,
  cardiaco            boolean     NOT NULL DEFAULT false,
  pressao             text,
  diabetes            boolean     NOT NULL DEFAULT false,
  desmaios            boolean     NOT NULL DEFAULT false,
  respiratorio        boolean     NOT NULL DEFAULT false,
  articular           boolean     NOT NULL DEFAULT false,
  cirurgia            boolean     NOT NULL DEFAULT false,
  medicacao           boolean     NOT NULL DEFAULT false,
  gestante            text,
  limitacao           boolean     NOT NULL DEFAULT false,
  recomendacao_medica boolean     NOT NULL DEFAULT false,
  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now()
);

-- PAR-Q
CREATE TABLE public.parq (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id        uuid        NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  q1              boolean     NOT NULL DEFAULT false,
  q2              boolean     NOT NULL DEFAULT false,
  q3              boolean     NOT NULL DEFAULT false,
  q4              boolean     NOT NULL DEFAULT false,
  q5              boolean     NOT NULL DEFAULT false,
  q6              boolean     NOT NULL DEFAULT false,
  possui_restricao boolean    NOT NULL DEFAULT false,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- Objetivos
CREATE TABLE public.objetivos (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id      uuid        NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  objetivo      text        NOT NULL,
  treinou_antes text,
  tempo_pratica text,
  vezes_semana  text,
  horario_pref  text,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Dados físicos / avaliação
CREATE TABLE public.dados_fisicos (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id   uuid        NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  peso       float8,
  altura     float8,
  imc        float8,
  gordura    float8,
  medidas    text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Planos da academia
CREATE TABLE public.planos (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  nome       text        NOT NULL,
  subtitulo  text,
  preco      numeric     NOT NULL DEFAULT 0,
  beneficios jsonb       NOT NULL DEFAULT '[]',
  destaque   boolean     NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Planos vinculados ao aluno
CREATE TABLE public.planos_alunos (
  id          uuid                PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id    uuid                NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  plano_id    uuid                NOT NULL REFERENCES public.planos(id),
  valor       numeric             NOT NULL DEFAULT 0,
  data_inicio date                NOT NULL,
  data_venc   date                NOT NULL,
  forma_pgto  text                NOT NULL,
  status      status_plano_aluno  NOT NULL DEFAULT 'ATIVO',
  created_at  timestamptz         NOT NULL DEFAULT now(),
  updated_at  timestamptz         NOT NULL DEFAULT now()
);

-- Pagamentos
CREATE TABLE public.pagamentos (
  id             uuid              PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id       uuid              NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  plano_aluno_id uuid              REFERENCES public.planos_alunos(id),
  valor          numeric           NOT NULL,
  data_pagamento date              NOT NULL,
  forma_pgto     text              NOT NULL,
  status         status_pagamento  NOT NULL DEFAULT 'PENDENTE',
  comprovante    text,
  created_at     timestamptz       NOT NULL DEFAULT now(),
  updated_at     timestamptz       NOT NULL DEFAULT now()
);

-- Check-ins
CREATE TABLE public.checkins (
  id           uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id     uuid          NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  entrada      timestamptz   NOT NULL DEFAULT now(),
  tipo         tipo_check_in NOT NULL DEFAULT 'MANUAL',
  identificador text,
  created_at   timestamptz   NOT NULL DEFAULT now()
);

-- Termos de responsabilidade
CREATE TABLE public.termos_responsabilidade (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id        uuid        NOT NULL REFERENCES public.alunos(id) ON DELETE CASCADE,
  assinatura      text,
  data_assinatura timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- Configurações da academia
CREATE TABLE public.configuracoes_academia (
  id                      uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  nome                    text        NOT NULL DEFAULT 'FORGEE Academy',
  cnpj                    text,
  telefone                text,
  email                   text,
  endereco                text,
  cidade                  text,
  estado                  text,
  cep                     text,
  logo_url                text,
  horario_abertura        time        NOT NULL DEFAULT '06:00',
  horario_fechamento      time        NOT NULL DEFAULT '22:00',
  dias_sem_checkin_risco  int         NOT NULL DEFAULT 10,
  dias_alerta_vencimento  int         NOT NULL DEFAULT 5,
  pin_recepcao            text        NOT NULL DEFAULT '1234',
  notif_email             boolean     NOT NULL DEFAULT true,
  notif_sms               boolean     NOT NULL DEFAULT false,
  bloquear_inadimplentes  boolean     NOT NULL DEFAULT false,
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

-- Notificações
CREATE TABLE public.notificacoes (
  id         uuid              PRIMARY KEY DEFAULT gen_random_uuid(),
  aluno_id   uuid              REFERENCES public.alunos(id) ON DELETE CASCADE,
  titulo     text              NOT NULL,
  mensagem   text,
  tipo       tipo_notificacao  NOT NULL DEFAULT 'INFO',
  lida       boolean           NOT NULL DEFAULT false,
  created_at timestamptz       NOT NULL DEFAULT now()
);

-- Logs de auditoria
CREATE TABLE public.logs_auditoria (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id  uuid        REFERENCES public.usuarios(id),
  acao        text        NOT NULL,
  entidade    text,
  registro_id uuid,
  detalhes    jsonb,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- ─── Triggers updated_at ─────────────────────────────────────────────────────
CREATE TRIGGER trg_usuarios_updated_at              BEFORE UPDATE ON public.usuarios              FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_alunos_updated_at                BEFORE UPDATE ON public.alunos                FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_dados_saude_updated_at           BEFORE UPDATE ON public.dados_saude           FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_parq_updated_at                  BEFORE UPDATE ON public.parq                  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_objetivos_updated_at             BEFORE UPDATE ON public.objetivos             FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_dados_fisicos_updated_at         BEFORE UPDATE ON public.dados_fisicos         FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_planos_updated_at                BEFORE UPDATE ON public.planos                FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_planos_alunos_updated_at         BEFORE UPDATE ON public.planos_alunos         FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_pagamentos_updated_at            BEFORE UPDATE ON public.pagamentos            FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_termos_updated_at                BEFORE UPDATE ON public.termos_responsabilidade FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_configuracoes_updated_at         BEFORE UPDATE ON public.configuracoes_academia FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Trigger: cria registro em usuarios quando novo auth.user é criado
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ─── Índices ─────────────────────────────────────────────────────────────────
CREATE INDEX idx_alunos_cpf           ON public.alunos(cpf);
CREATE INDEX idx_alunos_email         ON public.alunos(email);
CREATE INDEX idx_alunos_matricula     ON public.alunos(matricula);
CREATE INDEX idx_alunos_qr            ON public.alunos(qr_code_token);
CREATE INDEX idx_checkins_aluno       ON public.checkins(aluno_id);
CREATE INDEX idx_checkins_entrada     ON public.checkins(entrada);
CREATE INDEX idx_pagamentos_aluno     ON public.pagamentos(aluno_id);
CREATE INDEX idx_planos_alunos_aluno  ON public.planos_alunos(aluno_id);
CREATE INDEX idx_notificacoes_aluno   ON public.notificacoes(aluno_id);
CREATE INDEX idx_usuarios_auth_id     ON public.usuarios(auth_id);

-- ─── Row Level Security ───────────────────────────────────────────────────────
ALTER TABLE public.usuarios              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alunos                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dados_saude           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parq                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.objetivos             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dados_fisicos         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.planos                ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.planos_alunos         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pagamentos            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checkins              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.termos_responsabilidade ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.configuracoes_academia ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notificacoes          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logs_auditoria        ENABLE ROW LEVEL SECURITY;

-- Somente admins têm acesso total às tabelas operacionais
CREATE POLICY alunos_admin                  ON public.alunos                  FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY dados_saude_admin             ON public.dados_saude             FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY parq_admin                    ON public.parq                    FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY objetivos_admin               ON public.objetivos               FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY dados_fisicos_admin           ON public.dados_fisicos           FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY planos_admin                  ON public.planos                  FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY planos_alunos_admin           ON public.planos_alunos           FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY pagamentos_admin              ON public.pagamentos              FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY checkins_admin                ON public.checkins                FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY termos_responsabilidade_admin ON public.termos_responsabilidade FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY configuracoes_academia_admin  ON public.configuracoes_academia  FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY notificacoes_admin            ON public.notificacoes            FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY logs_auditoria_admin          ON public.logs_auditoria          FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());

-- Usuários: admin vê tudo; cada usuário vê/edita a si mesmo
CREATE POLICY usuarios_admin ON public.usuarios
  FOR ALL TO authenticated
  USING  (is_admin() OR (auth_id = auth.uid()))
  WITH CHECK (is_admin());
