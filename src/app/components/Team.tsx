import { motion } from "motion/react";

const coaches = [
  {
    initials: "RF",
    name: "Rodrigo Farias",
    role: "Head Coach",
    cref: "CREF 045821-G/SP",
    color: "#C8F135",
    bg: "#1A2800",
  },
  {
    initials: "AL",
    name: "Ana Luísa",
    role: "Conditioning",
    cref: "CREF 078342-G/SP",
    color: "#FF6B1A",
    bg: "#2A1200",
  },
  {
    initials: "BT",
    name: "Bruno T.",
    role: "Mobility & Rehab",
    cref: "CREF 091205-G/SP",
    color: "#00E5FF",
    bg: "#001A20",
  },
  {
    initials: "CD",
    name: "Camila D.",
    role: "Personal Trainer",
    cref: "CREF 063417-G/SP",
    color: "#C8F135",
    bg: "#1A2800",
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-12 md:py-20 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="uppercase text-[#C8F135] mb-4 block tracking-[0.15em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            Quem te acompanha
          </span>
          <h2
            className="text-white uppercase mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            COACHES QUE
            <br />
            <span style={{ color: "#C8F135" }}>TREINAM.</span>
          </h2>
          <p
            className="text-[#B0B0B0] mt-4 mb-10 max-w-xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: 1.6 }}
          >
            Todos graduados em Educação Física. Todos registrados no CREF SP.
            Todos treinando.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#111111] border border-[#2D2D2D] hover:border-opacity-80 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-default"
              style={{
                "--hover-border": c.color,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = c.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2D2D2D";
              }}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: c.bg, border: `2px solid ${c.color}20` }}
              >
                <span
                  className="font-bold"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "20px",
                    color: c.color,
                    fontWeight: 700,
                  }}
                >
                  {c.initials}
                </span>
              </div>

              <h3
                className="text-white mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px", fontWeight: 600 }}
              >
                {c.name}
              </h3>
              <p
                className="mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: c.color, fontWeight: 500 }}
              >
                {c.role}
              </p>
              <p
                className="text-[#6B6B6B]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", letterSpacing: "0.05em" }}
              >
                {c.cref}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}