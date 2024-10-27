import { useState } from "react";

function App() {
  const [myText, setMyText] = useState("Tu Nombre");
  const [myValue, setMyValue] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setMyValue(e.target.value);
  };

  return (
    <div>
      <h1>Hola a todos</h1>
      <h2>{myValue}</h2>
      <input
        type="text"
        placeholder={myText}
        value={myValue}
        onChange={handleInput}
      />
    </div>
  );
}

export default App;
