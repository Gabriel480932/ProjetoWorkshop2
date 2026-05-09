import { useState, useMemo, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UserCheck, CalendarDays, Users, Clock,
  Search, Download, Calendar, X,
} from "lucide-react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { MetricCard } from "../components/dashboard/MetricCard";
import { STATUS_CONFIG, StudentStatus } from "../components/dashboard/StudentCard";
import { useNavigate } from "react-router";
import { supabase } from "../../lib/supabase";

// ── Types ─────────────────────────────────────────────────────────────────
type Period = "hoje" | "semana" | "mes";

interface CheckIn {
  id: string;
  studentId: string;
  name: string;
  avatar: string;
  status: StudentStatus;
  plan: "BASIC" | "PREMIUM" | "ELITE";
  date: string;   // YYYY-MM-DD
  time: string;   // HH:MM
}

// ── Helpers ───────────────────────────────────────────────────────────────
const TODAY_DT = new Date();
const TODAY    = TODAY_DT.toISOString().split("T")[0];

function isToday(d: string)  { return d === TODAY; }
function isThisWeek(d: string) {
  const dt   = new Date(d);
  const diff = (TODAY_DT.getTime() - dt.getTime()) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff < 7;
}
function isThisMonth(d: string) {
  return d.startsWith(TODAY.slice(0, 7));
}

function calcPeakHour(list: CheckIn[]) {
  const counts: Record<number, number> = {};
  list.forEach((c) => {
    const h = parseInt(c.time.split(":")[0], 10);
    counts[h] = (counts[h] || 0) + 1;
  });
  const maxH = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  if (!maxH) return "—";
  const h = parseInt(maxH[0], 10);
  return `${String(h).padStart(2, "0")}:00–${String(h + 1).padStart(2, "0")}:00`;
}

function fmtDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

// ── Check-in row ──────────────────────────────────────────────────────────
const PLAN_COLOR = { BASIC: "#6B6B6B", PREMIUM: "#B0B0B0", ELITE: "#C8F135" };

interface CheckInRowProps {
  checkin: CheckIn;
  index: number;
  onClick: () => void;
}

const CheckInRow = forwardRef<HTMLDivElement, CheckInRowProps>(
  ({ checkin, index, onClick }, ref) => {
    const { label: statusLabel, color, bg } = STATUS_CONFIG[checkin.status];

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.22, delay: Math.min(index * 0.03, 0.3) }}
        whileHover={{ backgroundColor: "#252525" }}
        onClick={onClick}
        className="flex items-center gap-3 sm:gap-4 px-4 py-3 rounded-xl border border-[#2D2D2D] cursor-pointer transition-colors"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        {/* Avatar */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 border border-[#2D2D2D]">
          <img
            src={checkin.avatar}
            alt={checkin.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p
            className="truncate"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#FFFFFF",
            }}
          >
            {checkin.name}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span
              className="text-xs px-1.5 py-0.5 rounded"
              style={{
                color,
                backgroundColor: bg,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.6rem",
              }}
            >
              {statusLabel}
            </span>
            <span style={{ color: "#3D3D3D", fontSize: "0.75rem" }}>•</span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                color: PLAN_COLOR[checkin.plan],
                letterSpacing: "0.08em",
              }}
            >
              {checkin.plan}
            </span>
          </div>
        </div>

        {/* Date + time */}
        <div className="flex-shrink-0 text-right space-y-0.5">
          <div className="flex items-center justify-end gap-1.5">
            <Calendar size={11} style={{ color: "#6B6B6B" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#B0B0B0",
              }}
            >
              {fmtDate(checkin.date)}
            </span>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <Clock size={11} style={{ color: "#6B6B6B" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#6B6B6B",
              }}
            >
              {checkin.time}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }
);
CheckInRow.displayName = "CheckInRow";

