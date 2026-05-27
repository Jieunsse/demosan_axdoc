import { cn } from "@shared/lib/cn";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface SegControlProps<T extends string> {
  value: T;
  onChange: (v: T) => void;
  options: Option<T>[];
  className?: string;
}

export function SegControl<T extends string>({ value, onChange, options, className }: SegControlProps<T>) {
  return (
    <div className={cn("inline-flex gap-0.5 p-[3px] bg-[var(--ax-bg-alternative)] rounded-[10px]", className)}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "border-none px-3.5 py-2 rounded-lg font-semibold text-[12.5px] leading-none cursor-pointer transition-[background,color] duration-[120ms]",
            value === opt.value
              ? "bg-[var(--ax-bg-elevated)] text-[var(--ax-fg-strong)] shadow-[0_1px_2px_rgba(23,23,23,0.08)]"
              : "bg-transparent text-[var(--ax-fg-neutral)]"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
