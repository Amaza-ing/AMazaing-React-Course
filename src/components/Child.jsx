import { useEffect, useState } from "react";

function Child() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      console.log("El componente se ha desmontado");
    }
  }, [])

  return (
    <div className="child">
      <h2>Este es un componente hijo</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Child;
