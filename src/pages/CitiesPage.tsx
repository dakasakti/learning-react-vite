import Anchor from "../components/Anchor";
import ListGroup from "../components/ListGroup";

export default function CitiesPage() {
  const items = ["Jakarta", "Palembang", "Bali", "Papua"];

  const handleItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container">
      <ListGroup items={items} heading="Cities" onSelectItem={handleItem} />
      <Anchor to="/" children="Back To Home" />
    </div>
  );
}
