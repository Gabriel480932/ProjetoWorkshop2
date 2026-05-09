import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Printer, Save, AlertTriangle, CheckCircle, Loader2, Camera, User } from "lucide-react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import {
  SectionHeader,
  FormInput,
  FormSelect,
  FormTextarea,
  RadioToggle,
  ObjectiveButton,
} from "../components/dashboard/FormElements";
import { supabase } from "../../lib/supabase";

// ── PHOTO UPLOAD ───────────────────────────────────────────────────────────
interface PhotoUploadProps {
  preview: string | null;
  onChange: (file: File, previewUrl: string) => void;
}

function PhotoUpload({ preview, onChange }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onChange(file, url);
    // reset so same file can be selected again
    e.target.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          color: "#B0B0B0",
          letterSpacing: "0.04em",
          alignSelf: "flex-start",
        }}
      >
        FOTO DO ALUNO
      </p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="relative group focus:outline-none"
        title={preview ? "Clique para alterar a foto" : "Clique para adicionar foto"}
      >
        {/* Avatar circle */}
        <div
          className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center transition-all"
          style={{
            border: preview ? "2px solid #C8F135" : "2px dashed #3A3A3A",
            backgroundColor: "#111111",
          }}
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview do aluno"
              className="w-full h-full object-cover"
            />
          ) : (
            <User size={40} style={{ color: "#3A3A3A" }} />
          )}
        </div>

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          <div className="flex flex-col items-center gap-1">
            <Camera size={20} style={{ color: "#C8F135" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.6rem",
                color: "#C8F135",
                letterSpacing: "0.05em",
              }}
            >
              {preview ? "ALTERAR" : "ADICIONAR"}
            </span>
          </div>
        </div>
      </button>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.7rem",
          color: "#6B6B6B",
          textAlign: "center",
        }}
      >
        {preview ? "Clique para alterar" : "JPG, PNG ou WEBP · máx. 5 MB"}
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFile}
      />
    </div>
  );
}

// ── SECTION CARD WRAPPER ───────────────────────────────────────────────────
function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border border-[#2D2D2D] p-5 sm:p-6"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      {children}
    </div>
  );
}

