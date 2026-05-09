import { useState, useEffect } from "react";
import { Users, UserMinus, CheckCircle, TrendingUp, AlertCircle, UserPlus } from "lucide-react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { MetricCard } from "../components/dashboard/MetricCard";
import { MembersChart, MembersChartData } from "../components/dashboard/MembersChart";
import { RecentMembers, RecentMember } from "../components/dashboard/RecentMembers";
import { AlertCard, InactiveMember } from "../components/dashboard/AlertCard";
import { supabase } from "../../lib/supabase";

interface DashboardMetrics {
  ativos:       number | null;
  inativos:     number | null;
  checkinsHoje: number | null;
  mediaSemanal: string | null;
  turistas:     number | null;
  novosMes:     number | null;
}

export function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    ativos: null, inativos: null, checkinsHoje: null,
    mediaSemanal: null, turistas: null, novosMes: null,
  });
  const [chartData, setChartData]           = useState<MembersChartData | undefined>();
  const [recentMembers, setRecentMembers]   = useState<RecentMember[]>([]);
  const [inactiveAlunos, setInactiveAlunos] = useState<InactiveMember[]>([]);
  const [totalAlunos, setTotalAlunos]       = useState(0);
  const [loadError, setLoadError]           = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoadError(null);
      const hoje = new Date().toISOString().split("T")[0];
      const inicioSemana = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const inicioMes    = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();

      const [
        { count: ativos },
        { count: inativos },
        { count: cancelados },
        { count: checkinsHoje },
        { count: checkinsSmana },
        { count: novosMes },
        { data: checkinsList },
        { data: alunosList },
        { data: config },
      ] = await Promise.all([
        supabase.from("alunos").select("*", { count: "exact", head: true }).eq("status", "ATIVO"),
        supabase.from("alunos").select("*", { count: "exact", head: true }).in("status", ["INATIVO", "SUSPENSO"]),
        supabase.from("alunos").select("*", { count: "exact", head: true }).eq("status", "INADIMPLENTE"),
        supabase.from("checkins").select("*", { count: "exact", head: true }).gte("entrada", hoje + "T00:00:00").lte("entrada", hoje + "T23:59:59"),
        supabase.from("checkins").select("*", { count: "exact", head: true }).gte("entrada", inicioSemana),
        supabase.from("alunos").select("*", { count: "exact", head: true }).gte("created_at", inicioMes),
        supabase.from("checkins").select("id, entrada, aluno_id, alunos ( nome, planos_alunos ( status, planos ( nome ) ) )").order("entrada", { ascending: false }).limit(5),
        supabase.from("alunos").select("id, nome, planos_alunos ( status, planos ( nome ) ), checkins ( entrada )").eq("status", "ATIVO"),
        supabase.from("configuracoes_academia").select("dias_sem_checkin_risco").limit(1).single(),
      ]);

      const totalAtivos = ativos ?? 0;
      const totalAll    = totalAtivos + (inativos ?? 0) + (cancelados ?? 0);
      setTotalAlunos(totalAll);

      const diasRisco = (config as any)?.dias_sem_checkin_risco ?? 10;

      const mediaSemanal = totalAtivos > 0 && checkinsSmana != null
        ? ((checkinsSmana ?? 0) / Math.max(totalAtivos, 1)).toFixed(1)
        : "0.0";

      setMetrics({
        ativos:       totalAtivos,
        inativos:     inativos ?? 0,
        checkinsHoje: checkinsHoje ?? 0,
        mediaSemanal,
        turistas:     0,
        novosMes:     novosMes ?? 0,
      });

      setChartData({
        ativos:     totalAtivos,
        inativos:   inativos ?? 0,
        cancelados: cancelados ?? 0,
        novos:      novosMes ?? 0,
      });

      // Alunos recentes (últimos check-ins)
      if (checkinsList) {
        const seen = new Set<string>();
        const recent: RecentMember[] = [];
        for (const c of checkinsList) {
          const aluno = (c as any).alunos;
          if (!aluno || seen.has(aluno.nome)) continue;
          seen.add(aluno.nome);
          const planoAtivo = aluno.planos_alunos?.find((p: any) => p.status === "ATIVO") ?? aluno.planos_alunos?.[0];
          const planName   = planoAtivo?.planos?.nome ?? "BASIC";
          const dt         = new Date((c as any).entrada);
          const diffMs     = Date.now() - dt.getTime();
          const diffH      = Math.floor(diffMs / 3600000);
          const diffD      = Math.floor(diffMs / 86400000);
          const time       = diffH < 1 ? "agora mesmo" : diffH < 24 ? `${diffH}h atrás` : `${diffD}d atrás`;
          recent.push({ id: (c as any).id, name: aluno.nome, plan: planName, status: "Ativo", time });
        }
        setRecentMembers(recent);
      }

      // Turistas (inativos N dias — vem de configuracoes_academia)
      if (alunosList) {
        const limite = new Date(Date.now() - diasRisco * 24 * 60 * 60 * 1000);
        const turistas: InactiveMember[] = [];
        for (const a of alunosList as any[]) {
          const checkins   = a.checkins ?? [];
          const ultimo     = checkins.sort((x: any, y: any) => new Date(y.entrada).getTime() - new Date(x.entrada).getTime())[0];
          const ultimoDt   = ultimo ? new Date(ultimo.entrada) : null;
          if (!ultimoDt || ultimoDt < limite) {
            const days = ultimoDt ? Math.floor((Date.now() - ultimoDt.getTime()) / 86400000) : 999;
            const planoAtivo = a.planos_alunos?.find((p: any) => p.status === "ATIVO") ?? a.planos_alunos?.[0];
            const planName   = planoAtivo?.planos?.nome ?? "BASIC";
            turistas.push({ name: a.nome, plan: planName, days });
          }
        }
        turistas.sort((a, b) => b.days - a.days);
        setInactiveAlunos(turistas.slice(0, 10));
        setMetrics((prev) => ({ ...prev, turistas: turistas.length }));
      }
    }
    load().catch((err) => {
      console.error("[Dashboard] Erro ao carregar métricas:", err);
      setLoadError("Não foi possível carregar os dados. Verifique a conexão.");
    });
  }, []);

  const fmt = (v: number | null) => (v === null ? "—" : String(v));

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {loadError && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg border border-red-500/40 bg-red-500/10 text-red-400 text-sm"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {loadError}
        </div>
      )}

      <div className="flex-1 lg:ml-[240px]">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-3 sm:p-4 lg:p-8 overflow-x-hidden space-y-5 sm:space-y-6 lg:space-y-8">

          {/* ── Métricas Principais ── */}
          <section>
            <p className="sm:hidden mb-2 tracking-[0.15em] uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#6B6B6B", fontSize: "0.625rem" }}>
              Métricas Gerais
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
              <MetricCard icon={Users}       label="ATIVOS"     value={fmt(metrics.ativos)}       subtitle="Alunos ativos"       variant="default" index={0} />
              <MetricCard icon={UserMinus}   label="INATIVOS"   value={fmt(metrics.inativos)}     subtitle="Suspensos e inativos" variant="default" index={1} />
              <MetricCard icon={CheckCircle} label="HOJE"       value={fmt(metrics.checkinsHoje)} subtitle="Check-ins hoje"       variant="default" index={2} />
              <MetricCard icon={TrendingUp}  label="FREQUÊNCIA" value={metrics.mediaSemanal ?? "—"} subtitle="Média semanal"     variant="info"    index={3} />
            </div>
          </section>

          {/* ── Destaques ── */}
          <section>
            <p className="sm:hidden mb-2 tracking-[0.15em] uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#6B6B6B", fontSize: "0.625rem" }}>
              Destaques do Mês
            </p>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6">
              <MetricCard icon={AlertCircle} label="TURISTAS" value={fmt(metrics.turistas)} subtitle="Inativos 10+ dias" variant="alert" index={4} />
              <MetricCard icon={UserPlus}    label="NOVOS"    value={fmt(metrics.novosMes)} subtitle="Novos este mês"    variant="info"  index={5} />
            </div>
          </section>

          <div className="sm:hidden h-px" style={{ backgroundColor: "#2D2D2D" }} />

          {/* ── Crescimento ── */}
          <section>
            <p className="sm:hidden mb-2 tracking-[0.15em] uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#6B6B6B", fontSize: "0.625rem" }}>
              Crescimento
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <MembersChart data={chartData} />
              <RecentMembers members={recentMembers} totalAlunos={totalAlunos} />
            </div>
          </section>

          <div className="sm:hidden h-px" style={{ backgroundColor: "#2D2D2D" }} />

          {/* ── Alertas ── */}
          <section>
            <p className="sm:hidden mb-2 tracking-[0.15em] uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#6B6B6B", fontSize: "0.625rem" }}>
              Alertas
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="lg:col-start-3">
                <AlertCard members={inactiveAlunos} />
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
