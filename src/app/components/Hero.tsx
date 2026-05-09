import { motion } from "motion/react";

const VIDEO_URL =
  "https://ynupjjktjahzrjrwvtko.supabase.co/storage/v1/object/public/imagens-workshop-2/Video%20bg2.mp4";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export function Hero() {
  return (
    /* items-start no mobile evita o gap causado pelo items-center em 100vh */
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden">

      {/* ── Video Background ── */}
      {/* overflow:hidden no wrapper garante que o vídeo não vaze */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        {/*
          Técnica bulletproof para video-bg em todos os browsers/iOS:
          top+left 50% + translate(-50%,-50%) + minWidth/minHeight 100%
          garante cobertura total sem depender de objectFit no elemento <video>
        */}
        <video
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            opacity: 0.4,
            filter: "grayscale(1)",
          }}
        />
        {/* left-to-right dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/20" />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        {/* top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-transparent" />
      </div>

      {/* ── Content ──
          pt-24 no mobile = 96px (header 80px + 16px respiro)
          No desktop o items-center já cuida do alinhamento vertical
      */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 relative z-10 w-full pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">

          {/* ── Eyebrow + accent line ── */}
          <motion.div {...fadeUp(0.05)} className="flex items-start gap-4 mb-7">
            <div
              className="flex-shrink-0 w-[3px] self-stretch rounded-full"
              style={{
                background: "linear-gradient(to bottom, #C8F135 0%, #C8F135 60%, transparent 100%)",
                minHeight: "100%",
              }}
            />
            <p
              className="text-[#C8F135] tracking-[0.15em] uppercase text-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </p>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            SEM MÁGICA
            <br />
            SEM ATALHOS
            <br />
            <span style={{ color: "#C8F135" }}>SEM DESCULPAS</span>
          </motion.h1>

          {/* ── Subheadline ── */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-white mb-3"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Treinos progressivos e acompanhamento real!
          </motion.p>

          {/* ── Body copy ── */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-[#B0B0B0] mb-12 max-w-xl"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 1.5vw, 18px)",
              lineHeight: 1.6,
            }}
          >
            Um espaço desenhado para quem treina com intenção. Sem distrações.
            Sem promessas vazias. Só você, o equipamento e o trabalho.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#planos"
              className="inline-flex justify-center items-center bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_32px_rgba(200,241,53,0.4)] tracking-wider whitespace-nowrap"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem" }}
            >
              COMEÇAR AGORA
            </a>
            <a
              href="#espaco"
              className="inline-flex justify-center items-center bg-transparent border border-[#2D2D2D] hover:border-[#C8F135] hover:bg-[#111111] text-white px-8 py-4 rounded-full font-medium transition-all tracking-wider whitespace-nowrap"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem" }}
            >
              CONHECER O ESPAÇO
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
}