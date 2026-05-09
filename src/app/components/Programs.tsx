import { motion } from "motion/react";
import { Users, Clock, Activity, User } from "lucide-react";

const programs = [
  {
    id: "01",
    title: "FORGEE",
    accent: "STRENGTH",
    color: "#00E5FF",
    badge: null,
    desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
    details: [
      { icon: <Users size={16} />, text: "Iniciantes a avançados em hipertrofia e força" },
      { icon: <Clock size={16} />, text: "Frequência: 3–5× por semana" },
    ],
  },
  {
    id: "02",
    title: "FORGEE",
    accent: "CONDITIONING",
    color: "#00E5FF",
    badge: "DESTAQUE",
    desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
    details: [
      { icon: <Activity size={16} />, text: "Condicionamento e perda de gordura" },
      { icon: <Clock size={16} />, text: "Turmas: 06H · 07H · 12H · 18H · 19H30" },
    ],
  },
  {
    id: "03",
    title: "FORGEE",
    accent: "MOBILITY",
    color: "#00E5FF",
    badge: null,
    desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
    details: [],
  },
  {
    id: "04",
    title: "PERSONAL",
    accent: "TRAINING",
    color: "#00E5FF",
    badge: null,
    desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
    details: [
      { icon: <User size={16} />, text: "Individual ou em dupla" },
      { icon: <Clock size={16} />, text: "Revisão a cada 4 semanas" },
    ],
  },
];

export function Programs() {
  return (
    <section id="programas" className="py-12 md:py-20 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center max-w-3xl mx-auto"
        >
          <span
            className="uppercase text-[#00E5FF] mb-6 block tracking-[0.15em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            O que oferecemos
          </span>
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            UM PROTOCOLO
            <br />
            PARA CADA
            <br />
            <span style={{ color: "#00E5FF" }}>OBJETIVO.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative bg-[#111111] p-8 rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${
                p.badge
                  ? "border-[#00E5FF] hover:border-[#00E5FF]"
                  : "border-[#2D2D2D] hover:border-[#00E5FF]/40"
              }`}
            >
              {p.badge && (
                <div
                  className="absolute top-0 right-0 text-[#0A0A0A] text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-2xl"
                  style={{ backgroundColor: "#00E5FF", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.1em" }}
                >
                  {p.badge}
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <h3
                  className="text-white uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(22px, 2.5vw, 28px)", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {p.title} <span style={{ color: p.color }}>{p.accent}</span>
                </h3>
                <span
                  className="bg-[#2D2D2D] text-[#D4D4D4] rounded-full shrink-0 mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600, padding: "2px 10px" }}
                >
                  {p.id}
                </span>
              </div>

              <p
                className="text-[#B0B0B0] mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: 1.65 }}
              >
                {p.desc}
              </p>

              {p.details.length > 0 && (
                <div className="space-y-3 border-t border-[#2D2D2D] pt-6">
                  {p.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-3 text-[#D4D4D4]">
                      <span style={{ color: "#6B6B6B" }}>{d.icon}</span>
                      <span
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                      >
                        {d.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}