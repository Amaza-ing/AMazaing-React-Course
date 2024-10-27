const movies = ["Lord of the Rings", "Star Wars", "Dune"];

function App() {
  const HTMLMovies = movies.map((movie, index) => {
    return <p key={movie}>{index + 1} - {movie}</p>
  })

  return (
    <div>
      <h1>Renderizado de Listas</h1>

      {HTMLMovies}
    </div>
  );
}

export default App;
