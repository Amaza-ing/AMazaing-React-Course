import { useState } from "react";

function App() {
  // let number = 0;
  const [number, setNumber] = useState(0);

  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div>
      <h1>Hola a todos</h1>

      <h2 onClick={addOne}>Number: {number}</h2>
    </div>
  );
}

export default App;
