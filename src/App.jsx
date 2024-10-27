function App() {
  const saySomething = () => {
    console.log("something");    
  }

  return (
    <div>
      <h1 onClick={saySomething}>Hola a todos</h1>
      {/* <h1 onClick={() => console.log("patata")}>Hola a todos</h1> */}
    </div>
  );
}

export default App;
