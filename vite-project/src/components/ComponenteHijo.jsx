import React from "react";

const ComponenteHijo = ({}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("render", count);
    return () => {
      console.log("destroy");
    };
  }, [data]);

  return (
    <div>
      <div>El valor es: {count}</div>
      <button onClick={() => setCount(count + 1)}>dentro del hijo</button>
    </div>
  );
};
export default ComponenteHijo;
