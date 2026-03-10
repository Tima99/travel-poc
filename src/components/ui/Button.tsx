import clsx from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-sm sm:text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-tr from-primary to-accent text-white shadow-soft hover:brightness-105",
  outline:
    "border border-border/80 bg-white text-slate-800 hover:border-primary/70 hover:text-primary",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth,
  ...props
}) => (
  <button
    className={clsx(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && "w-full",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

