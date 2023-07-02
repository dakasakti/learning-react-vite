import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

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
      </div>
    </>
  );
}

export default App;
