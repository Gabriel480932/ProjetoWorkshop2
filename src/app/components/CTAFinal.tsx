import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  return (
    <section className="relative py-16 md:py-24 bg-[#C8F135] overflow-hidden">
      {/* Decorative big text background */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(100px, 18vw, 260px)",
            color: "rgba(0,0,0,0.06)",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          FORGEE
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-20 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#0A0A0A] uppercase mb-6"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          A DECISÃO
          <br />
          JÁ FOI TOMADA.
          <br />
          AGORA É A AÇÃO.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#0A0A0A]/60 mb-12 tracking-[0.18em] uppercase"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(11px, 1.2vw, 13px)", fontWeight: 500 }}
        >
          A G E N D E &nbsp; U M A &nbsp; V I S I T A &nbsp; · &nbsp;
          G R A T U I T A &nbsp; · &nbsp;
          S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp;
          T R A G A &nbsp; T Ê N I S .
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-10 py-5 rounded-full font-bold transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] tracking-wider"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
        >
          AGENDAR VISITA GRATUITA
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}