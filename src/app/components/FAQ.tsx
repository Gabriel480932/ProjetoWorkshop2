import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Preciso ter experiência?",
    a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.",
  },
  {
    q: "Posso treinar sozinho?",
    a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.",
  },
  {
    q: "Posso visitar antes de assinar?",
    a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-[#2D2D2D] last:border-b-0"
    >
      <button
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-white group-hover:text-[#C8F135] transition-colors"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "17px", fontWeight: 500 }}
        >
          {q}
        </span>
        <span className="shrink-0 text-[#C8F135]">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-[#B0B0B0] pb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: 1.65 }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-12 md:py-20 bg-[#0A0A0A] border-t border-[#2D2D2D]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="uppercase text-[#C8F135] mb-6 block tracking-[0.15em]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Dúvidas
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
              PERGUNTAS
              <br />
              <span style={{ color: "#C8F135" }}>DIRETAS.</span>
            </h2>
            <p
              className="text-[#B0B0B0] mt-8"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: 1.65 }}
            >
              Sem enrolar. Se não encontrar sua resposta aqui, fale diretamente
              com a gente no WhatsApp.
            </p>
            <a
              href="https://wa.me/5519982345678"
              className="inline-flex items-center gap-2 mt-6 bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-6 py-3 rounded-full font-bold transition-all text-sm tracking-wider hover:shadow-[0_0_24px_rgba(200,241,53,0.35)]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              FALAR NO WHATSAPP
            </a>
          </motion.div>

          {/* Right accordions */}
          <div className="divide-y divide-[#2D2D2D]">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}