import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    console.log("El formulario se ha enviado");
  };

  const handleUsernameInput = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <div>
      <h1>Formularios</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            onChange={handleUsernameInput}
            value={user.username}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordInput}
            value={user.password}
          />
        </fieldset>
        <button>Enviar</button>
      </form>

      <button onClick={() => setUser({ username: "", password: "" })}>
        Logout
      </button>
    </div>
  );
}

export default App;
