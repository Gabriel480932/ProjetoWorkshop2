import { motion } from "motion/react";
import { ArrowLeft, MessageCircle, Edit2, CheckCircle } from "lucide-react";
import { Student, STATUS_CONFIG, ALUNO_STATUS_CONFIG } from "./StudentCard";
import { useNavigate } from "react-router";

interface StudentProfileProps {
  student: Student;
  onBack: () => void;
}

const PAYMENT_STATUS = {
  pago:      { label: "Pago",      color: "#C8F135", bg: "rgba(200,241,53,0.12)" },
  atrasado:  { label: "Atrasado",  color: "#E02020", bg: "rgba(224,32,32,0.12)" },
  pendente:  { label: "Pendente",  color: "#FF8340", bg: "rgba(255,131,64,0.12)" },
};

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="p-4 rounded-xl border border-[#2D2D2D]"
      style={{ backgroundColor: "#111111" }}
    >
      <p
        className="mb-1"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 600,
          color: "#6B6B6B",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </p>
      <p
        className="truncate"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "#FFFFFF",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export function StudentProfile({ student, onBack }: StudentProfileProps) {
  const navigate = useNavigate();
  const { label: statusLabel, color: statusColor, bg: statusBg } = STATUS_CONFIG[student.status];

  const handleWhatsApp = () => {
    const cleaned = student.phone.replace(/\D/g, "");
    window.open(`https://wa.me/55${cleaned}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-5"
    >
      {/* Back link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-[#6B6B6B] hover:text-[#C8F135] transition-colors"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.8125rem" }}
      >
        <ArrowLeft size={15} />
        Voltar para lista
      </button>

      {/* Header card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="rounded-xl border border-[#2D2D2D] p-5 sm:p-6"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Avatar */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 flex-shrink-0"
            style={{ borderColor: statusColor }}
          >
            <img
              src={student.avatar}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + badges */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.01em",
                }}
              >
                {student.name}
              </h2>
              <span
                className="px-2 py-0.5 rounded"
                style={{
                  backgroundColor: ALUNO_STATUS_CONFIG[student.alunoStatus]?.bg ?? "rgba(200,241,53,0.12)",
                  color:           ALUNO_STATUS_CONFIG[student.alunoStatus]?.color ?? "#C8F135",
                  border:          `1px solid ${ALUNO_STATUS_CONFIG[student.alunoStatus]?.color ?? "#C8F135"}40`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.08em",
                }}
              >
                {ALUNO_STATUS_CONFIG[student.alunoStatus]?.label ?? student.alunoStatus}
              </span>
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{
                  backgroundColor: statusBg,
                  color: statusColor,
                  border: `1px solid ${statusColor}40`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.6875rem",
                }}
              >
                {statusLabel}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.8125rem",
                color: "#6B6B6B",
              }}
            >
              #{student.id} · Plano {student.plan}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all hover:shadow-[0_0_16px_rgba(37,211,102,0.3)]"
              style={{
                backgroundColor: "#25D366",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#FFFFFF",
              }}
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button
              onClick={() => navigate("/dashboard/alunos/novo")}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#2D2D2D] text-[#6B6B6B] hover:text-[#C8F135] hover:border-[#C8F135] transition-all"
              style={{ backgroundColor: "#111111" }}
            >
              <Edit2 size={15} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Info grid */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        <InfoCard label="EMAIL"             value={student.email} />
        <InfoCard label="TELEFONE"          value={student.phone} />
        <InfoCard label="PLANO"             value={student.plan} />
        <InfoCard label="DATA DE INÍCIO"    value={student.dateJoined} />
        <InfoCard label="ÚLTIMO CHECK-IN"   value={student.lastCheckin} />
        <InfoCard label="TOTAL DE CHECK-INS" value={`${student.checkins} entradas`} />
      </motion.div>

      {/* Payment history */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="rounded-xl border border-[#2D2D2D] overflow-hidden"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <div className="px-5 py-4 border-b border-[#2D2D2D] flex items-center gap-2">
          <CheckCircle size={16} style={{ color: "#C8F135" }} />
          <h3
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#FFFFFF",
              letterSpacing: "0.05em",
            }}
          >
            HISTÓRICO DE PAGAMENTOS
          </h3>
        </div>

        {student.payments.length === 0 ? (
          <p
            className="px-5 py-8 text-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}
          >
            Nenhum pagamento registrado.
          </p>
        ) : (
          <div className="divide-y divide-[#2D2D2D]">
            {student.payments.map((payment) => {
              const ps = PAYMENT_STATUS[payment.status];
              return (
                <div key={payment.id} className="flex items-center justify-between px-5 py-4 gap-3">
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {payment.date}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "#6B6B6B",
                        marginTop: 2,
                      }}
                    >
                      {payment.method}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        backgroundColor: ps.bg,
                        color: ps.color,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.6875rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {ps.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "#FFFFFF",
                      }}
                    >
                      R$ {payment.amount.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
