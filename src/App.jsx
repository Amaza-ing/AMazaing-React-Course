import { useState } from "react";
import Child from "./components/Child";

function App() {
  const [displayName, setDisplayName] = useState("");

  const login = (name) => {
    setDisplayName(name);
  };

  return (
    <div>
      <h1>Props | Comunicación Hijo-Padre ⬆</h1>

      <h2>Hola {displayName}</h2>

      <Child handleLogin={login}></Child>
    </div>
  );
}

export default App;
