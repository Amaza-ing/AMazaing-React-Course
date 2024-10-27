import { animals } from "./data/animals";

const movies = ["Lord of the Rings", "Star Wars", "Dune"];

function App() {
  const HTMLMovies = movies.map((movie, index) => {
    return (
      <p key={movie}>
        {index + 1} - {movie}
      </p>
    );
  });

  const HTMLAnimals = animals.map((animal) => {
    return (
      <div key={animal.id}>
        <h2>{animal.name}</h2>
        <img src={animal.img} alt="" width={200} />
      </div>
    );
  });

  return (
    <div>
      <h1>Renderizado de Listas</h1>

      {HTMLMovies}
      {HTMLAnimals}
    </div>
  );
}

export default App;
