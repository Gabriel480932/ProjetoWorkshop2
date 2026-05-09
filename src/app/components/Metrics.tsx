import { motion } from "motion/react";

const metrics = [
  { pre: "+", value: "1.2K", post: "", label: "Alunos ativos" },
  { pre: "", value: "94", post: "%", label: "Retenção em 6 meses" },
  { pre: "", value: "8", post: "Y", label: "Em operação" },
  { pre: "", value: "1.8K", post: "", label: "Área dedicada (M²)" },
];

export function Metrics() {
  return (
    <section className="py-6 md:py-10 bg-[#111111] border-y border-[#2D2D2D]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="text-white mb-2"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(42px, 5vw, 60px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {m.pre && <span style={{ color: "#FF6B1A" }}>{m.pre}</span>}
                {m.value}
                {m.post && <span style={{ color: "#FF6B1A" }}>{m.post}</span>}
              </div>
              <div
                className="text-[#B0B0B0] uppercase tracking-wider"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 500 }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}