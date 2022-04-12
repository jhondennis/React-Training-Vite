import React from "react";

const ComponenteHijo = ({ valor, setCount }) => {
  return (
    <div>
      El valor es: {valor}
      <button onClick={() => setCount((prev) => prev + 1)}>
        {" "}
        dentro del hijo
      </button>
    </div>
  );
};
export default ComponenteHijo;
