import { UserPlus, Radio, Menu } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
  title?: string;
  subtitle?: string;
}

function todaySubtitle() {
  const now = new Date();
  const dia = now.toLocaleDateString("pt-BR", { weekday: "short" }).toUpperCase().replace(".", "");
  const data = now.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase().replace(/\./g, "").replace(" DE ", " ");
  return `VISÃO GERAL — ${dia}, ${data}`;
}

export function DashboardHeader({ onMenuClick, title = "DASHBOARD", subtitle = todaySubtitle() }: DashboardHeaderProps) {
  const navigate = useNavigate();
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-16 lg:h-20 border-b border-[#2D2D2D] flex items-center justify-between px-4 lg:px-8"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Left side */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-[#D4D4D4] hover:text-white p-1 flex-shrink-0"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>

        {/* Title */}
        <div className="min-w-0">
          <h1
            className="text-white tracking-tight text-base sm:text-lg lg:text-2xl truncate"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            {title}
          </h1>
          <p
            className="text-[#6B6B6B] tracking-wide hidden md:block text-xs truncate"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-shrink-0">
        <button
          onClick={() => navigate("/dashboard/alunos/novo")}
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1E1E1E] border border-[#2D2D2D] text-[#D4D4D4] hover:text-[#C8F135] hover:border-[#C8F135] transition-all whitespace-nowrap text-xs"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          aria-label="Novo aluno"
        >
          <UserPlus size={16} className="flex-shrink-0" />
          <span>NOVO ALUNO</span>
        </button>

        <button
          onClick={() => navigate("/dashboard/recepcao")}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 lg:py-2.5 rounded-lg bg-[#FF6B1A] hover:bg-[#E05510] text-white transition-all hover:shadow-[0_0_24px_rgba(255,107,26,0.4)] whitespace-nowrap"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700 }}
        >
          <Radio size={14} className="flex-shrink-0" />
          <span className="hidden sm:inline">ATIVAR RECEPÇÃO</span>
          <span className="sm:hidden">RECEPÇÃO</span>
        </button>
      </div>
    </motion.header>
  );
}