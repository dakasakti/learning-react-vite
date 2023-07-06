interface Props {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: Props) {
  return <img className="img-thumbnail" src={src} alt={alt} />;
}
