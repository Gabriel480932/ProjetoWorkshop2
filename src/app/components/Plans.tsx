import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "LIVRE",
    price: "R$149",
    featured: false,
    items: [
      "Acesso ilimitado 05H–23H",
      "Avaliação física de entrada",
      "Planilha de treino inicial",
      "App FORGEE",
    ],
    checkColor: "#C8F135",
    btnClass: "border border-[#2D2D2D] hover:border-[#D4D4D4] hover:bg-[#252525] text-white",
  },
  {
    name: "PLUS",
    price: "R$229",
    featured: true,
    badge: "MAIS ESCOLHIDO",
    items: [
      "Tudo do Livre +",
      "2 sessões de Personal/mês",
      "1 aula Conditioning/semana",
      "Revisão de planilha a cada 4 semanas",
      "Acesso ao Mobility",
    ],
    checkColor: "#FF6B1A",
    btnClass: "bg-[#FF6B1A] hover:bg-[#E05510] text-[#0A0A0A] hover:shadow-[0_0_24px_rgba(255,107,26,0.35)]",
  },
  {
    name: "ELITE",
    price: "R$389",
    featured: false,
    items: [
      "Tudo do Plus +",
      "4 sessões de Personal/mês",
      "Acesso ilimitado a todas as classes",
      "Bioimpedância mensal",
      "WhatsApp com coach dedicado",
    ],
    checkColor: "#C8F135",
    btnClass: "border border-[#2D2D2D] hover:border-[#D4D4D4] hover:bg-[#252525] text-white",
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-12 md:py-20 bg-[#111111] border-t border-[#2D2D2D]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center max-w-3xl mx-auto"
        >
          <span
            className="uppercase text-[#FF6B1A] mb-6 block tracking-[0.15em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            Investimento
          </span>
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            SEM MATRÍCULA.
            <br />
            SEM FIDELIDADE.
            <br />
            <span style={{ color: "#FF6B1A" }}>SEM ENROLAÇÃO.</span>
          </h2>
          <p
            className="text-[#D4D4D4]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "18px", lineHeight: 1.6 }}
          >
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative bg-[#1E1E1E] rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.featured
                  ? "border-2 border-[#FF6B1A] lg:-translate-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                  : "border border-[#2D2D2D]"
              }`}
            >
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#0A0A0A] text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap"
                  style={{ backgroundColor: "#FF6B1A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {plan.badge}
                </div>
              )}

              <h3
                className="text-white uppercase mb-2"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-[#2D2D2D]">
                <span
                  className="text-white"
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 700 }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-[#B0B0B0]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                >
                  / mês
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={16} color={plan.checkColor} className="shrink-0 mt-0.5" />
                    <span
                      className={j === 0 && plan.featured ? "text-white font-medium" : "text-[#D4D4D4]"}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", lineHeight: 1.5 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-4 rounded-full font-bold transition-all tracking-wider ${plan.btnClass}`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px" }}
              >
                QUERO ESSE PLANO
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p
            className="text-[#6B6B6B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px" }}
          >
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span
              className="text-[#B0B0B0]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
            >
              DIÁRIA: <span className="text-white font-semibold">R$ 39</span> · Acesso por 1 dia
            </span>
            <a
              href="#"
              className="text-[#C8F135] hover:text-[#A8D41A] font-semibold transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
            >
              AGENDAR →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}