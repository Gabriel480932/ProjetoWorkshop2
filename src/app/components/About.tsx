import { motion } from "motion/react";
import { Zap, Target, SlidersHorizontal } from "lucide-react";

const pillars = [
  {
    icon: <Zap size={22} color="#FF6B1A" />,
    title: "Intensidade",
    desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.",
  },
  {
    icon: <Target size={22} color="#FF6B1A" />,
    title: "Precisão",
    desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.",
  },
  {
    icon: <SlidersHorizontal size={22} color="#FF6B1A" />,
    title: "Controle",
    desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.",
  },
];

export function About() {
  return (
    <section id="espaco" className="py-12 md:py-20 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="uppercase text-[#FF6B1A] mb-6 block tracking-[0.15em]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Quem somos
            </span>
            <h2
              className="text-white uppercase mb-10"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              FORJADOS
              <br />
              PELA
              <br />
              <span style={{ color: "#FF6B1A" }}>DISCIPLINA.</span>
            </h2>

            <div className="space-y-6 mb-8">
              <p
                className="text-[#B0B0B0]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "17px", lineHeight: 1.65 }}
              >
                A FORGEE nasceu de uma certeza simples: ambiente mediano produz
                resultado mediano.
              </p>
              <p
                className="text-[#B0B0B0]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "17px", lineHeight: 1.65 }}
              >
                Cada metro quadrado foi pensado para que o espaço não interfira
                — ele desaparece. O que fica é o treino, a concentração e o
                progresso.
              </p>

              <blockquote className="border-l-2 border-[#FF6B1A] pl-6 py-2 my-8">
                <p
                  className="text-white italic"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  "In silence, the transformation begins."
                </p>
              </blockquote>

              <p
                className="text-[#B0B0B0]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "17px", lineHeight: 1.65 }}
              >
                Aqui não tem música forçada, espelho em excesso ou coach em
                cima. Tem equipamento que não decepciona no seu melhor dia,
                profissionais que aparecem quando você precisa e silêncio o
                suficiente para se ouvir.
              </p>
            </div>
          </motion.div>

          {/* Right - Pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group bg-[#111111] border border-[#2D2D2D] hover:border-[#FF6B1A] rounded-2xl p-8 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#2D2D2D] transition-colors">
                  {p.icon}
                </div>
                <h3
                  className="text-white uppercase mb-3 tracking-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 600 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#B0B0B0]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: 1.65 }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}