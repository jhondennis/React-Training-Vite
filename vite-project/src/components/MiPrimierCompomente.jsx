import React from "react";

const MiPrimerComponente = ({ children, valor }) => {
  // logica
  // estado o hooks
  // peticion api
  return (
    <div>
      Componente {valor}
      <div>{children}</div>
    </div>
  );
};

export default MiPrimerComponente;
