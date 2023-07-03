import { useState, useEffect } from "react";
import Button from "./Button";
import { CounterObject } from "./Carts";

interface Props {
  counter: CounterObject;
  onDecrement: (counter: CounterObject) => void;
  onIncrement: (counter: CounterObject) => void;
  onDelete: (id: number) => void;
}

function Counter({ counter, onDecrement, onIncrement, onDelete }: Props) {
  const [disable, setDisable] = useState(true);
  const [color, setColor] = useState("warning");

  const getCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  useEffect(() => {
    // componentDidMount
    const changeData = () => {
      if (counter.value === 0) {
        setDisable(true);
        setColor("warning");
        return;
      }

      setDisable(false);
      setColor("primary");
    };

    changeData();
  }, [counter.value]);

  return (
    <div className="mt-2">
      <span className={`m-2 badge bg-${color}`}>{getCount()}</span>
      <Button
        className="me-2"
        color="secondary"
        disable={disable}
        onClick={() => onDecrement(counter)}
      >
        -
      </Button>
      <Button
        className="me-2"
        color="secondary"
        onClick={() => onIncrement(counter)}
      >
        +
      </Button>
      <Button color="danger" onClick={() => onDelete(counter.id)}>
        Delete
      </Button>
    </div>
  );
}

export default Counter;
