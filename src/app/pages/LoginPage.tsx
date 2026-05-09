import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, Shield, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const navigate = useNavigate();

  // Se já tiver sessão ativa, vai direto pro dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/dashboard", { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    setLoading(false);

    if (authError) {
      setError("E-mail ou senha incorretos. Verifique suas credenciais.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C8F135]/5 via-transparent to-transparent opacity-40 pointer-events-none" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <Link
          to="/"
          className="text-white tracking-tight inline-block"
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2rem", fontWeight: 700 }}
        >
          FORGEE
        </Link>
      </motion.div>

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md"
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(200, 241, 53, 0.15) 0%, rgba(200, 241, 53, 0.05) 100%)",
              border: "2px solid rgba(200, 241, 53, 0.3)",
            }}
          >
            <Shield size={40} className="text-[#C8F135]" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-center mb-3 tracking-tight"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          PAINEL ADMIN
        </h1>

        {/* Subtitle */}
        <p
          className="text-center mb-2 text-[#A3A3A3]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.875rem",
          }}
        >
          Acesso restrito ao sistema de gestão
        </p>
        <p
          className="text-center mb-10 md:mb-12"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.875rem",
            color: "#C8F135",
            fontWeight: 600,
          }}
        >
          FORGEE
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2.5 text-[#D4D4D4] tracking-widest text-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              E-MAIL ADMINISTRATIVO
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Mail size={18} className="text-[#525252]" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@forgee.com"
                required
                className="w-full bg-[#171717] border border-[#2D2D2D] rounded-lg px-4 pl-12 py-3.5 text-white placeholder:text-[#525252] focus:outline-none focus:border-[#C8F135] focus:ring-1 focus:ring-[#C8F135] transition-all"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2.5 text-[#D4D4D4] tracking-widest text-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              SENHA
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Lock size={18} className="text-[#525252]" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[#171717] border border-[#2D2D2D] rounded-lg px-4 pl-12 pr-12 py-3.5 text-white placeholder:text-[#525252] focus:outline-none focus:border-[#C8F135] focus:ring-1 focus:ring-[#C8F135] transition-all"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#525252] hover:text-[#C8F135] transition-colors"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-lg border"
              style={{ backgroundColor: "rgba(224,32,32,0.1)", borderColor: "#E02020" }}
            >
              <Shield size={16} style={{ color: "#E02020", flexShrink: 0 }} />
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8125rem", color: "#E02020", fontWeight: 600 }}>
                {error}
              </p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] py-4 rounded-lg font-bold tracking-wider transition-all hover:shadow-[0_0_32px_rgba(200,241,53,0.4)] flex items-center justify-center gap-2.5 group disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9375rem" }}
          >
            {loading
              ? <Loader2 size={18} className="animate-spin" />
              : <Shield size={18} className="group-hover:scale-110 transition-transform" />}
            {loading ? "ENTRANDO..." : "ACESSAR PAINEL"}
          </button>
        </form>

        {/* Footer text */}
        <div className="mt-10 md:mt-12 text-center space-y-4">
          <p
            className="text-[#737373] text-xs tracking-widest"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            ACESSO EXCLUSIVO PARA ADMINISTRADORES
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#A3A3A3] hover:text-[#C8F135] transition-colors text-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Voltar para área do membro
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
