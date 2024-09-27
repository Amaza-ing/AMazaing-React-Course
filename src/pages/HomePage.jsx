import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../contexts/user.context";

function HomePage() {
  const {user, login, logout} = useContext(UserContext);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <h2>Hola {user && <span>{user.name}</span>}</h2>
      <div>HomePage</div>

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>

    </>
  );
}

export default HomePage;
