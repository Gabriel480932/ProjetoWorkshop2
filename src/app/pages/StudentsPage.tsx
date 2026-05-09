import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, X, AlertTriangle } from "lucide-react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { StudentCard, Student } from "../components/dashboard/StudentCard";
import { StudentProfile } from "../components/dashboard/StudentProfile";
import { supabase } from "../../lib/supabase";

// ── Filter dropdown ────────────────────────────────────────────────────────
interface FilterDropdownProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}

function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all whitespace-nowrap"
        style={{
          backgroundColor: value ? "rgba(200,241,53,0.07)" : "#111111",
          borderColor: value ? "#C8F135" : "#2D2D2D",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.8125rem",
          color: value ? "#C8F135" : "#A8A8A8",
        }}
      >
        {selected ? selected.label : label}
        <ChevronDown size={14} style={{ color: value ? "#C8F135" : "#A8A8A8" }} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.13 }}
              className="absolute left-0 top-11 w-44 rounded-xl border border-[#2D2D2D] z-20 overflow-hidden"
              style={{ backgroundColor: "#181818", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
            >
              <button
                onClick={() => { onChange(""); setOpen(false); }}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-[#6B6B6B] hover:bg-[#1E1E1E] hover:text-white transition-all"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8125rem", fontWeight: 500 }}
              >
                {label} (todos)
              </button>
              <div className="h-px bg-[#2D2D2D] mx-3" />
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  className="w-full flex items-center px-4 py-2.5 transition-all hover:bg-[#1E1E1E]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: value === opt.value ? 700 : 500,
                    color: value === opt.value ? "#C8F135" : "#D4D4D4",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Block confirmation modal ───────────────────────────────────────────────
interface BlockModalProps {
  student: Student;
  onConfirm: () => void;
  onCancel: () => void;
}

function BlockModal({ student, onConfirm, onCancel }: BlockModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        onClick={onCancel}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl border border-[#2D2D2D] p-6"
          style={{ backgroundColor: "#181818", boxShadow: "0 24px 64px rgba(0,0,0,0.7)" }}
        >
          <div className="flex items-start gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(224,32,32,0.12)" }}
            >
              <AlertTriangle size={20} style={{ color: "#E02020" }} />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                BLOQUEAR ALUNO
              </h3>
              <p
                className="mt-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "#B0B0B0",
                  lineHeight: 1.5,
                }}
              >
                Tem certeza que deseja bloquear{" "}
                <strong style={{ color: "#FFFFFF" }}>{student.name}</strong>? O aluno perderá acesso à academia.
              </p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              onClick={onCancel}
              className="px-5 py-2.5 rounded-lg border border-[#2D2D2D] text-[#D4D4D4] hover:bg-[#1E1E1E] hover:text-white transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2.5 rounded-lg transition-all hover:shadow-[0_0_16px_rgba(224,32,32,0.3)]"
              style={{
                backgroundColor: "#E02020",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#FFFFFF",
              }}
            >
              Confirmar bloqueio
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────
export function StudentsPage() {
  const [sidebarOpen, setSidebarOpen]         = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [blockTarget, setBlockTarget]         = useState<Student | null>(null);
  const [students, setStudents]               = useState<Student[]>([]);
  const [loading, setLoading]                 = useState(true);

  const [search,        setSearch]        = useState("");
  const [planFilter,    setPlanFilter]    = useState("");
  const [statusFilter,  setStatusFilter]  = useState("");
  const [sortBy,        setSortBy]        = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data: alunos } = await supabase
        .from("alunos")
        .select(`
          id, nome, email, telefone, status, matricula, foto_url, created_at,
          planos_alunos ( data_inicio, data_venc, status, planos ( nome ) ),
          pagamentos ( id, data_pagamento, status, forma_pgto, valor ),
          checkins ( id, created_at )
        `)
        .order("created_at", { ascending: false });

      if (alunos) {
        const mapped: Student[] = alunos.map((a: any) => {
          const planoAtivo = a.planos_alunos?.find((p: any) => p.status === "ATIVO") ?? a.planos_alunos?.[0];
          const planName   = planoAtivo?.planos?.nome ?? "—";
          const venc       = planoAtivo?.data_venc ? new Date(planoAtivo.data_venc) : null;
          const hoje       = new Date();
          let status: Student["status"] = "em-dia";
          if (venc) {
            const diff = (venc.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24);
            if (diff < 0)  status = "em-atraso";
            else if (diff <= 5) status = "vencendo";
          }
          const checkinList = (a.checkins ?? []).sort((x: any, y: any) =>
            new Date(y.created_at).getTime() - new Date(x.created_at).getTime()
          );
          const lastCI = checkinList[0]?.created_at
            ? new Date(checkinList[0].created_at).toLocaleDateString("pt-BR")
            : "—";
          const payments = (a.pagamentos ?? []).map((p: any) => ({
            id:     p.id,
            date:   new Date(p.data_pagamento).toLocaleDateString("pt-BR"),
            status: p.status === "PAGO" ? "pago" : p.status === "ATRASADO" ? "atrasado" : "pendente",
            method: p.forma_pgto,
            amount: Number(p.valor),
          }));
          return {
            id:          a.matricula,
            name:        a.nome,
            email:       a.email ?? "",
            phone:       a.telefone ?? "",
            plan:        planName,
            status,
            alunoStatus: (a.status ?? "ATIVO") as Student["alunoStatus"],
            dateJoined:  new Date(a.created_at).toLocaleDateString("pt-BR"),
            checkins:    a.checkins?.length ?? 0,
            lastCheckin: lastCI,
            avatar:      a.foto_url ?? "",
            payments,
          };
        });
        setStudents(mapped);
      }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    let list = [...students];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q) ||
          s.phone.includes(q)
      );
    }

    if (planFilter) {
      list = list.filter((s) => s.plan.toUpperCase() === planFilter.toUpperCase());
    }

    if (statusFilter) {
      list = list.filter((s) => s.status === statusFilter);
    }

    switch (sortBy) {
      case "az":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "antigos":
        list.sort((a, b) => {
          const ts = (d: string) => { const [dd, mm, yy] = d.split("/"); return new Date(`${yy}-${mm}-${dd}`).getTime(); };
          return ts(a.dateJoined) - ts(b.dateJoined);
        });
        break;
      default:
        list.sort((a, b) => {
          const ts = (d: string) => { const [dd, mm, yy] = d.split("/"); return new Date(`${yy}-${mm}-${dd}`).getTime(); };
          return ts(b.dateJoined) - ts(a.dateJoined);
        });
    }

    return list;
  }, [students, search, planFilter, statusFilter, sortBy]);

  const activeFilters = [planFilter, statusFilter, sortBy].filter(Boolean).length;

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
          title="ALUNOS"
          subtitle="GESTÃO COMPLETA DA BASE DE MEMBROS"
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            {selectedStudent ? (
              <StudentProfile
                key="profile"
                student={selectedStudent}
                onBack={() => setSelectedStudent(null)}
              />
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="rounded-2xl border border-[#2D2D2D] p-4 sm:p-5 lg:p-6"
                  style={{ backgroundColor: "#181818" }}
                >
                  {/* Search */}
                  <div className="relative mb-4">
                    <Search
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: "#6B6B6B" }}
                    />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar aluno por nome, email ou telefone..."
                      className="w-full rounded-xl pl-10 pr-10 py-3 outline-none transition-all"
                      style={{
                        backgroundColor: "#111111",
                        border: "1px solid #2D2D2D",
                        color: "#FFFFFF",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.875rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C8F135")}
                      onBlur={(e)  => (e.target.style.borderColor = "#2D2D2D")}
                    />
                    {search && (
                      <button
                        onClick={() => setSearch("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-white transition-colors"
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <FilterDropdown
                      label="Planos"
                      value={planFilter}
                      onChange={setPlanFilter}
                      options={[
                        { value: "BASIC",   label: "Basic" },
                        { value: "PREMIUM", label: "Premium" },
                        { value: "ELITE",   label: "Elite" },
                      ]}
                    />
                    <FilterDropdown
                      label="Status"
                      value={statusFilter}
                      onChange={setStatusFilter}
                      options={[
                        { value: "em-dia",    label: "Em dia" },
                        { value: "vencendo",  label: "Vencendo" },
                        { value: "em-atraso", label: "Em atraso" },
                      ]}
                    />
                    <FilterDropdown
                      label="Recentes"
                      value={sortBy}
                      onChange={setSortBy}
                      options={[
                        { value: "recentes", label: "Mais recentes" },
                        { value: "antigos",  label: "Mais antigos" },
                        { value: "az",       label: "A → Z" },
                        { value: "za",       label: "Z → A" },
                      ]}
                    />

                    {activeFilters > 0 && (
                      <button
                        onClick={() => { setPlanFilter(""); setStatusFilter(""); setSortBy(""); }}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#6B6B6B] hover:text-white transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                      >
                        <X size={13} />
                        Limpar filtros
                      </button>
                    )}

                    <span
                      className="ml-auto"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", color: "#6B6B6B" }}
                    >
                      {filtered.length} aluno{filtered.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* List */}
                  <motion.div layout className="space-y-2">
                    <AnimatePresence mode="popLayout">
                      {loading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="py-12 text-center"
                        >
                          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}>
                            Carregando alunos…
                          </p>
                        </motion.div>
                      ) : filtered.length === 0 ? (
                        <motion.div
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="py-12 text-center"
                        >
                          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B6B6B", fontSize: "0.875rem" }}>
                            Nenhum aluno cadastrado ainda.
                          </p>
                        </motion.div>
                      ) : (
                        filtered.map((student) => (
                          <StudentCard
                            key={student.id}
                            student={student}
                            onClick={() => setSelectedStudent(student)}
                            onBlock={() => setBlockTarget(student)}
                          />
                        ))
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {blockTarget && (
        <BlockModal
          student={blockTarget}
          onConfirm={async () => {
            const { error } = await supabase
              .from("alunos")
              .update({ status: "SUSPENSO" })
              .eq("matricula", blockTarget.id);
            if (!error) {
              setStudents((prev) =>
                prev.map((s) =>
                  s.id === blockTarget.id ? { ...s, alunoStatus: "SUSPENSO" } : s
                )
              );
            }
            setBlockTarget(null);
          }}
          onCancel={() => setBlockTarget(null)}
        />
      )}
    </div>
  );
}