import { useState } from "react";
import Child from "./components/Child";

function App() {
  const [showChild, setShowChild] = useState(true);
  return (
    <div>
      <h1>useEffect() | Ciclo de Vida de los Componentes</h1>

      <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
      {showChild && <Child></Child>}
    </div>
  );
}

export default App;
