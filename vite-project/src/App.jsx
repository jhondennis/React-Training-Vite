import { useState } from "react";
import ComponenteHijo from "./components/ComponenteHijo";
import ComponentPadre from "./components/MiPrimierCompomente";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ComponentPadre style={{ padding: "15px" }}>
        <button onClick={() => setCount((anterior) => anterior + 1)}>
          Incremento
        </button>
        <ComponenteHijo valor={count} setCount={setCount} />
      </ComponentPadre>
    </div>
  );
}

export default App;
