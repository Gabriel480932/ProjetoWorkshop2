import { motion } from "motion/react";
import { Check } from "lucide-react";

const IMG_CARDIO =
  "https://images.unsplash.com/photo-1770513649465-2c60c8039806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjByb3dpbmclMjBtYWNoaW5lJTIwZGFyayUyMGd5bXxlbnwxfHx8fDE3Nzc0ODk5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_FORCA =
  "https://images.unsplash.com/photo-1772450014622-1c209d012c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZWxsJTIwd2VpZ2h0bGlmdGluZyUyMHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc3NDg5OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_MAQUINAS =
  "https://images.unsplash.com/photo-1776361984975-84bbbb539f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBtYWNoaW5lcyUyMGVxdWlwbWVudCUyMHByZW1pdW0lMjBmaXRuZXNzfGVufDF8fHx8MTc3NzQ4OTk5MXww&ixlib=rb-4.1.0&q=80&w=1080";

const categories = [
  {
    num: "01",
    title: "CARDIO & CONDITIONING",
    img: IMG_CARDIO,
    items: [
      "Assault Bike Concept2 — 8 UNIDADES",
      "Remo Concept2 Model D — 6 UNIDADES",
      "SkiErg Concept2 — 4 UNIDADES",
      "Esteiras NordicTrack c/ inclinação negativa",
      "Cordas de batalha 15m e 20m",
    ],
  },
  {
    num: "02",
    title: "FORÇA LIVRE",
    img: IMG_FORCA,
    items: [
      "Plataformas LPO padrão olímpico",
      "Racks reforçados para levantamentos",
      "Anilhas calibradas e halteres até 60kg",
      "Espaço otimizado para levantamentos pesados",
    ],
  },
  {
    num: "03",
    title: "MÁQUINAS ARTICULADAS",
    img: IMG_MAQUINAS,
    items: [
      "Máquinas convergentes e divergentes premium",
      "Foco em biomecânica isolada",
      "Hipertrofia com segurança máxima",
      "Seleção criteriosa de equipamentos",
    ],
  },
];

export function Equipment() {
  return (
    <section className="py-12 md:py-20 bg-[#111111] border-t border-[#2D2D2D] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="mb-10 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[#C8F135] mb-6 block tracking-[0.15em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            Estrutura
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            EQUIPAMENTO
            <br />
            QUE NÃO TE
            <br />
            <span style={{ color: "#C8F135" }}>LIMITA.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D4D4D4]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "18px", lineHeight: 1.6 }}
          >
            Cada peça selecionada com um critério: aguentar seu melhor dia todos
            os dias.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#2D2D2D] hover:border-[#C8F135] transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/40 to-transparent" />
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 bg-[#C8F135] transition-all duration-300 rounded-bl-xl" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-10 relative z-10">
                <span
                  className="text-[#6B6B6B] tracking-widest mb-2 block"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
                >
                  {c.num}
                </span>
                <h3
                  className="text-white uppercase mb-5 group-hover:text-[#C8F135] transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {c.title}
                </h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[#D4D4D4]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", lineHeight: 1.5 }}
                    >
                      <Check size={14} color="#C8F135" className="shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}