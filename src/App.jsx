function App() {
  const condition = true;

  return (
    <div>
      <h1>Renderizado Condicional</h1>

      {condition && <h2>La condición se cumple</h2>}
      {!condition && <h2>La condición no se cumple</h2>}

      {condition ? (
        <h2>La condición se cumple</h2>
      ) : (
        <h2>La condición no se cumple</h2>
      )}
    </div>
  );
}

export default App;
