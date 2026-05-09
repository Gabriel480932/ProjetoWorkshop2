import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
    name: "Rafael M.",
    role: "Engenheiro · Aluno há 3 anos",
  },
  {
    quote:
      "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
    name: "Juliana T.",
    role: "Professora · Aluna há 2 anos",
  },
  {
    quote:
      "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
    name: "Lucas O.",
    role: "Empresário · Aluno há 4 anos",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span
            className="uppercase text-[#C8F135] mb-4 block tracking-[0.15em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            O que dizem
          </span>
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            QUEM <span style={{ color: "#C8F135" }}>TREINA</span>, FALA.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#1E1E1E] p-8 rounded-2xl border border-[#2D2D2D] hover:border-[#C8F135]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="#C8F135" color="#C8F135" />
                  ))}
                </div>
                <p
                  className="text-white mb-8"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "17px",
                    lineHeight: 1.65,
                  }}
                >
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-[#2D2D2D] pt-5">
                <p
                  className="text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px", fontWeight: 600 }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[#B0B0B0]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px" }}
                >
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}