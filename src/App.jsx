import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  const HTMLUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
      </div>
    )
  })

  return (
    <div>
      <h1>fetch() | Llamada a una API</h1>

      <section>{HTMLUsers}</section>
    </div>
  );
}

export default App;
