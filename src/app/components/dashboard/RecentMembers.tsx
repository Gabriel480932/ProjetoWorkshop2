import { motion } from "motion/react";
import { Users } from "lucide-react";

export interface RecentMember {
  id: string;
  name: string;
  plan: string;
  status: string;
  time: string;
}

interface Props {
  members?: RecentMember[];
  totalAlunos?: number;
}

const planColors: Record<string, { bg: string; color: string }> = {
  PREMIUM: { bg: "rgba(200, 241, 53, 0.2)", color: "#C8F135" },
  ELITE:   { bg: "rgba(255, 107, 26, 0.2)", color: "#FF6B1A" },
  BASIC:   { bg: "rgba(107, 107, 107, 0.2)", color: "#6B6B6B" },
};

export function RecentMembers({ members = [], totalAlunos = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="rounded-xl border p-4 lg:p-6"
      style={{ backgroundColor: "rgba(200, 241, 53, 0.05)", borderColor: "rgba(200, 241, 53, 0.2)" }}
    >
      <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(200, 241, 53, 0.15)" }}>
          <Users size={20} className="sm:hidden" style={{ color: "#C8F135" }} strokeWidth={2.5} />
          <Users size={22} className="hidden sm:block" style={{ color: "#C8F135" }} strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <h3 className="mb-1 text-base sm:text-lg lg:text-xl" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#FFFFFF" }}>
            ALUNOS RECENTES
          </h3>
          <p className="text-xs sm:text-sm truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#B0B0B0" }}>
            Últimos check-ins registrados
          </p>
        </div>
      </div>

      <div className="space-y-2.5 sm:space-y-3 mb-4">
        {members.length === 0 ? (
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}>
            Nenhum check-in registrado ainda.
          </p>
        ) : (
          members.map((member, index) => {
            const badge = planColors[member.plan] ?? planColors.BASIC;
            return (
              <motion.div key={member.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }} className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs sm:text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>{member.name}</p>
                  <p className="truncate text-[0.625rem] sm:text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B" }}>
                    {member.status} · {member.time}
                  </p>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[0.625rem] flex-shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, backgroundColor: badge.bg, color: badge.color }}>
                  {member.plan}
                </span>
              </motion.div>
            );
          })
        )}
      </div>

      <button
        className="w-full py-2 sm:py-2.5 rounded-lg text-center transition-all text-xs sm:text-sm"
        style={{ backgroundColor: "rgba(200, 241, 53, 0.1)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#C8F135" }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(200, 241, 53, 0.18)")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(200, 241, 53, 0.1)")}
      >
        {totalAlunos > 0 ? (
          <>
            <span className="hidden sm:inline">Ver todos os {totalAlunos} alunos →</span>
            <span className="sm:hidden">Ver {totalAlunos} alunos →</span>
          </>
        ) : (
          <span>Ver todos os alunos →</span>
        )}
      </button>
    </motion.div>
  );
}
