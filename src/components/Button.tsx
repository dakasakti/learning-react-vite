interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  className?: string;
  disable?: boolean;
}

function Button({
  children = "Button",
  onClick,
  color = "primary",
  className = "",
  disable = false,
}: Props) {
  const buttonClassName = className
    ? `btn btn-${color} ${className}`
    : `btn btn-${color}`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
}

export default Button;
