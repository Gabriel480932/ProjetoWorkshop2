import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Espaço", href: "#espaco" },
    { label: "Programas", href: "#programas" },
    { label: "Equipe", href: "#equipe" },
    { label: "Planos", href: "#planos" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2D2D2D] shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white tracking-tight shrink-0"
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.5rem", fontWeight: 700 }}
        >
          FORGEE
        </Link>

        {/* Desktop Nav */}
        {isHomePage && (
          <nav className="hidden md:flex gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#D4D4D4] hover:text-[#C8F135] transition-colors text-sm tracking-wide font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-white hover:text-[#D4D4D4] font-medium transition-colors text-sm tracking-wide"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            SOU MEMBRO
          </Link>
          {isHomePage && (
            <a
              href="#planos"
              className="bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-6 py-3 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_24px_rgba(200,241,53,0.35)] tracking-wider"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              AGENDAR VISITA
            </a>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#2D2D2D] overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {isHomePage &&
                links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#D4D4D4] hover:text-[#C8F135] text-base transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {l.label}
                  </a>
                ))}
              {isHomePage && <hr className="border-[#2D2D2D]" />}
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-white text-base font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                SOU MEMBRO
              </Link>
              {isHomePage && (
                <a
                  href="#planos"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[#C8F135] text-[#0A0A0A] px-6 py-3 rounded-full text-sm font-bold text-center tracking-wider"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AGENDAR VISITA
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
