import { motion } from "motion/react";

const stats = [
  { label: "Horário", value: "05H–23H", accent: false },
  { label: "Dias", value: "7 DIAS", accent: false },
  { label: "Área", value: "1.800M²", accent: false },
  { label: "Comunidade", value: "+1.200", sub: "ALUNOS DESDE 2018", accent: true },
];

export function StatsBar() {
  return (
    <section className="border-y border-[#2D2D2D] bg-[#0A0A0A] relative z-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span
                className="uppercase text-[#B0B0B0] mb-2 tracking-[0.1em]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
              >
                {s.label}
              </span>
              <span
                className="text-white"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.accent ? (
                  <>
                    <span style={{ color: "#C8F135" }}>+</span>1.200
                  </>
                ) : (
                  s.value
                )}
              </span>
              {s.sub && (
                <span
                  className="text-[#6B6B6B] mt-1 uppercase tracking-widest"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px" }}
                >
                  {s.sub}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
