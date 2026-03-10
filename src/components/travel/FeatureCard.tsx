import type { ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-card backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="text-xs text-slate-600 sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

