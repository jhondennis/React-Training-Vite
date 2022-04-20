import React from "react";
import { actionGetItem } from "../store/actions";

const ComponenteHijo = ({}) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("render", count);
    return () => {
      console.log("destroy");
    };
    dispatch(actionGetItem(data));
  }, []);

  return (
    <div>
      <div>El valor es: {count}</div>
      <button onClick={() => setCount(count + 1)}>dentro del hijo</button>
    </div>
  );
};
export default ComponenteHijo;
