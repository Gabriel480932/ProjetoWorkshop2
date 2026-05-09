import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

export interface InactiveMember {
  name: string;
  plan: string;
  days: number;
}

interface Props {
  members?: InactiveMember[];
}

export function AlertCard({ members = [] }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="rounded-xl border p-4 lg:p-6"
      style={{ backgroundColor: "rgba(224, 32, 32, 0.08)", borderColor: "rgba(224, 32, 32, 0.3)" }}
    >
      <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(224, 32, 32, 0.2)" }}>
          <AlertCircle size={20} className="sm:hidden" style={{ color: "#E02020" }} strokeWidth={2.5} />
          <AlertCircle size={22} className="hidden sm:block" style={{ color: "#E02020" }} strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <h3 className="mb-1 text-base sm:text-lg lg:text-xl" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#FFFFFF" }}>
            TURISTAS
          </h3>
          <p className="text-xs sm:text-sm truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#B0B0B0" }}>
            Sem check-in há 10+ dias
          </p>
        </div>
      </div>

      <div className="space-y-2.5 sm:space-y-3 mb-4">
        {members.length === 0 ? (
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}>
            Nenhum aluno inativo no momento.
          </p>
        ) : (
          members.map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }} className="flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs sm:text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#FFFFFF" }}>{member.name}</p>
                <p className="truncate text-[0.625rem] sm:text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B" }}>
                  Último: {member.days}d
                </p>
              </div>
              <span
                className="px-1.5 py-0.5 rounded text-[0.625rem] flex-shrink-0"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  backgroundColor: member.plan === "PREMIUM" ? "rgba(200, 241, 53, 0.2)" : member.plan === "ELITE" ? "rgba(255, 107, 26, 0.2)" : "rgba(107, 107, 107, 0.2)",
                  color: member.plan === "PREMIUM" ? "#C8F135" : member.plan === "ELITE" ? "#FF6B1A" : "#6B6B6B",
                }}
              >
                {member.plan}
              </span>
            </motion.div>
          ))
        )}
      </div>

      <button
        className="w-full py-2 sm:py-2.5 rounded-lg text-center transition-all hover:bg-[#E02020] text-xs sm:text-sm"
        style={{ backgroundColor: "rgba(224, 32, 32, 0.15)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#E02020" }}
      >
        {members.length > 0 ? (
          <>
            <span className="hidden sm:inline">Ver todos os {members.length} turistas →</span>
            <span className="sm:hidden">Ver {members.length} turistas →</span>
          </>
        ) : (
          <span>Ver turistas →</span>
        )}
      </button>
    </motion.div>
  );
}