// ── Page ──────────────────────────────────────────────────────────────────
export function CheckInsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState<Period>("hoje");
  const [search, setSearch] = useState("");
  const [allCheckins, setAllCheckins] = useState<CheckIn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data } = await supabase
        .from("checkins")
        .select(`
          id, entrada, tipo,
          alunos ( id, nome, foto_url, matricula,
            planos_alunos ( status, planos ( nome ) )
          )
        `)
        .order("entrada", { ascending: false })
        .limit(500);

      if (data) {
        const mapped: CheckIn[] = data.map((c: any) => {
          const dt   = new Date(c.entrada);
          const date = dt.toISOString().split("T")[0];
          const time = dt.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
          const aluno = c.alunos;
          const planoAtivo = aluno?.planos_alunos?.find((p: any) => p.status === "ATIVO") ?? aluno?.planos_alunos?.[0];
          const planName   = (planoAtivo?.planos?.nome ?? "BASIC") as CheckIn["plan"];
          return {
            id:        c.id,
            studentId: aluno?.matricula ?? "",
            name:      aluno?.nome ?? "—",
            avatar:    aluno?.foto_url ?? "",
            status:    "em-dia" as StudentStatus,
            plan:      planName,
            date,
            time,
          };
        });
        setAllCheckins(mapped);
      }
      setLoading(false);
    }
    load();
  }, []);

  // Filter by period
  const byPeriod = useMemo(() => {
    const filter = period === "hoje"
      ? isToday
      : period === "semana"
        ? isThisWeek
        : isThisMonth;
    return allCheckins.filter((c) => filter(c.date));
  }, [period, allCheckins]);

  // Filter by search
  const visible = useMemo(() => {
    if (!search.trim()) return byPeriod;
    const q = search.toLowerCase();
    return byPeriod.filter((c) => c.name.toLowerCase().includes(q));
  }, [byPeriod, search]);

  // KPIs
  const todayCount  = useMemo(() => allCheckins.filter((c) => isToday(c.date)).length, [allCheckins]);
  const weekCount   = useMemo(() => allCheckins.filter((c) => isThisWeek(c.date)).length, [allCheckins]);
  const monthCount  = useMemo(() => allCheckins.filter((c) => isThisMonth(c.date)).length, [allCheckins]);
  const peakHour    = useMemo(() => calcPeakHour(byPeriod), [byPeriod]);

  const handleDownload = () => {
    const rows = [
      ["Nome", "Plano", "Status", "Data", "Horário"],
      ...visible.map((c) => [c.name, c.plan, STATUS_CONFIG[c.status].label, fmtDate(c.date), c.time]),
    ];
    const csv = rows.map((r) => r.join(";")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `checkins-${period}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const PERIOD_LABELS: { key: Period; label: string }[] = [
    { key: "hoje",   label: "Hoje" },
    { key: "semana", label: "Semana" },
    { key: "mes",    label: "Mês" },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
          title="CHECK-INS"
          subtitle="HISTÓRICO E CONTROLE DE FREQUÊNCIA"
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">

          {/* ── KPI Cards ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <MetricCard
              icon={UserCheck}
              label="HOJE"
              value={todayCount}
              subtitle="Check-ins hoje"
              variant="alert"
              index={0}
            />
            <MetricCard
              icon={CalendarDays}
              label="SEMANA"
              value={weekCount}
              subtitle="Esta semana"
              variant="default"
              index={1}
            />
            <MetricCard
              icon={Users}
              label="MÊS"
              value={monthCount}
              subtitle="Este mês"
              variant="info"
              index={2}
            />
            <MetricCard
              icon={Clock}
              label="PICO"
              value={peakHour}
              subtitle="Horário de pico"
              variant="warning"
              index={3}
            />
          </div>

          {/* ── History panel ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl border border-[#2D2D2D] overflow-hidden"
            style={{ backgroundColor: "#181818" }}
          >
            {/* Panel header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 border-b border-[#2D2D2D]">
              <h2
                className="flex-1"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.06em",
                }}
              >
                HISTÓRICO DE CHECK-INS
              </h2>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Download button */}
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all hover:shadow-[0_0_16px_rgba(224,32,32,0.3)]"
                  style={{
                    backgroundColor: "#E02020",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "#FFFFFF",
                  }}
                >
                  <Download size={13} />
                  <span className="hidden sm:inline">Baixar Relatório</span>
                  <span className="sm:hidden">Baixar</span>
                </button>

                {/* Period tabs */}
                <div
                  className="flex rounded-lg overflow-hidden border border-[#2D2D2D]"
                  style={{ backgroundColor: "#111111" }}
                >
                  {PERIOD_LABELS.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setPeriod(key)}
                      className="px-3.5 py-2 transition-all"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        backgroundColor: period === key ? "#C8F135" : "transparent",
                        color: period === key ? "#0A0A0A" : "#6B6B6B",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="px-5 py-3 border-b border-[#2D2D2D]">
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "#6B6B6B" }}
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nome do aluno..."
                  className="w-full rounded-lg pl-9 pr-9 py-2.5 outline-none transition-all"
                  style={{
                    backgroundColor: "#111111",
                    border: "1px solid #2D2D2D",
                    color: "#FFFFFF",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8125rem",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#C8F135")}
                  onBlur={(e)  => (e.target.style.borderColor = "#2D2D2D")}
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-white transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* List */}
            <div className="p-4 sm:p-5 space-y-2">
              {/* Count bar */}
              <div className="flex items-center justify-between mb-1 px-1">
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#6B6B6B",
                  }}
                >
                  {visible.length} registro{visible.length !== 1 ? "s" : ""}
                  {search && ` para "${search}"`}
                </span>
              </div>

              <AnimatePresence mode="popLayout">
                {loading ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}>
                      Carregando check-ins…
                    </p>
                  </motion.div>
                ) : visible.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center"
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: "#6B6B6B",
                        fontSize: "0.875rem",
                      }}
                    >
                      Nenhum check-in registrado para este período.
                    </p>
                  </motion.div>
                ) : (
                  visible.map((c, i) => (
                    <CheckInRow
                      key={c.id}
                      checkin={c}
                      index={i}
                      onClick={() => navigate("/dashboard/alunos")}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}