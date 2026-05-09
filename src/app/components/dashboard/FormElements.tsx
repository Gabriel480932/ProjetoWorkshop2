import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ── SHARED STYLES ──────────────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  backgroundColor: "#111111",
  border: "1px solid #2D2D2D",
  borderRadius: 8,
  color: "#FFFFFF",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "0.875rem",
  padding: "10px 14px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

// ── SECTION HEADER ─────────────────────────────────────────────────────────

interface SectionHeaderProps {
  number: number;
  title: string;
  subtitle?: string;
  optional?: boolean;
}

export function SectionHeader({ number, title, subtitle, optional }: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: "rgba(255,107,26,0.15)", border: "1px solid rgba(255,107,26,0.35)" }}
      >
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "#FF6B1A",
          }}
        >
          {number}
        </span>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#FFFFFF",
              letterSpacing: "0.05em",
            }}
          >
            {title}
          </h2>
          {optional && (
            <span
              className="px-2 py-0.5 rounded"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.625rem",
                color: "#6B6B6B",
                backgroundColor: "#1E1E1E",
                border: "1px solid #2D2D2D",
                letterSpacing: "0.08em",
              }}
            >
              OPCIONAL
            </span>
          )}
        </div>
        {subtitle && (
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              color: "#6B6B6B",
              marginTop: 2,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// ── FORM LABEL ─────────────────────────────────────────────────────────────

interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export function FormLabel({ children, required }: LabelProps) {
  return (
    <label
      className="block mb-1.5"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        fontSize: "0.75rem",
        color: "#B0B0B0",
        letterSpacing: "0.04em",
      }}
    >
      {children}
      {required && <span style={{ color: "#FF6B1A", marginLeft: 3 }}>*</span>}
    </label>
  );
}

// ── TEXT / EMAIL / DATE / NUMBER INPUT ─────────────────────────────────────

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  suffix?: string;
}

export function FormInput({ label, required, suffix, ...props }: FormInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <div className="relative">
        <input
          {...props}
          style={{
            ...inputBase,
            borderColor: focused ? "#C8F135" : "#2D2D2D",
            paddingRight: suffix ? 48 : 14,
          }}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        />
        {suffix && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#6B6B6B",
            }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

// ── TEXTAREA ───────────────────────────────────────────────────────────────

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
}

export function FormTextarea({ label, required, ...props }: FormTextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <textarea
        {...props}
        rows={props.rows ?? 3}
        style={{
          ...inputBase,
          borderColor: focused ? "#C8F135" : "#2D2D2D",
          resize: "vertical",
          lineHeight: 1.6,
        }}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
      />
    </div>
  );
}

// ── SELECT ─────────────────────────────────────────────────────────────────

interface FormSelectProps {
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function FormSelect({ label, required, value = "", onChange, options, placeholder = "Selecione" }: FormSelectProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            ...inputBase,
            borderColor: focused ? "#C8F135" : "#2D2D2D",
            appearance: "none",
            cursor: "pointer",
            color: value ? "#FFFFFF" : "#6B6B6B",
            paddingRight: 36,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <option value="" disabled style={{ color: "#6B6B6B", backgroundColor: "#111111" }}>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ backgroundColor: "#111111", color: "#FFFFFF" }}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "#6B6B6B" }}
        />
      </div>
    </div>
  );
}

// ── RADIO TOGGLE (SIM / NÃO / custom) ─────────────────────────────────────

interface RadioToggleProps {
  question: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const TOGGLE_COLORS: Record<string, { border: string; bg: string; text: string }> = {
  SIM:   { border: "#C8F135", bg: "rgba(200,241,53,0.12)", text: "#C8F135" },
  NÃO:   { border: "#6B6B6B", bg: "rgba(107,107,107,0.1)", text: "#D4D4D4" },
  ALTA:  { border: "#E02020", bg: "rgba(224,32,32,0.1)", text: "#E02020" },
  BAIXA: { border: "#00E5FF", bg: "rgba(0,229,255,0.1)", text: "#00E5FF" },
  "N/A": { border: "#3A3A3A", bg: "rgba(58,58,58,0.15)", text: "#6B6B6B" },
};

function getToggleStyle(option: string, selected: boolean) {
  const c = TOGGLE_COLORS[option] ?? { border: "#6B6B6B", bg: "rgba(107,107,107,0.1)", text: "#D4D4D4" };
  return {
    border: `1px solid ${selected ? c.border : "#2D2D2D"}`,
    backgroundColor: selected ? c.bg : "transparent",
    color: selected ? c.text : "#6B6B6B",
    borderRadius: 9999,
    padding: "5px 14px",
    cursor: "pointer",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    transition: "all 0.18s",
    whiteSpace: "nowrap" as const,
  };
}

export function RadioToggle({ question, options, value, onChange }: RadioToggleProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#1E1E1E]">
      <p
        className="flex-1 min-w-0"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.8125rem",
          color: "#D4D4D4",
          lineHeight: 1.4,
        }}
      >
        {question}
      </p>
      <div className="flex gap-1.5 flex-shrink-0">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            style={getToggleStyle(opt, value === opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── OBJECTIVE BUTTON ───────────────────────────────────────────────────────

interface ObjectiveButtonProps {
  label: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export function ObjectiveButton({ label, icon, selected, onClick }: ObjectiveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all"
      style={{
        border: `1px solid ${selected ? "#C8F135" : "#2D2D2D"}`,
        backgroundColor: selected ? "rgba(200,241,53,0.08)" : "#111111",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>{icon}</span>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          color: selected ? "#C8F135" : "#B0B0B0",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
    </button>
  );
}
