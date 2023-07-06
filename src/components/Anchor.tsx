import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

export default function Anchor({ to, children }: Props) {
  return (
    <Link to={to} className="mt-5">
      {children}
    </Link>
  );
}
