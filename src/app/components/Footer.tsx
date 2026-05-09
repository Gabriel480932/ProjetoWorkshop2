const links1 = [
  { label: "Espaço", href: "#espaco" },
  { label: "Programas", href: "#programas" },
  { label: "Equipe", href: "#equipe" },
  { label: "Planos", href: "#planos" },
];

const links2 = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2D2D2D] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div
              className="text-white mb-2 tracking-tight"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2rem", fontWeight: 700 }}
            >
              FORGEE
            </div>
            <p
              className="text-[#6B6B6B] uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px", fontWeight: 600 }}
            >
              BEYOND LIMITS KNOWN™
            </p>
            <p
              className="text-[#6B6B6B] max-w-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", lineHeight: 1.65 }}
            >
              Um espaço desenhado para quem treina com intenção. Sem distrações.
              Sem promessas vazias.
            </p>
          </div>

          {/* Academia */}
          <div>
            <p
              className="text-[#B0B0B0] uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Academia
            </p>
            <ul className="space-y-3">
              {links1.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#6B6B6B] hover:text-white transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="text-[#B0B0B0] uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 600 }}
            >
              Legal & Redes
            </p>
            <ul className="space-y-3">
              {links2.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#6B6B6B] hover:text-white transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://instagram.com/forgee.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6B6B] hover:text-[#C8F135] transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}
                >
                  @forgee.academy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2D2D2D] pt-8">
          <p
            className="text-[#3A3A3A] text-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", letterSpacing: "0.05em" }}
          >
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · DESIGN
            SYSTEM © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
