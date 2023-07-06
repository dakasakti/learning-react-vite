import { useState } from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";
import Anchor from "../components/Anchor";

export default function AlertPage() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div className="container">
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello, this is children. <span>Created by Dakasakti</span>
          </Alert>
        )}
        <Button onClick={() => setAlertVisible(true)}>Click Me</Button>
      </div>
      <Anchor to="/" children="Back To Home" />
    </div>
  );
}