// ── FORM GRID ──────────────────────────────────────────────────────────────
function Row({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  return (
    <div
      className={`grid gap-4 ${
        cols === 2 ? "grid-cols-1 sm:grid-cols-2" :
        cols === 3 ? "grid-cols-1 sm:grid-cols-3" :
        cols === 4 ? "grid-cols-2 sm:grid-cols-4" :
        "grid-cols-1"
      }`}
    >
      {children}
    </div>
  );
}

// ── OBJECTIVES DATA ────────────────────────────────────────────────────────
const objectives = [
  { id: "emagrecimento",   label: "Emagrecimento",          icon: "🔥" },
  { id: "hipertrofia",     label: "Hipertrofia",             icon: "💪" },
  { id: "condicionamento", label: "Condicionamento Físico",  icon: "🏃" },
  { id: "reabilitacao",    label: "Reabilitação",            icon: "🩺" },
  { id: "saude",           label: "Saúde Geral",             icon: "❤️" },
  { id: "outro",           label: "Outro",                   icon: "⭐" },
];

// ── MAIN PAGE ──────────────────────────────────────────────────────────────
export function NewStudentPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ─ Foto
  const [fotoFile, setFotoFile]       = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);

  // ─ Section 1: Dados Pessoais
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [sexo, setSexo] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [profissao, setProfissao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contatoEmergencia, setContatoEmergencia] = useState("");
  const [telEmergencia, setTelEmergencia] = useState("");

  // ─ Section 2: Anamnese
  const [anamnese, setAnamnese] = useState<Record<string, string>>({});

  // ─ Section 3: PAR-Q
  const [parq, setParq] = useState<Record<string, string>>({});
  const hasParqSim = Object.values(parq).some((v) => v === "SIM");

  // ─ Section 4: Objetivos
  const [objetivo, setObjetivo] = useState("");
  const [jaTreinou, setJaTreinou] = useState("");
  const [tempoExercicio, setTempoExercicio] = useState("");
  const [vezessemana, setVezesSemana] = useState("");
  const [horario, setHorario] = useState("");

  // ─ Section 5: Corpo
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [gordura, setGordura] = useState("");
  const [medidas, setMedidas] = useState("");

  // ─ Section 6: Plano
  const [plano, setPlano] = useState("");
  const [valor, setValor] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataVencimento, setDataVencimento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [planosDisponiveis, setPlanosDisponiveis] = useState<{ value: string; label: string }[]>([]);

  // ─ Carregar planos do banco
  useEffect(() => {
    supabase
      .from("planos")
      .select("id, nome, preco")
      .order("preco", { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPlanosDisponiveis(
            data.map((p) => ({ value: p.nome, label: `${p.nome} — R$ ${Number(p.preco).toFixed(2)}` }))
          );
        }
      });
  }, []);

  // ─ IMC auto calc
  useEffect(() => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (p > 0 && a > 0) {
      setImc((p / (a * a)).toFixed(1));
    } else {
      setImc("");
    }
  }, [peso, altura]);

  // ─ Save state
  const [saving, setSaving]   = useState(false);
  const [saveMsg, setSaveMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // ─ Today date for term
  const today = new Date().toISOString().split("T")[0];

  // ─ handleSave: grava tudo no Supabase
  const handleSave = async () => {
    if (!nome.trim() || !cpf.trim() || !email.trim()) {
      setSaveMsg({ type: "error", text: "Preencha pelo menos Nome, CPF e E-mail." });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSaving(true);
    setSaveMsg(null);

    try {
      // Gerar matrícula única: 4 dígitos aleatórios + verificação
      const gerarMatricula = () => String(Math.floor(1000 + Math.random() * 9000));
      const matricula = gerarMatricula();
      const qrCodeToken = `FORGEE-${matricula}-${Date.now()}`;

      // 1a. Upload da foto (opcional)
      let fotoUrl: string | null = null;
      if (fotoFile) {
        const ext  = fotoFile.name.split(".").pop();
        const path = `${matricula}/foto.${ext}`;
        const { error: uploadErr } = await supabase.storage
          .from("fotos-alunos")
          .upload(path, fotoFile, { upsert: true });
        if (uploadErr) {
          console.warn("Aviso: foto não enviada —", uploadErr.message);
        } else {
          const { data: urlData } = supabase.storage
            .from("fotos-alunos")
            .getPublicUrl(path);
          fotoUrl = urlData.publicUrl;
        }
      }

      // 1b. Inserir aluno
      const { data: alunoData, error: alunoErr } = await supabase
        .from("alunos")
        .insert({
          nome: nome.trim(),
          data_nasc: nascimento || null,
          cpf: cpf.trim(),
          rg: rg.trim() || null,
          sexo: sexo || null,
          estado_civil: estadoCivil || null,
          profissao: profissao.trim() || null,
          telefone: telefone.trim() || null,
          email: email.trim().toLowerCase(),
          endereco: endereco.trim() || null,
          contato_emerg: contatoEmergencia.trim() || null,
          tel_emerg: telEmergencia.trim() || null,
          foto_url: fotoUrl,
          status: "ATIVO",
          matricula,
          qr_code_token: qrCodeToken,
        })
        .select("id")
        .single();

      if (alunoErr) throw new Error(alunoErr.message);
      const alunoId = alunoData.id;

      // 2. Dados de saúde (anamnese)
      const { error: saudeErr } = await supabase.from("dados_saude").insert({
        aluno_id: alunoId,
        doenca:            anamnese.doenca === "SIM",
        cardiaco:          anamnese.cardiaco === "SIM",
        pressao:           anamnese.pressao ?? "NÃO",
        diabetes:          anamnese.diabetes === "SIM",
        desmaios:          anamnese.desmaios === "SIM",
        respiratorio:      anamnese.respiratorio === "SIM",
        articular:         anamnese.articular === "SIM",
        cirurgia:          anamnese.cirurgia === "SIM",
        medicacao:         anamnese.medicacao === "SIM",
        gestante:          anamnese.gestante ?? "N/A",
        limitacao:         anamnese.limitacao === "SIM",
        recomendacao_medica: anamnese.recomendacao === "SIM",
      });
      if (saudeErr) throw new Error("Erro ao salvar dados de saúde: " + saudeErr.message);

      // 3. PAR-Q
      const { error: parqErr } = await supabase.from("parq").insert({
        aluno_id: alunoId,
        q1: parq.p1 === "SIM",
        q2: parq.p2 === "SIM",
        q3: parq.p3 === "SIM",
        q4: parq.p4 === "SIM",
        q5: parq.p5 === "SIM",
        q6: parq.p6 === "SIM",
        possui_restricao: Object.values(parq).some((v) => v === "SIM"),
      });
      if (parqErr) throw new Error("Erro ao salvar PAR-Q: " + parqErr.message);

      // 4. Objetivos
      if (objetivo) {
        const { error: objErr } = await supabase.from("objetivos").insert({
          aluno_id: alunoId,
          objetivo,
          treinou_antes: jaTreinou || null,
          tempo_pratica: tempoExercicio || null,
          vezes_semana:  vezessemana || null,
          horario_pref:  horario || null,
        });
        if (objErr) throw new Error("Erro ao salvar objetivos: " + objErr.message);
      }

      // 5. Dados físicos
      if (peso || altura) {
        const { error: fisicosErr } = await supabase.from("dados_fisicos").insert({
          aluno_id: alunoId,
          peso:    peso    ? parseFloat(peso)    : null,
          altura:  altura  ? parseFloat(altura)  : null,
          imc:     imc     ? parseFloat(imc)     : null,
          gordura: gordura ? parseFloat(gordura) : null,
          medidas: medidas || null,
        });
        if (fisicosErr) throw new Error("Erro ao salvar dados físicos: " + fisicosErr.message);
      }

      // 6. Plano contratado
      if (plano && dataInicio && dataVencimento) {
        // Buscar o ID do plano pelo nome
        const nomePlano = plano.toUpperCase();
        const { data: planoData } = await supabase
          .from("planos")
          .select("id")
          .ilike("nome", nomePlano)
          .limit(1)
          .single();

        const formaPgtoMap: Record<string, string> = {
          dinheiro: "Dinheiro",
          pix: "PIX",
          debito: "Cartão de Débito",
          credito: "Cartão de Crédito",
          boleto: "Boleto Bancário",
        };

        if (planoData) {
          const { data: planoAlunoData, error: planoAlunoErr } = await supabase
            .from("planos_alunos")
            .insert({
              aluno_id:   alunoId,
              plano_id:   planoData.id,
              valor:      parseFloat(valor) || 0,
              data_inicio: dataInicio,
              data_venc:   dataVencimento,
              forma_pgto:  formaPgtoMap[pagamento] ?? pagamento,
              status: "ATIVO",
            })
            .select("id")
            .single();
          if (planoAlunoErr) throw new Error("Erro ao vincular plano: " + planoAlunoErr.message);

          if (planoAlunoData && valor) {
            const { error: pagErr } = await supabase.from("pagamentos").insert({
              aluno_id:       alunoId,
              plano_aluno_id: planoAlunoData.id,
              valor:          parseFloat(valor),
              data_pagamento: dataInicio,
              forma_pgto:     formaPgtoMap[pagamento] ?? pagamento,
              status: "PENDENTE",
            });
            if (pagErr) throw new Error("Erro ao registrar pagamento: " + pagErr.message);
          }
        }
      }

      // 7. Termo de responsabilidade
      await supabase.from("termos_responsabilidade").insert({
        aluno_id:        alunoId,
        data_assinatura: new Date().toISOString(),
      });

      setSaveMsg({ type: "success", text: `Aluno ${nome} cadastrado! Matrícula: #${matricula}` });
      setTimeout(() => navigate("/dashboard/alunos"), 2000);
    } catch (err: any) {
      setSaveMsg({ type: "error", text: err?.message ?? "Erro ao salvar. Tente novamente." });
    } finally {
      setSaving(false);
    }
  };

  const anamneseQuestions = [
    { key: "doenca",        question: "Possui alguma doença diagnosticada?",                 options: ["SIM", "NÃO"] },
    { key: "cardiaco",      question: "Problemas cardíacos?",                                 options: ["SIM", "NÃO"] },
    { key: "pressao",       question: "Pressão alta ou baixa?",                              options: ["NÃO", "ALTA", "BAIXA"] },
    { key: "diabetes",      question: "Possui diabetes?",                                     options: ["SIM", "NÃO"] },
    { key: "desmaios",      question: "Desmaios ou tonturas frequentes?",                    options: ["SIM", "NÃO"] },
    { key: "respiratorio",  question: "Problemas respiratórios?",                             options: ["SIM", "NÃO"] },
    { key: "articular",     question: "Problemas articulares?",                               options: ["SIM", "NÃO"] },
    { key: "cirurgia",      question: "Já realizou cirurgia?",                                options: ["SIM", "NÃO"] },
    { key: "medicacao",     question: "Faz uso de medicação contínua?",                       options: ["SIM", "NÃO"] },
    { key: "gestante",      question: "Está gestante?",                                       options: ["SIM", "NÃO", "N/A"] },
    { key: "limitacao",     question: "Possui limitação física?",                             options: ["SIM", "NÃO"] },
    { key: "recomendacao",  question: "Possui recomendação médica para prática de exercícios?", options: ["SIM", "NÃO"] },
  ];

  const parqQuestions = [
    { key: "p1", question: "Algum médico já disse que você possui problema cardíaco?" },
    { key: "p2", question: "Sente dor no peito ao realizar atividade física?" },
    { key: "p3", question: "Sentiu dor no peito no último mês?" },
    { key: "p4", question: "Perde o equilíbrio por tontura ou já perdeu a consciência?" },
    { key: "p5", question: "Possui problema ósseo ou articular que pode piorar com exercício?" },
    { key: "p6", question: "Seu médico já recomendou restrição de atividade física?" },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[240px]">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        {/* Form action bar */}
        <div
          className="sticky top-0 z-30 border-b border-[#2D2D2D] px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3"
          style={{ backgroundColor: "#0D0D0D" }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-1.5 text-[#6B6B6B] hover:text-white transition-colors flex-shrink-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem" }}
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">VOLTAR</span>
            </button>
            <div className="w-px h-5 bg-[#2D2D2D] flex-shrink-0" />
            <h1
              className="truncate"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#FFFFFF",
                letterSpacing: "0.04em",
              }}
            >
              CADASTRAR NOVO ALUNO
            </h1>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#2D2D2D] text-[#B0B0B0] hover:text-white hover:border-[#3A3A3A] transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.75rem" }}
            >
              <Printer size={14} />
              <span>IMPRIMIR</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(200,241,53,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#C8F135",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                color: "#0A0A0A",
              }}
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              <span>{saving ? "SALVANDO..." : "SALVAR CADASTRO"}</span>
            </button>
          </div>
        </div>

        {/* Feedback banner */}
        {saveMsg && (
          <div
            className="mx-4 sm:mx-6 lg:mx-8 mt-4 flex items-center gap-3 px-4 py-3 rounded-lg border"
            style={{
              backgroundColor: saveMsg.type === "success" ? "rgba(34,197,94,0.1)" : "rgba(224,32,32,0.1)",
              borderColor: saveMsg.type === "success" ? "#22C55E" : "#E02020",
            }}
          >
            {saveMsg.type === "success"
              ? <CheckCircle size={18} style={{ color: "#22C55E", flexShrink: 0 }} />
              : <AlertTriangle size={18} style={{ color: "#E02020", flexShrink: 0 }} />}
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: saveMsg.type === "success" ? "#22C55E" : "#E02020", fontWeight: 600 }}>
              {saveMsg.text}
            </p>
          </div>
        )}

        {/* Form content */}
        <main className="p-4 sm:p-6 lg:p-8 max-w-4xl space-y-5">

          {/* ── 1. DADOS PESSOAIS ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
            <SectionCard>
              <SectionHeader number={1} title="DADOS PESSOAIS" subtitle="Identificação básica do aluno. Todos os campos são obrigatórios." />

              {/* Foto + Nome/Nasc/Sexo lado a lado */}
              <div className="flex flex-col sm:flex-row gap-6 mb-4">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <PhotoUpload
                    preview={fotoPreview}
                    onChange={(file, url) => { setFotoFile(file); setFotoPreview(url); }}
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <FormInput
                    label="Nome Completo"
                    required
                    placeholder="Ex: Maria Fernanda Souza"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <Row>
                    <FormInput
                      label="Data de Nascimento"
                      required
                      type="date"
                      value={nascimento}
                      onChange={(e) => setNascimento(e.target.value)}
                    />
                    <FormSelect
                      label="Sexo"
                      required
                      value={sexo}
                      onChange={setSexo}
                      options={[
                        { value: "feminino", label: "Feminino" },
                        { value: "masculino", label: "Masculino" },
                        { value: "outro", label: "Outro" },
                      ]}
                    />
                  </Row>
                </div>
              </div>

              {/* Restante dos campos */}
              <div className="space-y-4">
                <Row>
                  <FormInput
                    label="CPF"
                    required
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <FormInput
                    label="RG"
                    required
                    placeholder="00.000.000-0"
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                  />
                </Row>
                <Row>
                  <FormSelect
                    label="Estado Civil"
                    required
                    value={estadoCivil}
                    onChange={setEstadoCivil}
                    options={[
                      { value: "solteiro", label: "Solteiro(a)" },
                      { value: "casado", label: "Casado(a)" },
                      { value: "divorciado", label: "Divorciado(a)" },
                      { value: "viuvo", label: "Viúvo(a)" },
                      { value: "outro", label: "Outro" },
                    ]}
                  />
                  <FormInput
                    label="Profissão"
                    required
                    placeholder="Ex: Professora, Engenheiro..."
                    value={profissao}
                    onChange={(e) => setProfissao(e.target.value)}
                  />
                </Row>
                <Row>
                  <FormInput
                    label="Telefone (WhatsApp)"
                    required
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                  <FormInput
                    label="E-mail"
                    required
                    type="email"
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Row>
                <FormInput
                  label="Endereço Completo"
                  required
                  placeholder="Rua, Número, Bairro, Cidade, Estado, CEP"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
                <Row>
                  <FormInput
                    label="Contato de Emergência"
                    required
                    placeholder="Nome completo"
                    value={contatoEmergencia}
                    onChange={(e) => setContatoEmergencia(e.target.value)}
                  />
                  <FormInput
                    label="Telefone do Contato de Emergência"
                    required
                    placeholder="(00) 00000-0000"
                    value={telEmergencia}
                    onChange={(e) => setTelEmergencia(e.target.value)}
                  />
                </Row>
              </div>
            </SectionCard>
          </motion.div>

          {/* ── 2. ANAMNESE ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <SectionCard>
              <SectionHeader number={2} title="DADOS DE SAÚDE (ANAMNESE BÁSICA)" subtitle="Questionário de saúde pré-participação. Obrigatório responder todas." />
              <div>
                {anamneseQuestions.map((q) => (
                  <RadioToggle
                    key={q.key}
                    question={q.question}
                    options={q.options}
                    value={anamnese[q.key] ?? ""}
                    onChange={(v) => setAnamnese((prev) => ({ ...prev, [q.key]: v }))}
                  />
                ))}
              </div>
            </SectionCard>
          </motion.div>

          {/* ── 3. PAR-Q ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <SectionCard>
              <SectionHeader
                number={3}
                title="QUESTIONÁRIO PAR-Q"
                subtitle="Prontidão para atividade física. Responda SIM ou NÃO para cada pergunta."
              />
              <div>
                {parqQuestions.map((q) => (
                  <RadioToggle
                    key={q.key}
                    question={q.question}
                    options={["SIM", "NÃO"]}
                    value={parq[q.key] ?? ""}
                    onChange={(v) => setParq((prev) => ({ ...prev, [q.key]: v }))}
                  />
                ))}
              </div>

              {/* Conditional alert */}
              {hasParqSim && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-start gap-3 p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,107,26,0.08)",
                    border: "1px solid rgba(255,107,26,0.35)",
                  }}
                >
                  <AlertTriangle size={18} style={{ color: "#FF6B1A", flexShrink: 0, marginTop: 1 }} />
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#D4D4D4",
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ color: "#FF6B1A" }}>Atenção:</strong> Uma ou mais respostas foram "SIM". Recomendamos avaliação médica antes de iniciar a prática de atividades físicas.
                  </p>
                </motion.div>
              )}
            </SectionCard>
          </motion.div>

          {/* ── 4. OBJETIVOS ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <SectionCard>
              <SectionHeader number={4} title="OBJETIVOS DO ALUNO" subtitle="Mapeamento de histórico de treino e metas." />
              <div className="space-y-5">
                <div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      color: "#B0B0B0",
                      letterSpacing: "0.04em",
                    }}
                  >
                    QUAL SEU PRINCIPAL OBJETIVO? <span style={{ color: "#FF6B1A" }}>*</span>
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                    {objectives.map((obj) => (
                      <ObjectiveButton
                        key={obj.id}
                        label={obj.label}
                        icon={obj.icon}
                        selected={objetivo === obj.id}
                        onClick={() => setObjetivo(obj.id)}
                      />
                    ))}
                  </div>
                </div>
                <Row>
                  <FormSelect
                    label="Já treinou antes?"
                    required
                    value={jaTreinou}
                    onChange={setJaTreinou}
                    options={[
                      { value: "sim", label: "Sim" },
                      { value: "nao", label: "Não" },
                    ]}
                  />
                  <FormInput
                    label="Há quanto tempo pratica exercícios?"
                    placeholder="Ex: 6 meses, 2 anos"
                    value={tempoExercicio}
                    onChange={(e) => setTempoExercicio(e.target.value)}
                  />
                </Row>
                <Row>
                  <FormSelect
                    label="Quantas vezes por semana pretende treinar?"
                    required
                    value={vezessemana}
                    onChange={setVezesSemana}
                    options={[
                      { value: "1", label: "1x por semana" },
                      { value: "2", label: "2x por semana" },
                      { value: "3", label: "3x por semana" },
                      { value: "4", label: "4x por semana" },
                      { value: "5", label: "5x por semana" },
                      { value: "6+", label: "6x ou mais" },
                    ]}
                  />
                  <FormInput
                    label="Preferência de horário?"
                    placeholder="Ex: manhã, tarde, noite"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                  />
                </Row>
              </div>
            </SectionCard>
          </motion.div>

          {/* ── 5. INFORMAÇÕES CORPORAIS ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}>
            <SectionCard>
              <SectionHeader
                number={5}
                title="INFORMAÇÕES CORPORAIS"
                subtitle="Avaliação inicial para acompanhamento de evolução."
                optional
              />
              <div className="space-y-4">
                <Row cols={4}>
                  <FormInput
                    label="Peso"
                    type="number"
                    placeholder="75"
                    suffix="kg"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                  />
                  <FormInput
                    label="Altura"
                    type="number"
                    placeholder="170"
                    suffix="cm"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                  />
                  <FormInput
                    label="IMC"
                    type="number"
                    placeholder="Auto"
                    value={imc}
                    readOnly
                    onChange={() => {}}
                    style={{ opacity: 0.7, cursor: "not-allowed" }}
                  />
                  <FormInput
                    label="% Gordura"
                    type="number"
                    placeholder="20"
                    suffix="%"
                    value={gordura}
                    onChange={(e) => setGordura(e.target.value)}
                  />
                </Row>
                <FormTextarea
                  label="Medidas Corporais"
                  placeholder="Ex: Braço 35cm, Cintura 80cm, Quadril 96cm"
                  rows={3}
                  value={medidas}
                  onChange={(e) => setMedidas(e.target.value)}
                />
              </div>
            </SectionCard>
          </motion.div>

          {/* ── 6. PLANO CONTRATADO ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
            <SectionCard>
              <SectionHeader number={6} title="PLANO CONTRATADO" subtitle="Dados do plano que o aluno está contratando." />
              <div className="space-y-4">
                <Row>
                  <FormSelect
                    label="Tipo de Plano"
                    required
                    value={plano}
                    onChange={setPlano}
                    options={
                      planosDisponiveis.length > 0
                        ? planosDisponiveis
                        : [{ value: "", label: "Carregando planos..." }]
                    }
                  />
                  <FormInput
                    label="Valor (R$)"
                    required
                    type="number"
                    placeholder="150,00"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </Row>
                <Row>
                  <FormInput
                    label="Data de Início"
                    required
                    type="date"
                    value={dataInicio}
                    onChange={(e) => setDataInicio(e.target.value)}
                  />
                  <FormInput
                    label="Data de Vencimento"
                    required
                    type="date"
                    value={dataVencimento}
                    onChange={(e) => setDataVencimento(e.target.value)}
                  />
                </Row>
                <FormSelect
                  label="Forma de Pagamento"
                  required
                  value={pagamento}
                  onChange={setPagamento}
                  options={[
                    { value: "dinheiro", label: "Dinheiro" },
                    { value: "pix", label: "PIX" },
                    { value: "debito", label: "Cartão de Débito" },
                    { value: "credito", label: "Cartão de Crédito" },
                    { value: "boleto", label: "Boleto Bancário" },
                  ]}
                />
              </div>
            </SectionCard>
          </motion.div>

          {/* ── 7. TERMO DE RESPONSABILIDADE ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
            <SectionCard>
              <SectionHeader number={7} title="TERMO DE RESPONSABILIDADE" />

              <div
                className="p-4 rounded-lg mb-5 space-y-3"
                style={{ backgroundColor: "#111111", border: "1px solid #2D2D2D" }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#B0B0B0",
                    lineHeight: 1.65,
                  }}
                >
                  Declaro que as informações acima são verdadeiras e estou ciente de que a prática de atividades físicas envolve riscos. Comprometo-me a informar qualquer alteração em meu estado de saúde à administração da academia.
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#B0B0B0",
                    lineHeight: 1.65,
                  }}
                >
                  Autorizo o uso dos meus dados conforme a Lei Geral de Proteção de Dados (LGPD) para fins administrativos da academia, incluindo comunicações sobre serviços, agendamentos e informações relevantes.
                </p>
              </div>

              <Row>
                <FormInput
                  label="Assinatura do Aluno"
                  placeholder="Nome completo como assinatura"
                />
                <FormInput
                  label="Data"
                  type="date"
                  defaultValue={today}
                />
              </Row>

              {/* Submit button */}
              <div className="mt-6 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#C8F135",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#0A0A0A",
                    letterSpacing: "0.06em",
                    boxShadow: "0 0 24px rgba(200,241,53,0.25)",
                  }}
                >
                  {saving
                    ? <Loader2 size={18} className="animate-spin" />
                    : <Save size={18} />}
                  {saving ? "REGISTRANDO..." : "REGISTRAR ALUNO"}
                </motion.button>
              </div>
            </SectionCard>
          </motion.div>

          {/* bottom padding */}
          <div className="h-8" />
        </main>
      </div>
    </div>
  );
}
