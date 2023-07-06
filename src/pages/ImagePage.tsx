import Anchor from "../components/Anchor";
import Image from "../components/Image";

export default function ImagePage() {
  return (
    <div className="container">
      <div>
        <Image src="./props-vs-state.png" alt="props vs state" />
        <Image src="./lifecycle-hooks.PNG" alt="lifecycle hooks" />
      </div>
      <Anchor to="/" children="Back To Home" />
    </div>
  );
}
