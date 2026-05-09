import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, ExternalLink } from "lucide-react";

const hours = [
  { day: "Segunda a Sexta", time: "05H00 – 23H00" },
  { day: "Sábado", time: "07H00 – 20H00" },
  { day: "Domingo e Feriados", time: "08H00 – 14H00" },
];

const contacts = [
  { icon: <Phone size={16} />, label: "WhatsApp", value: "(19) 98234-5678", href: "https://wa.me/5519982345678" },
  { icon: <Mail size={16} />, label: "E-mail", value: "contato@forgee.academy", href: "mailto:contato@forgee.academy" },
  { icon: <Instagram size={16} />, label: "Instagram", value: "@forgee.academy", href: "https://instagram.com/forgee.academy" },
];

export function Location() {
  return (
    <section className="py-12 md:py-20 bg-[#111111] border-t border-[#2D2D2D]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="uppercase text-[#C8F135] mb-6 block tracking-[0.15em]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Onde estamos
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
              NO CORAÇÃO
              <br />
              DE{" "}
              <span style={{ color: "#C8F135" }}>INDAIATUBA.</span>
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={14} color="#C8F135" />
              </div>
              <div>
                <p
                  className="text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", fontWeight: 500, lineHeight: 1.6 }}
                >
                  Rua das Esmeraldas, 742
                  <br />
                  Jardim Morada do Sol — Indaiatuba, SP
                  <br />
                  CEP 13.334-210
                </p>
                <p
                  className="text-[#6B6B6B] mt-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px" }}
                >
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#1E1E1E] border border-[#2D2D2D] rounded-2xl p-6 mb-8">
              <p
                className="text-[#B0B0B0] uppercase tracking-[0.1em] mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
              >
                Horários
              </p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span
                      className="text-[#B0B0B0]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-white font-medium"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div className="space-y-4 mb-10">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center shrink-0 group-hover:bg-[#2D2D2D] transition-colors">
                    <span style={{ color: "#C8F135" }}>{c.icon}</span>
                  </div>
                  <div>
                    <span
                      className="text-[#6B6B6B]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", display: "block" }}
                    >
                      {c.label}
                    </span>
                    <span
                      className="text-[#D4D4D4] group-hover:text-white transition-colors"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                    >
                      {c.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5519982345678"
                className="inline-flex items-center justify-center gap-2 bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-6 py-3 rounded-full font-bold transition-all text-sm tracking-wider hover:shadow-[0_0_24px_rgba(200,241,53,0.35)]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <Phone size={14} /> FALAR NO WHATSAPP
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#2D2D2D] hover:border-[#D4D4D4] text-white px-6 py-3 rounded-full font-medium transition-all text-sm tracking-wider"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <ExternalLink size={14} /> COMO CHEGAR
              </a>
            </div>
          </motion.div>

          {/* Right - Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#2D2D2D] aspect-square md:aspect-auto md:h-[480px]">
              {/* Map embed placeholder */}
              <iframe
                title="FORGEE location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29342.6!2d-47.2198!3d-23.0834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5b69a1b2c12d%3A0x1abc123def456!2sIndaiatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
              {/* Map overlay pin */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#2D2D2D] rounded-2xl px-5 py-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-[#C8F135] flex items-center justify-center mx-auto mb-2">
                    <MapPin size={16} color="#0A0A0A" />
                  </div>
                  <p
                    className="text-white font-bold uppercase"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", letterSpacing: "0.05em" }}
                  >
                    FORGEE
                  </p>
                  <p
                    className="text-[#B0B0B0]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px" }}
                  >
                    Indaiatuba, SP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}