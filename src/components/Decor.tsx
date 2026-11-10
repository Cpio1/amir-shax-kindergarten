type SvgProps = { className?: string };

export function Cloud({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      <path
        d="M30 58h62a22 22 0 0 0 2-43.9A28 28 0 0 0 41.5 12 20 20 0 0 0 30 58Z"
        fill="#fff"
      />
    </svg>
  );
}

export function Flower({ className = "", petal = "#ffb89c", center = "#ffc94d" }: SvgProps & { petal?: string; center?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="30" cy="15" rx="10" ry="13" fill={petal} transform={`rotate(${r} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="9" fill={center} />
    </svg>
  );
}

export function SunDecor({ className = "" }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g stroke="#ffc94d" strokeWidth="5" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="50" y1="6" x2="50" y2="16" transform={`rotate(${i * 30} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="26" fill="#ffc94d" />
      <circle cx="42" cy="46" r="2.6" fill="#3b3352" />
      <circle cx="58" cy="46" r="2.6" fill="#3b3352" />
      <path d="M41 56c5 5 13 5 18 0" stroke="#3b3352" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="36" cy="55" r="3.5" fill="#ffb89c" opacity=".8" />
      <circle cx="64" cy="55" r="3.5" fill="#ffb89c" opacity=".8" />
    </svg>
  );
}

export function Star({ className = "", fill = "#ffc94d" }: SvgProps & { fill?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 3c1.4 0 2.2 9.6 4.4 12s12.1 3.6 12.1 5-9.8 2.6-12 5S21.4 37 20 37s-2.2-9.6-4.4-12S3.5 21.4 3.5 20s9.9-2.6 12.1-5S18.6 3 20 3Z"
        fill={fill}
      />
    </svg>
  );
}

export function Dots({ className = "", fill = "#a9dbf5" }: SvgProps & { fill?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i} cx={10 + (i % 4) * 20} cy={10 + Math.floor(i / 4) * 20} r="3.2" fill={fill} />
      ))}
    </svg>
  );
}

/** Волнистый разделитель. `fill` — цвет следующей секции. */
export function Wave({ fill, className = "", variant = 1 }: SvgProps & { fill: string; variant?: 1 | 2 | 3 }) {
  const paths = {
    1: "M0 40C120 10 240 0 360 14s240 46 360 44 240-40 360-46 240 18 360 26v42H0Z",
    2: "M0 30c160 30 280 40 420 22S700 0 860 8s260 40 580 22v50H0Z",
    3: "M0 50c90-26 200-44 320-32s220 46 360 42 260-44 400-46 220 20 360 30v36H0Z",
  } as const;
  return (
    <div className={`pointer-events-none relative -mb-px leading-[0] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-10 w-full sm:h-14 lg:h-16">
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  accent = "bg-sun-soft text-sun-deep",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  accent?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold tracking-wide ${accent}`}>
        <Star className="h-3 w-3" fill="currentColor" />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-[1.75rem] leading-tight font-bold text-ink sm:text-[2.15rem]">{title}</h2>
      {lead && <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">{lead}</p>}
    </div>
  );
}
