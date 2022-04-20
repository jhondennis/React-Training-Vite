import { useState } from "react";
import ComponenteHijo from "./components/ComponenteHijo";
import ComponentPadre from "./components/MiPrimierCompomente";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [enable, setEnable] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "300px", backgroundColor: "red" }} className="App">
        center
      </div>
      <ComponentPadre>
        <button
          onClick={() => {
            if (count > 5) setEnable(false);
            setCount((anterior) => anterior + 1);
          }}
        >
          Incremento
        </button>
        <div>dentro del padre {count}</div>
        {enable ? <ComponenteHijo /> : null}
      </ComponentPadre>
    </div>
  );
}

export default App;
