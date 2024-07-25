import { useState } from "react";
import Child from "./components/Child";
import HelloUser from "./components/HelloUser";

function App() {
  const [ displayName, setDisplayName ] = useState("");

  const login = (name) => {
    setDisplayName(name);
  }

  return (
    <div>
      <h1>State Up | Comunicación entre hermanos</h1>

      <h2>Hola, { displayName }</h2>

      <HelloUser userName={displayName}></HelloUser>

      <Child handleLogin={login} userName={displayName}></Child>
    </div>
  );
}

export default App;
