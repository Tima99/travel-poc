import type { ReactNode } from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  cta?: ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  cta,
}) => {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
      )}
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className={`space-y-2 ${align === "center" ? "sm:max-w-xl" : ""}`}>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-slate-600 sm:text-base">{subtitle}</p>
          )}
        </div>
        {cta && <div className="mt-2 sm:mt-0">{cta}</div>}
      </div>
    </div>
  );
};

