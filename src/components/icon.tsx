type IconProps = {
  icon: string;
  size?: number;
  fill?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: number;
  className?: string;
  color?: string;
  "aria-label"?: string;
};

export function Icon({
  icon,
  size = 20,
  fill = false,
  weight = 400,
  grade,
  className,
  color,
  "aria-label": ariaLabel,
}: IconProps) {
  const settings = [
    `'FILL' ${fill ? 1 : 0}`,
    `'wght' ${weight}`,
    grade != null ? `'GRAD' ${grade}` : null,
    `'opsz' ${size}`,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <span
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      className={`material-symbols${className ? ` ${className}` : ""}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        color,
        fontVariationSettings: settings,
      }}
    >
      {icon}
    </span>
  );
}
