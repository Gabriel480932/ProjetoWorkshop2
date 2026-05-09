import { useState, useRef, useEffect, forwardRef } from "react";
import { MoreVertical, MessageCircle, Ban } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export type StudentStatus = "em-dia" | "vencendo" | "em-atraso";
export type StudentPlan = "BASIC" | "PREMIUM" | "ELITE";

export type AlunoStatus = "ATIVO" | "INATIVO" | "INADIMPLENTE" | "SUSPENSO";

export const ALUNO_STATUS_CONFIG: Record<AlunoStatus, { label: string; color: string; bg: string }> = {
  ATIVO:        { label: "Ativo",        color: "#C8F135", bg: "rgba(200,241,53,0.12)" },
  INATIVO:      { label: "Inativo",      color: "#6B6B6B", bg: "rgba(107,107,107,0.12)" },
  INADIMPLENTE: { label: "Inadimplente", color: "#E02020", bg: "rgba(224,32,32,0.12)" },
  SUSPENSO:     { label: "Suspenso",     color: "#FF8340", bg: "rgba(255,131,64,0.12)" },
};

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: StudentStatus;
  alunoStatus: AlunoStatus;
  dateJoined: string;          // DD/MM/YYYY
  checkins: number;
  lastCheckin: string;         // DD/MM/YYYY
  avatar: string;
  payments: Payment[];
}

export interface Payment {
  id: string;
  date: string;
  status: "pago" | "atrasado" | "pendente";
  method: string;
  amount: number;
}

// ── status config ──────────────────────────────────────────────────────────
export const STATUS_CONFIG: Record<StudentStatus, { label: string; color: string; bg: string }> = {
  "em-dia":    { label: "Em dia",    color: "#C8F135", bg: "rgba(200,241,53,0.12)" },
  "vencendo":  { label: "Vencendo",  color: "#FF8340", bg: "rgba(255,131,64,0.12)" },
  "em-atraso": { label: "Em atraso", color: "#E02020", bg: "rgba(224,32,32,0.12)" },
};

const PLAN_COLOR: Record<StudentPlan, string> = {
  BASIC:   "#6B6B6B",
  PREMIUM: "#B0B0B0",
  ELITE:   "#C8F135",
};

interface StudentCardProps {
  student: Student;
  onClick: () => void;
  onBlock: () => void;
}

export const StudentCard = forwardRef<HTMLDivElement, StudentCardProps>(
  function StudentCard({ student, onClick, onBlock }, ref) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { label, color, bg } = STATUS_CONFIG[student.status];

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cleaned = student.phone.replace(/\D/g, "");
    window.open(`https://wa.me/55${cleaned}`, "_blank");
    setMenuOpen(false);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ backgroundColor: "#252525" }}
      onClick={onClick}
      className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border border-[#2D2D2D] cursor-pointer transition-colors relative"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      {/* Avatar */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2D2D2D]">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement!;
            parent.style.backgroundColor = "#2D2D2D";
            parent.style.display = "flex";
            parent.style.alignItems = "center";
            parent.style.justifyContent = "center";
            const initials = student.name.split(" ").map(n => n[0]).slice(0, 2).join("");
            parent.innerHTML = `<span style="color:#C8F135;font-family:'Oswald',sans-serif;font-weight:700;font-size:0.85rem">${initials}</span>`;
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-white truncate"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9375rem" }}
          >
            {student.name}
          </span>
          <span
            className="text-xs font-mono flex-shrink-0"
            style={{ color: "#E02020", fontWeight: 700 }}
          >
            #{student.id}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          <span
            className="text-xs px-1.5 py-0.5 rounded"
            style={{
              color,
              backgroundColor: bg,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.6875rem",
            }}
          >
            {label}
          </span>
          <span
            className="text-[#6B6B6B]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem" }}
          >
            • Cadastro: {student.dateJoined}
          </span>
        </div>
      </div>

      {/* Plan + menu */}
      <div className="flex items-center gap-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <span
          className="hidden sm:block text-xs tracking-widest"
          style={{
            color: PLAN_COLOR[student.plan],
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          {student.plan}
        </span>

        {/* Three-dot menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={(e) => { e.stopPropagation(); setMenuOpen((p) => !p); }}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6B6B6B] hover:text-white hover:bg-[#2D2D2D] transition-all"
          >
            <MoreVertical size={16} />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-10 w-44 rounded-xl border border-[#2D2D2D] z-20 overflow-hidden"
                style={{ backgroundColor: "#181818", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-[#D4D4D4] hover:bg-[#1E1E1E] hover:text-[#C8F135] transition-all"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
                >
                  <MessageCircle size={15} />
                  Enviar mensagem
                </button>
                <div className="h-px bg-[#2D2D2D] mx-3" />
                <button
                  onClick={(e) => { e.stopPropagation(); onBlock(); setMenuOpen(false); }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-[#E02020] hover:bg-[rgba(224,32,32,0.08)] transition-all"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8125rem", fontWeight: 600 }}
                >
                  <Ban size={15} />
                  Bloquear aluno
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
});