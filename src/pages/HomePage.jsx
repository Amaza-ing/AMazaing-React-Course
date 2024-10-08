import { useContext, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../contexts/user.context";

function HomePage() {
  const { user, login, logout } = useContext(UserContext);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <h2>Hola {user && <span>{user.name}</span>}</h2>
      <div data-testid="homepage-title">HomePage</div>

      <br /> <br /> <br />
      <h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span data-testid="counter">{counter}</span>
        <button onClick={() => setCounter(counter + 1)} data-testid="increase-counter">+</button>
      </h2>
      <br /> <br /> <br />

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
}

export default HomePage;
