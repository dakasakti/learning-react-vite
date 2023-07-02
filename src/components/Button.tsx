interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
