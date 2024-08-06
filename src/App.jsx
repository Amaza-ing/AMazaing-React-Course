import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");    
    setUsers(response.data);
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
      <h1>axios | Llamada a una API</h1>

      <section>{HTMLUsers}</section>
    </div>
  );
}

export default App;
