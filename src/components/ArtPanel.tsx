import clsx from "clsx";

type Variant = "ink" | "gold" | "ivory";

const variantStyles: Record<Variant, string> = {
  ink: "bg-[radial-gradient(circle_at_30%_20%,#2a271f,#0b0a08_70%)]",
  gold: "bg-[radial-gradient(circle_at_70%_30%,#ddc79a,#b08d57_60%,#3a2f1c_100%)]",
  ivory:
    "bg-[radial-gradient(circle_at_50%_0%,#ffffff,#efe8da_55%,#ddd3bf_100%)]",
};

const monogramColor: Record<Variant, string> = {
  ink: "text-white/10",
  gold: "text-black/10",
  ivory: "text-ink/10",
};

export default function ArtPanel({
  variant = "ink",
  label,
  className,
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        variantStyles[variant],
        className,
      )}
    >
      <div className="grain" />
      <span
        className={clsx(
          "font-display absolute -bottom-6 -right-2 text-[7rem] leading-none tracking-tight select-none",
          monogramColor[variant],
        )}
      >
        MB
      </span>
      {label && (
        <span className="absolute bottom-4 left-4 text-[0.65rem] tracking-[0.25em] uppercase text-white/70 mix-blend-difference">
          {label}
        </span>
      )}
    </div>
  );
}
