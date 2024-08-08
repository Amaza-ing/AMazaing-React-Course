function App() {
  return (
    <div>
      <h1>
        Formularios
      </h1>

      <form>
        <fieldset>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
          />
        </fieldset>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
