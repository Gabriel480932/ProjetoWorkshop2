import { motion } from "motion/react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Users } from "lucide-react";

type MemberData = {
  id: number;
  name: string;
  value: number;
  color: string;
  bg: string;
};

export interface MembersChartData {
  ativos:     number;
  inativos:   number;
  cancelados: number;
  novos:      number;
}

interface Props {
  data?: MembersChartData;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; payload: MemberData }[];
}

export function MembersChart({ data }: Props) {
  const chartData: MemberData[] = [
    { id: 1, name: "Ativos",     value: data?.ativos     ?? 0, color: "#C8F135", bg: "rgba(200,241,53,0.12)" },
    { id: 2, name: "Inativos",   value: data?.inativos   ?? 0, color: "#6B6B6B", bg: "rgba(107,107,107,0.12)" },
    { id: 3, name: "Cancelados", value: data?.cancelados ?? 0, color: "#E02020", bg: "rgba(224,32,32,0.12)" },
    { id: 4, name: "Novos",      value: data?.novos      ?? 0, color: "#FF6B1A", bg: "rgba(255,107,26,0.12)" },
  ];

  const total = chartData.reduce((sum, d) => sum + d.value, 0);

  function CustomTooltip({ active, payload }: CustomTooltipProps) {
    if (!active || !payload?.length) return null;
    const { name, value, payload: entry } = payload[0];
    const pct = total > 0 ? ((value / total) * 100).toFixed(1) : "0.0";
    return (
      <div
        className="px-3 py-2 rounded-lg border"
        style={{ backgroundColor: "#0A0A0A", borderColor: entry.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <p style={{ color: entry.color, fontWeight: 700, fontSize: 12 }}>{name}</p>
        <p style={{ color: "#FFFFFF", fontSize: 13, fontWeight: 600 }}>
          {value} <span style={{ color: "#6B6B6B", fontWeight: 400 }}>({pct}%)</span>
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="rounded-xl border border-[#2D2D2D] p-4 lg:p-6 lg:col-span-2"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(200, 241, 53, 0.1)" }}>
          <Users size={20} className="sm:hidden" style={{ color: "#C8F135" }} strokeWidth={2.5} />
          <Users size={22} className="hidden sm:block" style={{ color: "#C8F135" }} strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <h3 className="mb-1 text-base sm:text-lg lg:text-xl" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#FFFFFF" }}>
            DISTRIBUIÇÃO DE MEMBROS
          </h3>
          <p className="text-xs sm:text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#B0B0B0" }}>
            {total > 0 ? `${total} membros cadastrados` : "Nenhum membro cadastrado ainda"}
          </p>
        </div>
      </div>

      {total === 0 ? (
        <div className="flex items-center justify-center py-12">
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}>
            Cadastre alunos para visualizar a distribuição.
          </p>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <PieChart width={220} height={220}>
              <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="52%" outerRadius="78%" paddingAngle={3} strokeWidth={0}>
                {chartData.map((entry) => (<Cell key={entry.id} fill={entry.color} />))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </motion.div>

          <div className="flex-1 w-full space-y-2.5">
            {chartData.map((entry, index) => {
              const pct = ((entry.value / total) * 100).toFixed(1);
              return (
                <motion.div key={entry.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
                    <p className="truncate text-xs sm:text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>{entry.name}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-1.5 rounded-full" style={{ width: `${Math.round((entry.value / total) * 80)}px`, backgroundColor: entry.bg, border: `1px solid ${entry.color}40` }}>
                      <div className="h-full rounded-full" style={{ width: "100%", backgroundColor: entry.color, opacity: 0.7 }} />
                    </div>
                    <span className="text-xs w-8 text-right" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: entry.color }}>{pct}%</span>
                    <span className="text-xs w-6 text-right" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B" }}>{entry.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#2D2D2D] flex justify-end">
        <button className="text-[#FF6B1A] hover:text-[#E05510] transition-colors text-xs sm:text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
          <span className="hidden sm:inline">Ver todos os membros →</span>
          <span className="sm:hidden">Ver todos →</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
