import { useState } from "react";

function Child(props) {
  const [userName, setUserName] = useState("Adrián");

  const handleClick = () => {
    props.handleLogin(userName);
  }

  return (
    <div className="child">
      <h2>Este es el componente hijo</h2>

      <p>Nombre de usuario: {userName}</p>

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Child;
