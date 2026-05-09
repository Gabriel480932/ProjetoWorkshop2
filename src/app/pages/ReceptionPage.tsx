import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { X, Search, Mail, Hash, CheckCircle, AlertTriangle } from "lucide-react";
import imgLogo from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";
import { supabase } from "../../lib/supabase";

type StudentRecord = {
  id: string;
  code: string;
  name: string;
  plan: string;
  status: string;
  email: string;
  avatar: string;
};

type ScreenState = "idle" | "success" | "warning" | "error";
type InputMode  = "codigo" | "email";

const QR_VALUE = `${window.location.origin}/dashboard/recepcao`;

// ── PIN Modal ─────────────────────────────────────────────────────────────
interface PinModalProps {
  correctPin: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function PinModal({ correctPin, onConfirm, onCancel }: PinModalProps) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError]   = useState(false);
  const [shake, setShake]   = useState(false);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => { refs[0].current?.focus(); }, []);

  const handleKey = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val.slice(-1);
    setDigits(next);
    setError(false);
    if (val && i < 3) refs[i + 1].current?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      refs[i - 1].current?.focus();
    }
    if (e.key === "Enter") confirm();
  };

  const confirm = () => {
    if (digits.join("") === correctPin) {
      onConfirm();
    } else {
      setError(true);
      setShake(true);
      setDigits(["", "", "", ""]);
      setTimeout(() => { setShake(false); refs[0].current?.focus(); }, 600);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onCancel}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xs mx-4 rounded-2xl border border-[#2D2D2D] p-6"
        style={{ backgroundColor: "#111111", boxShadow: "0 24px 64px rgba(0,0,0,0.8)" }}
      >
        {/* Lock icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(232,39,26,0.12)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8271A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
        </div>

        <h2
          className="text-center mb-1"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#FFFFFF", letterSpacing: "0.06em" }}
        >
          ACESSO RESTRITO
        </h2>
        <p
          className="text-center mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8125rem", color: "#6B6B6B" }}
        >
          Digite o PIN de 4 dígitos para sair
        </p>

        {/* PIN inputs */}
        <motion.div
          animate={shake ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3 mb-4"
        >
          {digits.map((d, i) => (
            <input
              key={i}
              ref={refs[i]}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleKey(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center rounded-xl border outline-none transition-all text-white"
              style={{
                backgroundColor: "#1A1A1A",
                borderColor: error ? "#E02020" : d ? "#C8F135" : "#2D2D2D",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                caretColor: "#C8F135",
              }}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", color: "#E02020" }}
            >
              Senha incorreta. Tente novamente.
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex gap-2 mt-2">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-[#2D2D2D] transition-colors hover:bg-[#1E1E1E]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: "#6B6B6B" }}
          >
            CANCELAR
          </button>
          <button
            onClick={confirm}
            className="flex-1 py-2.5 rounded-xl transition-all hover:brightness-110"
            style={{ backgroundColor: "#E8271A", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.8125rem", color: "#FFFFFF" }}
          >
            CONFIRMAR
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Success overlay ────────────────────────────────────────────────────────
interface SuccessOverlayProps {
  student: StudentRecord;
  onDone: () => void;
}

function SuccessOverlay({ student, onDone }: SuccessOverlayProps) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  const isAlert = student.status === "em-atraso";
  const accentColor = isAlert ? "#E02020" : "#22C55E";
  const bgColor     = isAlert ? "rgba(224,32,32,0.08)" : "rgba(34,197,94,0.08)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center"
      style={{ backgroundColor: isAlert ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.92)" }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        {/* Icon */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ backgroundColor: bgColor, border: `2px solid ${accentColor}` }}
        >
          {isAlert ? (
            <AlertTriangle size={44} style={{ color: accentColor }} />
          ) : (
            <CheckCircle size={44} style={{ color: accentColor }} />
          )}
        </div>

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2" style={{ borderColor: accentColor }}>
          <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
        </div>

        {isAlert ? (
          <div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "2rem", color: accentColor, letterSpacing: "0.04em" }}>
              ACESSO NEGADO
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.125rem", color: "#FFFFFF", marginTop: 4 }}>
              {student.name}
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "#6B6B6B", marginTop: 4 }}>
              Mensalidade em atraso — consulte a recepção
            </p>
          </div>
        ) : (
          <div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "2rem", color: "#FFFFFF", letterSpacing: "0.04em" }}>
              BEM-VINDO!
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.25rem", color: accentColor, marginTop: 4 }}>
              {student.name}
            </p>
            <span
              className="inline-block mt-2 px-3 py-1 rounded-md"
              style={{ backgroundColor: "rgba(200,241,53,0.1)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#C8F135", letterSpacing: "0.1em" }}
            >
              {student.plan}
            </span>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "#6B6B6B", marginTop: 8 }}>
              Check-in registrado às {new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        )}

        {/* Auto-dismiss bar */}
        <motion.div
          className="w-48 h-0.5 rounded-full mt-2 overflow-hidden"
          style={{ backgroundColor: "#1E1E1E" }}
        >
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────
export function ReceptionPage() {
  const navigate = useNavigate();
  const [showPin, setShowPin]           = useState(false);
  const [inputMode, setInputMode]       = useState<InputMode>("codigo");
  const [inputValue, setInputValue]     = useState("");
  const [screen, setScreen]             = useState<ScreenState>("idle");
  const [foundStudent, setFoundStudent] = useState<StudentRecord | null>(null);
  const [correctPin, setCorrectPin]     = useState("1234");
  const inputRef = useRef<HTMLInputElement>(null);

  // Carregar PIN do banco
  useEffect(() => {
    supabase
      .from("configuracoes_academia")
      .select("pin_recepcao")
      .limit(1)
      .single()
      .then(({ data }) => { if (data?.pin_recepcao) setCorrectPin(data.pin_recepcao); });
  }, []);

  // ESC key → open PIN modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); setShowPin(true); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleClose = useCallback(() => navigate("/dashboard"), [navigate]);

  const findStudent = async (query: string): Promise<StudentRecord | null> => {
    const q = query.trim();
    if (!q) return null;
    const field = inputMode === "codigo" ? "matricula" : "email";
    const { data } = await supabase
      .from("alunos")
      .select(`
        id, nome, email, foto_url, matricula,
        planos_alunos ( status, data_venc, planos ( nome ) ),
        pagamentos ( status )
      `)
      .eq(field, inputMode === "codigo" ? q : q.toLowerCase())
      .limit(1)
      .single();

    if (!data) return null;

    const planoAtivo = (data as any).planos_alunos?.find((p: any) => p.status === "ATIVO") ?? (data as any).planos_alunos?.[0];
    const planName   = planoAtivo?.planos?.nome ?? "BASIC";
    const venc       = planoAtivo?.data_venc ? new Date(planoAtivo.data_venc) : null;
    const hoje       = new Date();
    const isLate     = venc ? venc < hoje : false;

    return {
      id:     (data as any).id,
      code:   (data as any).matricula,
      name:   (data as any).nome,
      plan:   planName,
      status: isLate ? "em-atraso" : "em-dia",
      email:  (data as any).email ?? "",
      avatar: (data as any).foto_url ?? "",
    };
  };

  const triggerCheckin = async (student: StudentRecord | null) => {
    if (!student) {
      setScreen("error");
      setTimeout(() => setScreen("idle"), 3000);
      return;
    }
    const { error: checkinErr } = await supabase.from("checkins").insert({
      aluno_id:      student.id,
      tipo:          "MANUAL",
      identificador: inputValue.trim(),
    });
    if (checkinErr) {
      console.error("Erro ao registrar check-in:", checkinErr.message);
    }
    setFoundStudent(student);
    setScreen(student.status === "em-atraso" ? "warning" : "success");
    setInputValue("");
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    triggerCheckin(await findStudent(inputValue));
  };

  return (
    <div className="fixed inset-0 flex flex-col" style={{ backgroundColor: "#090909" }}>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 h-12 sm:h-14 border-b"
        style={{ backgroundColor: "rgba(13,13,13,0.85)", borderColor: "#111111", backdropFilter: "blur(8px)" }}
      >
        <div className="flex items-center gap-3">
          <img src={imgLogo} alt="FORGEE" className="w-6 h-6 object-contain" />
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#F2F2F2",
              letterSpacing: "0.04em",
            }}
          >
            MODO RECEPÇÃO ATIVO
          </span>
          {/* Live pulse */}
          <span className="flex items-center gap-1.5 ml-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#E8271A" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "#E8271A" }} />
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.625rem", fontWeight: 600, color: "#E8271A", letterSpacing: "0.08em" }}>
              AO VIVO
            </span>
          </span>
        </div>

        <button
          onClick={() => setShowPin(true)}
          className="opacity-50 hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-white/5"
          aria-label="Fechar modo recepção"
        >
          <X size={20} color="#F2F2F2" />
        </button>
      </header>

      {/* ── Main content ───────────────────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-lg flex flex-col items-center gap-5 sm:gap-6">

          {/* Headline */}
          <div className="text-center">
            <h1
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 5.5vw, 3.75rem)",
                color: "#F2F2F2",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              APROXIME O QR CODE
            </h1>
            <p
              className="mt-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                color: "#A8A8A8",
              }}
            >
              ou digite seu código de membro / email
            </p>
          </div>

          {/* QR Code area */}
          <div
            className="rounded-xl overflow-hidden flex items-center justify-center"
            style={{
              width: "min(280px, 72vw)",
              height: "min(280px, 72vw)",
              border: "2.5px solid #2A2A2A",
              backgroundColor: "#0D0D0D",
              position: "relative",
            }}
          >
            {/* Corner markers */}
            {[
              { top: 10, left: 10, borderStyle: "border-t-2 border-l-2" },
              { top: 10, right: 10, borderStyle: "border-t-2 border-r-2" },
              { bottom: 10, left: 10, borderStyle: "border-b-2 border-l-2" },
              { bottom: 10, right: 10, borderStyle: "border-b-2 border-r-2" },
            ].map((corner, i) => (
              <div
                key={i}
                className="absolute w-5 h-5"
                style={{
                  top: corner.top, right: (corner as any).right, bottom: (corner as any).bottom, left: (corner as any).left,
                  borderColor: "#E8271A",
                  borderTopWidth: corner.borderStyle.includes("border-t") ? 2 : 0,
                  borderLeftWidth: corner.borderStyle.includes("border-l") ? 2 : 0,
                  borderRightWidth: corner.borderStyle.includes("border-r") ? 2 : 0,
                  borderBottomWidth: corner.borderStyle.includes("border-b") ? 2 : 0,
                }}
              />
            ))}

            {/* Scan line animation */}
            <motion.div
              animate={{ y: ["-45%", "45%", "-45%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 right-4 h-px opacity-40"
              style={{ background: "linear-gradient(90deg, transparent, #E8271A, transparent)" }}
            />

            {/* QR Code */}
            <QRCodeSVG
              value={QR_VALUE}
              size={Math.min(200, window.innerWidth * 0.5)}
              bgColor="transparent"
              fgColor="#2E2E2E"
              level="M"
            />
          </div>

          {/* Error state */}
          <AnimatePresence>
            {screen === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "#E02020" }}
              >
                Aluno não encontrado. Verifique os dados.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Input mode tabs */}
          <div
            className="flex rounded-xl overflow-hidden border"
            style={{ borderColor: "#2A2A2A", backgroundColor: "#111111" }}
          >
            <button
              onClick={() => { setInputMode("codigo"); setInputValue(""); }}
              className="flex items-center gap-2 px-4 py-2 transition-all"
              style={{
                backgroundColor: inputMode === "codigo" ? "#E8271A" : "transparent",
                color: inputMode === "codigo" ? "#FFFFFF" : "#606060",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
              }}
            >
              <Hash size={13} />
              CÓDIGO
            </button>
            <button
              onClick={() => { setInputMode("email"); setInputValue(""); }}
              className="flex items-center gap-2 px-4 py-2 transition-all"
              style={{
                backgroundColor: inputMode === "email" ? "#E8271A" : "transparent",
                color: inputMode === "email" ? "#FFFFFF" : "#606060",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
              }}
            >
              <Mail size={13} />
              EMAIL
            </button>
          </div>

          {/* Input + submit */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#606060" }} />
              <input
                ref={inputRef}
                type={inputMode === "email" ? "email" : "text"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={inputMode === "codigo" ? "Digite o código..." : "Digite o email..."}
                className="w-full pl-10 pr-4 py-3 rounded-xl outline-none transition-all"
                style={{
                  backgroundColor: "#0D0D0D",
                  border: "1.5px solid #303030",
                  color: "#F2F2F2",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.9375rem",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#E8271A")}
                onBlur={(e)  => (e.target.style.borderColor = "#303030")}
              />
            </div>

            <p
              className="text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.6875rem", color: "#606060", letterSpacing: "0.04em" }}
            >
              {inputMode === "codigo" ? "Ex: 12345" : "Ex: joao@email.com"}
            </p>

            <button
              type="submit"
              className="w-full py-3 rounded-xl transition-all hover:brightness-110"
              style={{
                backgroundColor: "#E8271A",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#FFFFFF",
                letterSpacing: "0.06em",
              }}
            >
              REGISTRAR CHECK-IN
            </button>
          </form>
        </div>
        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 py-3 border-t"
        style={{ backgroundColor: "rgba(13,13,13,0.7)", borderColor: "#1A1A1A" }}
      >
        <p
          className="opacity-60 hidden sm:block"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.5625rem", color: "#606060", letterSpacing: "0.1em" }}
        >
          SCANNER QR CODE ATIVO • VALIDAÇÃO AUTOMÁTICA • ENTRADA MANUAL DISPONÍVEL
        </p>
        <p
          className="opacity-60 sm:hidden"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.5625rem", color: "#606060", letterSpacing: "0.08em" }}
        >
          QR CODE ATIVO
        </p>
        <button
          onClick={() => setShowPin(true)}
          className="opacity-60 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.5625rem", color: "#606060", letterSpacing: "0.1em" }}
        >
          PRESSIONE ESC PARA VOLTAR
        </button>
      </footer>

      {/* ── Overlays ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {(screen === "success" || screen === "warning") && foundStudent && (
          <SuccessOverlay
            key="success"
            student={foundStudent}
            onDone={() => { setScreen("idle"); setFoundStudent(null); }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPin && (
          <PinModal
            key="pin"
            correctPin={correctPin}
            onConfirm={handleClose}
            onCancel={() => setShowPin(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
