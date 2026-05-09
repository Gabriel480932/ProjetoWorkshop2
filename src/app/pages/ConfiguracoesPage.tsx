import { useState, useRef, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2, Shield, Phone, Mail, MapPin, User, Eye, EyeOff,
  Save, X, Plus, Trash2, Clock, Calendar, CreditCard, Zap,
  Database, Info, ExternalLink, ChevronDown,
} from "lucide-react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";

// ─────────────────────────────────────────────────────────────────────────────
// Design Tokens
// ─────────────────────────────────────────────────────────────────────────────
const BG_PAGE   = "#090909";
const BG_CARD   = "#0D0D0D";
const BG_INPUT  = "#1A1A1A";
const BG_DARK   = "#111111";
const BORDER    = "#303030";
const BORDER_MID = "#252525";
const RED       = "#E8271A";
const LIME      = "#C8F135";
const ORANGE    = "#FF6B1A";
const TEXT_HI   = "#F2F2F2";
const TEXT_MID  = "#A8A8A8";
const TEXT_LO   = "#606060";

const F_DISPLAY = "'Oswald', sans-serif";
const F_BODY    = "'Plus Jakarta Sans', sans-serif";

// ─────────────────────────────────────────────────────────────────────────────
// Shared atoms
// ─────────────────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: F_BODY, fontWeight: 500, fontSize: "0.875rem", color: TEXT_HI }}>
      {children}
    </p>
  );
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: F_BODY, fontSize: "0.75rem", color: TEXT_LO, marginTop: 2 }}>
      {children}
    </p>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ElementType;
  hint?: string;
  className?: string;
  readOnly?: boolean;
}

function InputField({
  label, value, onChange, placeholder = "", type = "text",
  icon: Icon, hint, className = "", readOnly = false,
}: InputFieldProps) {
  const focusStyle = { borderColor: RED };
  const blurStyle  = { borderColor: BORDER };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label>{label}</Label>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: TEXT_LO }}
          />
        )}
        <input
          type={type}
          value={value}
          readOnly={readOnly}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 rounded-xl outline-none transition-colors"
          style={{
            backgroundColor: BG_INPUT,
            border: `1px solid ${BORDER}`,
            color: readOnly ? TEXT_MID : TEXT_HI,
            fontFamily: F_BODY,
            fontSize: "0.9375rem",
            paddingLeft: Icon ? "2.75rem" : "1rem",
            paddingRight: "1rem",
          }}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e)  => Object.assign(e.target.style, blurStyle)}
        />
      </div>
      {hint && <FieldHint>{hint}</FieldHint>}
    </div>
  );
}

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

function PasswordField({ label, value, onChange, placeholder = "" }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <Shield size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: TEXT_LO }} />
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 pl-10 pr-11 rounded-xl outline-none transition-colors"
          style={{
            backgroundColor: BG_INPUT,
            border: `1px solid ${BORDER}`,
            color: TEXT_HI,
            fontFamily: F_BODY,
            fontSize: "0.9375rem",
          }}
          onFocus={(e) => (e.target.style.borderColor = RED)}
          onBlur={(e)  => (e.target.style.borderColor = BORDER)}
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors hover:opacity-80"
          style={{ color: TEXT_LO }}
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

