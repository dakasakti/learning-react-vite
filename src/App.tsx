import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Carts from "./components/Carts";

function App() {
  const items = ["Jakarta", "Palembang", "Bali", "Papua"];

  const handleItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <div className="container">
        <ListGroup items={items} heading="Cities" onSelectItem={handleItem} />
        <br></br>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello, this is children. <span>Created by Dakasakti</span>
          </Alert>
        )}
        <Button onClick={() => setAlertVisible(true)}>Click Me</Button>
        <br />
        <Carts />
        <div className="mt-2">
          <img
            className="mt-2"
            src="./public/props-vs-state.png"
            width={728}
            alt="props vs state"
          />
          <img
            className="mt-2"
            src="./public/lifecycle-hooks.PNG"
            alt="lifecycle hooks"
          />
        </div>
      </div>
    </>
  );
}

export default App;
