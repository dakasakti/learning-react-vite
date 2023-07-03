import { useState } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";

export interface CounterObject {
  id: number;
  value: number;
}

function Carts() {
  const [counters, setCounters] = useState([
    { id: 1, value: 3 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 1 },
  ]);

  const handleDelete = (id: number) => {
    const data = counters.filter((counter) => counter.id !== id);
    setCounters(data);
  };

  const handleReset = () => {
    const data = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    setCounters(data);
  };

  const handleDecrement = (counter: CounterObject) => {
    const data = [...counters];
    const index = data.indexOf(counter);
    data[index] = { ...counter };
    data[index].value--;
    setCounters(data);
  };

  const handleIncrement = (counter: CounterObject) => {
    const data = [...counters];
    const index = data.indexOf(counter);
    data[index] = { ...counter };
    data[index].value++;
    setCounters(data);
  };

  return (
    <>
      <h1>Carts</h1>
      <div className="mt-2">
        <Navbar
          totalCounters={counters.filter((counter) => counter.value > 0).length}
        />
        <Counters
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          counters={counters}
        />
      </div>
    </>
  );
}

export default Carts;
