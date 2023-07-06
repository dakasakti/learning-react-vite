import Counter from "./Counter";
import Button from "./Button";
import { CounterObject } from "../pages/CartsPage";

interface Props {
  counters: CounterObject[];
  onReset: () => void;
  onDecrement: (counter: CounterObject) => void;
  onIncrement: (counter: CounterObject) => void;
  onDelete: (id: number) => void;
}

function Counters({
  counters,
  onDecrement,
  onIncrement,
  onDelete,
  onReset,
}: Props) {
  return (
    <>
      <Button className="d-inline" onClick={onReset}>
        Reset
      </Button>
      {counters.map((item) => (
        <Counter
          key={item.id}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onDelete={onDelete}
          counter={item}
        />
      ))}
    </>
  );
}

export default Counters;
