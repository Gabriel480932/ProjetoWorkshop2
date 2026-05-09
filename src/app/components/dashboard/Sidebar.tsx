import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, Users, CheckCircle, Radio, Settings, LogOut, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "../../../lib/supabase";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard",     path: "/dashboard" },
  { icon: Users,           label: "Alunos",        path: "/dashboard/alunos" },
  { icon: CheckCircle,     label: "Check-ins",     path: "/dashboard/checkins" },
  { icon: Radio,           label: "Modo Recepção", path: "/dashboard/recepcao" },
  { icon: Settings,        label: "Configurações", path: "/dashboard/config" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const location  = useLocation();
  const navigate  = useNavigate();

  const [isDesktop, setIsDesktop] = useState(false);
  const [userName, setUserName]   = useState("");
  const [userCargo, setUserCargo] = useState("");
  const [userInitials, setUserInitials] = useState("?");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      supabase
        .from("usuarios")
        .select("nome, cargo")
        .eq("auth_id", data.user.id)
        .single()
        .then(({ data: u }) => {
          if (!u) return;
          setUserName(u.nome);
          setUserCargo(u.cargo);
          const parts = u.nome.trim().split(" ");
          setUserInitials(
            parts.length >= 2
              ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
              : parts[0].slice(0, 2).toUpperCase()
          );
        });
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  const sidebarVisible = isDesktop || isOpen;

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarVisible ? 0 : -280 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed left-0 top-0 h-screen w-[240px] border-r border-[#2D2D2D] flex flex-col z-50"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        {/* ── Logo — clica em qualquer tela → site principal ── */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-[#2D2D2D]">
          <Link to="/" onClick={onClose} className="flex flex-col group">
            <span
              className="text-white tracking-tight group-hover:text-[#C8F135] transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.5rem", fontWeight: 700 }}
            >
              FORGEE
            </span>
            <span
              className="text-[#6B6B6B] tracking-wide"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.625rem", fontWeight: 500 }}
            >
              ADMIN PANEL
            </span>
          </Link>

          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden text-[#6B6B6B] hover:text-white transition-colors p-1"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* ── Navigation ── */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative overflow-hidden
                  ${
                    isActive
                      ? "bg-[#C8F135] text-[#0A0A0A]"
                      : "text-[#D4D4D4] hover:bg-[#1E1E1E] hover:text-white"
                  }
                `}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}
              >
                <Icon size={20} strokeWidth={2.5} />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#C8F135] -z-10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Footer ── */}
        <div className="p-4 border-t border-[#2D2D2D]">
          {/* User info */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8F135] to-[#A8D41A] flex items-center justify-center flex-shrink-0">
              <span
                className="text-[#0A0A0A]"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1rem", fontWeight: 700 }}
              >
                {userInitials}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-white truncate"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}
              >
                {userName || "—"}
              </p>
              <p
                className="text-[#6B6B6B] truncate"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem" }}
              >
                {userCargo || "—"}
              </p>
            </div>
          </div>

          {/* Sair */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-[#D4D4D4] hover:bg-[#1E1E1E] hover:text-[#C8F135] transition-all"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}
          >
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
}