// Card wrapper
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border overflow-hidden ${className}`}
      style={{ backgroundColor: BG_CARD, borderColor: BORDER }}
    >
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="px-6 pt-6 pb-5 border-b" style={{ borderColor: BORDER_MID }}>
      <h2 style={{ fontFamily: F_DISPLAY, fontWeight: 700, fontSize: "1.125rem", color: TEXT_HI, letterSpacing: "0.04em" }}>
        {title}
      </h2>
      <p className="mt-1" style={{ fontFamily: F_BODY, fontSize: "0.9375rem", color: TEXT_MID }}>
        {subtitle}
      </p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: F_BODY, fontWeight: 600, fontSize: "1rem", color: TEXT_HI }}>
      {children}
    </h3>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared Form Footer
// ─────────────────────────────────────────────────────────────────────────────
function FormFooter({ onSave }: { onSave?: () => void }) {
  const [saved, setSaved] = useState(false);

  const handle = () => {
    onSave?.();
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div
      className="flex items-center justify-end gap-3 px-6 py-4 border-t"
      style={{ borderColor: BORDER_MID, backgroundColor: "#0A0A0A" }}
    >
      <button
        type="button"
        className="px-5 py-2.5 rounded-xl border transition-colors hover:bg-[#1A1A1A]"
        style={{ fontFamily: F_BODY, fontWeight: 500, fontSize: "0.9375rem", color: TEXT_HI, borderColor: BORDER }}
      >
        Cancelar
      </button>
      <button
        type="button"
        onClick={handle}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all hover:brightness-110 active:scale-95"
        style={{
          backgroundColor: saved ? "#22C55E" : RED,
          fontFamily: F_BODY,
          fontWeight: 600,
          fontSize: "0.9375rem",
          color: "#FFFFFF",
        }}
      >
        <Save size={15} />
        {saved ? "Salvo!" : "Salvar Alterações"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Geral
// ─────────────────────────────────────────────────────────────────────────────
function TabGeral() {
  const [configId, setConfigId] = useState<string | null>(null);
  const [f, setF] = useState({
    nome: "", cnpj: "", telefone: "", email: "",
    endereco: "", cidade: "", estado: "", cep: "",
  });
  const s = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    supabase.from("configuracoes_academia").select("*").limit(1).single()
      .then(({ data }) => {
        if (data) {
          setConfigId(data.id);
          setF({
            nome:      data.nome      ?? "",
            cnpj:      data.cnpj      ?? "",
            telefone:  data.telefone  ?? "",
            email:     data.email     ?? "",
            endereco:  data.endereco  ?? "",
            cidade:    data.cidade    ?? "",
            estado:    data.estado    ?? "",
            cep:       data.cep       ?? "",
          });
        }
      });
  }, []);

  const handleSave = async () => {
    if (configId) {
      await supabase.from("configuracoes_academia").update(f).eq("id", configId);
    } else {
      const { data } = await supabase.from("configuracoes_academia").insert(f).select().single();
      if (data) setConfigId((data as any).id);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <Card>
        <CardHeader
          title="INFORMAÇÕES DA ACADEMIA"
          subtitle="Configure os dados básicos da sua academia"
        />
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField label="Nome da Academia" icon={Building2} value={f.nome} onChange={s("nome")} />
            <InputField label="CNPJ"             icon={Shield}    value={f.cnpj} onChange={s("cnpj")} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField label="Telefone" icon={Phone} value={f.telefone} onChange={s("telefone")} />
            <InputField label="Email"    icon={Mail}  value={f.email}    onChange={s("email")} type="email" />
          </div>
          <InputField label="Endereço" icon={MapPin} value={f.endereco} onChange={s("endereco")} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <InputField label="Cidade" value={f.cidade} onChange={s("cidade")} className="col-span-2 sm:col-span-1" />
            <InputField label="Estado" value={f.estado} onChange={s("estado")} />
            <InputField label="CEP"    value={f.cep}    onChange={s("cep")} />
          </div>
        </div>
        <FormFooter onSave={handleSave} />
      </Card>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Perfil Admin
// ─────────────────────────────────────────────────────────────────────────────
function TabPerfil() {
  const [usuarioId, setUsuarioId] = useState<string | null>(null);
  const [f, setF] = useState({
    nome: "", email: "", telefone: "", senhaAtual: "", novaSenha: "",
  });
  const s = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase
        .from("usuarios")
        .select("id, nome, email, telefone")
        .eq("auth_id", user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setUsuarioId(data.id);
            setF((p) => ({ ...p, nome: data.nome ?? "", email: data.email ?? "", telefone: data.telefone ?? "" }));
          }
        });
    });
  }, []);

  const handleSave = async () => {
    if (!usuarioId) return;
    const updates: Record<string, string> = { nome: f.nome, email: f.email, telefone: f.telefone };
    await supabase.from("usuarios").update(updates).eq("id", usuarioId);
    if (f.novaSenha.trim()) {
      await supabase.auth.updateUser({ password: f.novaSenha.trim() });
      setF((p) => ({ ...p, senhaAtual: "", novaSenha: "" }));
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <Card>
        <CardHeader
          title="PERFIL DO ADMINISTRADOR"
          subtitle="Gerencie suas informações pessoais e credenciais"
        />
        <div className="p-6 space-y-6">
          {/* Personal info */}
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField label="Nome Completo" icon={User}  value={f.nome}  onChange={s("nome")} />
              <InputField label="Email"         icon={Mail}  value={f.email} onChange={s("email")} type="email" />
            </div>
            <InputField label="Telefone" icon={Phone} value={f.telefone} onChange={s("telefone")} className="sm:max-w-[calc(50%-10px)]" />
          </div>

          <div className="border-t" style={{ borderColor: BORDER_MID }} />

          <div className="space-y-5">
            <SectionTitle>ALTERAR SENHA</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <PasswordField label="Senha Atual" value={f.senhaAtual} onChange={s("senhaAtual")} placeholder="Digite sua senha atual" />
              <PasswordField label="Nova Senha"  value={f.novaSenha}  onChange={s("novaSenha")}  placeholder="Digite a nova senha" />
            </div>
          </div>
        </div>
        <FormFooter onSave={handleSave} />
      </Card>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Planos
// ─────────────────────────────────────────────────────────────────────────────
interface Benefit { id: number; text: string }
interface Plan {
  id: number;
  name: string;
  tag: string;
  price: string;
  color: string;
  benefits: Benefit[];
}

const PLAN_COLORS = [LIME, RED, ORANGE, "#00E5FF", "#A855F7"];

interface PlanCardProps {
  plan: Plan;
  onPriceChange: (id: number, v: string) => void;
  onAddBenefit: (id: number, text: string) => void;
  onDeleteBenefit: (planId: number, benefitId: number) => void;
  onDeletePlan: (id: number) => void;
}

function PlanCard({ plan, onPriceChange, onAddBenefit, onDeleteBenefit, onDeletePlan }: PlanCardProps) {
  const [addingBenefit, setAddingBenefit] = useState(false);
  const [newBenefit, setNewBenefit] = useState("");
  const benefitInputRef = useRef<HTMLInputElement>(null);

  const confirmBenefit = () => {
    if (!newBenefit.trim()) { setAddingBenefit(false); return; }
    onAddBenefit(plan.id, newBenefit.trim());
    setNewBenefit("");
    setAddingBenefit(false);
  };

  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: BG_INPUT, borderColor: BORDER_MID }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            style={{ fontFamily: F_DISPLAY, fontWeight: 700, fontSize: "1.125rem", color: plan.color, letterSpacing: "0.08em" }}
          >
            {plan.name}
          </span>
          <span style={{ fontFamily: F_BODY, fontSize: "0.8125rem", color: TEXT_LO }}>
            {plan.tag}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span style={{ fontFamily: F_BODY, fontSize: "1rem", color: TEXT_LO }}>$</span>
          <input
            type="number"
            value={plan.price}
            onChange={(e) => onPriceChange(plan.id, e.target.value)}
            className="w-24 py-2 px-3 rounded-lg text-right outline-none transition-colors"
            style={{
              backgroundColor: BG_CARD,
              border: `1px solid ${BORDER}`,
              color: TEXT_HI,
              fontFamily: F_BODY,
              fontSize: "1rem",
              fontWeight: 600,
            }}
            onFocus={(e) => (e.target.style.borderColor = plan.color)}
            onBlur={(e)  => (e.target.style.borderColor = BORDER)}
          />
          <button
            onClick={() => onDeletePlan(plan.id)}
            className="ml-1 p-1.5 rounded-lg transition-colors hover:bg-red-900/20"
            style={{ color: TEXT_LO }}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Benefits */}
      <ul className="space-y-2 mb-3">
        {plan.benefits.map((b) => (
          <li key={b.id} className="flex items-center justify-between gap-2 group">
            <div className="flex items-center gap-2">
              <span style={{ color: plan.color, fontSize: "0.875rem" }}>•</span>
              <span style={{ fontFamily: F_BODY, fontSize: "0.9375rem", color: TEXT_MID }}>
                {b.text}
              </span>
            </div>
            <button
              onClick={() => onDeleteBenefit(plan.id, b.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded"
              style={{ color: TEXT_LO }}
            >
              <X size={12} />
            </button>
          </li>
        ))}
      </ul>

      {/* Add benefit */}
      <AnimatePresence mode="wait">
        {addingBenefit ? (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 mt-2"
          >
            <input
              ref={benefitInputRef}
              autoFocus
              value={newBenefit}
              onChange={(e) => setNewBenefit(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") confirmBenefit();
                if (e.key === "Escape") { setAddingBenefit(false); setNewBenefit(""); }
              }}
              placeholder="Nome do benefício..."
              className="flex-1 py-1.5 px-3 rounded-lg outline-none"
              style={{
                backgroundColor: BG_CARD,
                border: `1px solid ${plan.color}60`,
                color: TEXT_HI,
                fontFamily: F_BODY,
                fontSize: "0.875rem",
              }}
            />
            <button
              onClick={confirmBenefit}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              style={{ backgroundColor: plan.color + "20", color: plan.color, fontFamily: F_BODY }}
            >
              OK
            </button>
            <button
              onClick={() => { setAddingBenefit(false); setNewBenefit(""); }}
              style={{ color: TEXT_LO }}
            >
              <X size={14} />
            </button>
          </motion.div>
        ) : (
          <button
            key="btn"
            onClick={() => setAddingBenefit(true)}
            className="flex items-center gap-1.5 mt-1 transition-colors hover:opacity-80"
            style={{ fontFamily: F_BODY, fontWeight: 500, fontSize: "0.875rem", color: TEXT_LO }}
          >
            <Plus size={13} /> Adicionar benefício
          </button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Create Plan Modal
interface CreatePlanModalProps {
  onClose: () => void;
  onCreate: (plan: Plan) => void;
}

function CreatePlanModal({ onClose, onCreate }: CreatePlanModalProps) {
  const [form, setForm] = useState({ name: "", price: "", desc: "", featured: false });
  const s = (k: keyof typeof form) => (v: string | boolean) =>
    setForm((p) => ({ ...p, [k]: v }));

  const create = () => {
    if (!form.name.trim()) return;
    const plan: Plan = {
      id: Date.now(),
      name: form.name.toUpperCase(),
      tag: form.desc || "Plano personalizado",
      price: form.price || "0",
      color: PLAN_COLORS[Math.floor(Math.random() * PLAN_COLORS.length)],
      benefits: [],
    };
    onCreate(plan);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-2xl border overflow-hidden"
        style={{ backgroundColor: BG_INPUT, borderColor: BORDER, boxShadow: "0 32px 72px rgba(0,0,0,0.85)" }}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: BORDER_MID }}>
          <h3 style={{ fontFamily: F_DISPLAY, fontWeight: 700, fontSize: "1.125rem", color: TEXT_HI, letterSpacing: "0.04em" }}>
            CRIAR NOVO PLANO
          </h3>
          <button onClick={onClose} className="transition-colors hover:text-white" style={{ color: TEXT_LO }}>
            <X size={18} />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <Label>Nome do Plano</Label>
              <input
                value={form.name}
                onChange={(e) => s("name")(e.target.value)}
                placeholder="Ex: PREMIUM"
                className="w-full py-3 px-4 rounded-xl outline-none transition-colors"
                style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
                onFocus={(e) => (e.target.style.borderColor = RED)}
                onBlur={(e)  => (e.target.style.borderColor = BORDER)}
              />
            </div>
            {/* Preço */}
            <div className="flex flex-col gap-2">
              <Label>Preço Mensal</Label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ fontFamily: F_BODY, fontSize: "0.9375rem", color: TEXT_LO }}>$</span>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => s("price")(e.target.value)}
                  placeholder="0"
                  className="w-full py-3 pl-8 pr-4 rounded-xl outline-none transition-colors"
                  style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
                  onFocus={(e) => (e.target.style.borderColor = RED)}
                  onBlur={(e)  => (e.target.style.borderColor = BORDER)}
                />
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-2">
            <Label>Descrição</Label>
            <input
              value={form.desc}
              onChange={(e) => s("desc")(e.target.value)}
              placeholder="Breve descrição do plano"
              className="w-full py-3 px-4 rounded-xl outline-none transition-colors"
              style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
              onFocus={(e) => (e.target.style.borderColor = RED)}
              onBlur={(e)  => (e.target.style.borderColor = BORDER)}
            />
          </div>

          {/* Destaque checkbox */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div
              onClick={() => s("featured")(!form.featured)}
              className="w-4 h-4 rounded-sm border flex items-center justify-center transition-all flex-shrink-0"
              style={{
                backgroundColor: form.featured ? RED : BG_CARD,
                borderColor: form.featured ? RED : BORDER,
              }}
            >
              {form.featured && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontFamily: F_BODY, fontWeight: 500, fontSize: "0.9375rem", color: TEXT_HI }}>
              Marcar como plano em destaque
            </span>
          </label>
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t" style={{ borderColor: BORDER_MID }}>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border transition-colors hover:bg-[#222]"
            style={{ fontFamily: F_BODY, fontWeight: 500, fontSize: "0.9375rem", color: TEXT_HI, borderColor: BORDER }}
          >
            Cancelar
          </button>
          <button
            onClick={create}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: RED, fontFamily: F_BODY, fontWeight: 600, fontSize: "0.9375rem", color: "#FFF" }}
          >
            <Plus size={15} /> Criar Plano
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TabPlanos() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    supabase.from("planos").select("*").order("preco").then(({ data }) => {
      if (data) {
        const mapped: Plan[] = data.map((p: any, i: number) => ({
          id:       i + 1,
          _uuid:    p.id,
          name:     p.nome,
          tag:      p.subtitulo ?? "",
          price:    String(p.preco),
          color:    PLAN_COLORS[i % PLAN_COLORS.length],
          benefits: Array.isArray(p.beneficios)
            ? p.beneficios.map((t: string, j: number) => ({ id: j + 1, text: t }))
            : [],
        }));
        setPlans(mapped);
      }
    });
  }, []);

  const updatePrice = (id: number, v: string) =>
    setPlans((p) => p.map((pl) => pl.id === id ? { ...pl, price: v } : pl));

  const addBenefit = (planId: number, text: string) => {
    setPlans((p) =>
      p.map((pl) =>
        pl.id === planId
          ? { ...pl, benefits: [...pl.benefits, { id: Date.now(), text }] }
          : pl
      )
    );
  };

  const deleteBenefit = (planId: number, benefitId: number) =>
    setPlans((p) =>
      p.map((pl) =>
        pl.id === planId
          ? { ...pl, benefits: pl.benefits.filter((b) => b.id !== benefitId) }
          : pl
      )
    );

  const deletePlan = async (id: number) => {
    const plan = plans.find((p) => p.id === id) as any;
    if (plan?._uuid) await supabase.from("planos").delete().eq("id", plan._uuid);
    setPlans((p) => p.filter((pl) => pl.id !== id));
  };

  const handleSavePlans = async () => {
    for (const plan of plans) {
      const payload = {
        nome:       plan.name,
        subtitulo:  plan.tag,
        preco:      parseFloat(plan.price) || 0,
        beneficios: plan.benefits.map((b) => b.text),
      };
      const uuid = (plan as any)._uuid;
      if (uuid) {
        await supabase.from("planos").update(payload).eq("id", uuid);
      } else {
        await supabase.from("planos").insert(payload);
      }
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <Card>
          <CardHeader
            title="PLANOS E PREÇOS"
            subtitle="Configure os planos disponíveis para os alunos. As alterações refletem em todo o sistema."
          />

          <div className="p-6 space-y-4">
            {plans.length === 0 && (
              <p style={{ fontFamily: F_BODY, color: TEXT_LO, fontSize: "0.875rem" }}>
                Nenhum plano cadastrado. Crie o primeiro plano abaixo.
              </p>
            )}
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onPriceChange={updatePrice}
                onAddBenefit={addBenefit}
                onDeleteBenefit={deleteBenefit}
                onDeletePlan={deletePlan}
              />
            ))}

            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-dashed transition-all hover:border-[#E8271A] hover:text-[#E8271A] group"
              style={{ borderColor: BORDER, fontFamily: F_BODY, fontWeight: 600, fontSize: "0.9375rem", color: TEXT_LO }}
            >
              <Plus size={16} /> Criar Novo Plano
            </button>
          </div>

          <FormFooter onSave={handleSavePlans} />
        </Card>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <CreatePlanModal
            onClose={() => setShowModal(false)}
            onCreate={async (plan) => {
              const { data } = await supabase
                .from("planos")
                .insert({ nome: plan.name, subtitulo: plan.tag, preco: parseFloat(plan.price) || 0, beneficios: [] })
                .select()
                .single();
              const newPlan = { ...plan, _uuid: (data as any)?.id } as Plan;
              setPlans((p) => [...p, newPlan]);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Sistema
// ─────────────────────────────────────────────────────────────────────────────
function Toggle({ checked, onChange, color = RED }: { checked: boolean; onChange: (v: boolean) => void; color?: string }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="relative w-11 h-6 rounded-full transition-colors flex-shrink-0"
      style={{ backgroundColor: checked ? color : "#333" }}
    >
      <motion.span
        animate={{ x: checked ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm"
        style={{ left: 0 }}
      />
    </button>
  );
}

function TabSistema() {
  const [abertura,   setAbertura]   = useState("06:00");
  const [fechamento, setFechamento] = useState("22:00");
  const [diasRisco,  setDiasRisco]  = useState("10");
  const [diasVenc,   setDiasVenc]   = useState("5");
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifSMS,   setNotifSMS]   = useState(false);
  const [blockedLate, setBlockedLate] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <Card>
        <CardHeader
          title="CONFIGURAÇÕES DO SISTEMA"
          subtitle="Configure parâmetros operacionais do sistema"
        />

        <div className="p-6 space-y-8">

          {/* ── Horário de Funcionamento ── */}
          <section className="space-y-4">
            <SectionTitle>Horário de Funcionamento</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label>Abertura</Label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: TEXT_LO }} />
                  <input
                    type="time"
                    value={abertura}
                    onChange={(e) => setAbertura(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 rounded-xl outline-none transition-colors"
                    style={{ backgroundColor: BG_INPUT, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
                    onFocus={(e) => (e.target.style.borderColor = RED)}
                    onBlur={(e)  => (e.target.style.borderColor = BORDER)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Fechamento</Label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: TEXT_LO }} />
                  <input
                    type="time"
                    value={fechamento}
                    onChange={(e) => setFechamento(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 rounded-xl outline-none transition-colors"
                    style={{ backgroundColor: BG_INPUT, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
                    onFocus={(e) => (e.target.style.borderColor = RED)}
                    onBlur={(e)  => (e.target.style.borderColor = BORDER)}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="border-t" style={{ borderColor: BORDER_MID }} />

          {/* ── Alertas Automáticos ── */}
          <section className="space-y-4">
            <SectionTitle>Alertas Automáticos</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label>Dias sem check-in para risco</Label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: TEXT_LO }} />
                  <input
                    type="number"
                    value={diasRisco}
                    onChange={(e) => setDiasRisco(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 rounded-xl outline-none transition-colors"
                    style={{ backgroundColor: BG_INPUT, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
                    onFocus={(e) => (e.target.style.borderColor = RED)}
                    onBlur={(e)  => (e.target.style.borderColor = BORDER)}
                  />
                </div>
                <FieldHint>Dias sem frequência para considerar aluno em risco</FieldHint>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Dias antes do vencimento para alertar</Label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: TEXT_LO }} />
                  <input
                    type="number"
                    value={diasVenc}
                    onChange={(e) => setDiasVenc(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 rounded-xl outline-none transition-colors"
                    style={{ backgroundColor: BG_INPUT, border: `1px solid ${BORDER}`, color: TEXT_HI, fontFamily: F_BODY, fontSize: "0.9375rem" }}
                    onFocus={(e) => (e.target.style.borderColor = RED)}
                    onBlur={(e)  => (e.target.style.borderColor = BORDER)}
                  />
                </div>
                <FieldHint>Antecedência para notificar vencimento</FieldHint>
              </div>
            </div>

            {/* Toggles */}
            <div className="rounded-xl border divide-y overflow-hidden" style={{ borderColor: BORDER_MID }}>
              {[
                { label: "Notificações por e-mail",   desc: "Enviar alertas automáticos por e-mail",       checked: notifEmail, set: setNotifEmail },
                { label: "Notificações por SMS",       desc: "Enviar alertas automáticos por SMS",          checked: notifSMS,   set: setNotifSMS },
                { label: "Bloquear inadimplentes",     desc: "Negar entrada a alunos com pagamento em atraso", checked: blockedLate, set: setBlockedLate },
              ].map(({ label, desc, checked, set }) => (
                <div key={label} className="flex items-center justify-between gap-4 px-4 py-3.5" style={{ backgroundColor: BG_DARK }}>
                  <div>
                    <p style={{ fontFamily: F_BODY, fontWeight: 500, fontSize: "0.9375rem", color: TEXT_HI }}>{label}</p>
                    <p style={{ fontFamily: F_BODY, fontSize: "0.8125rem", color: TEXT_LO, marginTop: 1 }}>{desc}</p>
                  </div>
                  <Toggle checked={checked} onChange={set} />
                </div>
              ))}
            </div>
          </section>

          <div className="border-t" style={{ borderColor: BORDER_MID }} />

          {/* ── Informações do Sistema ── */}
          <section className="space-y-4">
            <SectionTitle>Informações do Sistema</SectionTitle>
            <div
              className="rounded-xl border overflow-hidden divide-y"
              style={{ borderColor: BORDER_MID, backgroundColor: BG_DARK }}
            >
              {[
                { label: "Versão:",           value: "1.0.0",             color: TEXT_HI },
                { label: "Última atualização:", value: "23 de fevereiro, 2026", color: TEXT_HI },
                { label: "Banco de dados:",   value: "Conectado",          color: "#22C55E" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center justify-between px-4 py-3.5" style={{ borderColor: BORDER_MID }}>
                  <span style={{ fontFamily: F_BODY, fontSize: "0.9375rem", color: TEXT_MID }}>{label}</span>
                  <span style={{ fontFamily: F_BODY, fontSize: "0.9375rem", fontWeight: 600, color }}>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t" style={{ borderColor: BORDER_MID }} />

          {/* ── Design System ── */}
          <section className="space-y-4">
            <SectionTitle>Design System</SectionTitle>
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: BORDER_MID, backgroundColor: BG_DARK }}
            >
              <p style={{ fontFamily: F_BODY, fontSize: "0.9375rem", color: TEXT_MID, marginBottom: 16 }}>
                Acesse a documentação completa do Design System com tokens, componentes e guias de estilo.
              </p>
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: RED, fontFamily: F_BODY, fontWeight: 600, fontSize: "0.9375rem", color: "#FFF" }}
              >
                <ExternalLink size={15} /> Abrir Design System
              </button>
            </div>
          </section>
        </div>

        <FormFooter />
      </Card>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab bar definition
// ─────────────────────────────────────────────────────────────────────────────
type Tab = "geral" | "perfil" | "planos" | "sistema";

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "geral",   label: "Geral",        icon: Building2 },
  { id: "perfil",  label: "Perfil Admin", icon: User },
  { id: "planos",  label: "Planos",       icon: CreditCard },
  { id: "sistema", label: "Sistema",      icon: Zap },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────
export function ConfiguracoesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab]     = useState<Tab>("geral");

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: BG_PAGE }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
          title="CONFIGURAÇÕES"
          subtitle="CONFIGURAÇÕES DO SISTEMA"
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">

          {/* ── Page heading ── */}
          <div>
            <h1
              style={{
                fontFamily: F_DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
                color: TEXT_HI,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              CONFIGURAÇÕES
            </h1>
            <p className="mt-1" style={{ fontFamily: F_BODY, fontSize: "1rem", color: TEXT_MID }}>
              Gerencie as configurações da academia
            </p>
          </div>

          {/* ── Tab bar ── */}
          <div className="flex gap-0.5 border-b overflow-x-auto scrollbar-none" style={{ borderColor: BORDER }}>
            {TABS.map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className="flex items-center gap-2 px-4 py-2.5 whitespace-nowrap flex-shrink-0 rounded-t-xl transition-all"
                  style={{
                    backgroundColor: active ? RED : "transparent",
                    color: active ? "#FFF" : TEXT_MID,
                    fontFamily: F_BODY,
                    fontWeight: active ? 600 : 400,
                    fontSize: "0.9375rem",
                    borderBottom: active ? `2px solid ${RED}` : "2px solid transparent",
                    marginBottom: "-1px",
                  }}
                >
                  <Icon size={15} />
                  {label}
                </button>
              );
            })}
          </div>

          {/* ── Tab content ── */}
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {activeTab === "geral"   && <TabGeral />}
              {activeTab === "perfil"  && <TabPerfil />}
              {activeTab === "planos"  && <TabPlanos />}
              {activeTab === "sistema" && <TabSistema />}
            </div>
          </AnimatePresence>

        </main>
      </div>
    </div>
  );
}
