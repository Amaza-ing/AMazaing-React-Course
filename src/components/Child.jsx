function Child(props) {
  const handleClick = () => {
    props.handleLogin("Adrián");
  };

  return (
    <div className="child">
      <h2>Este es un componente hijo</h2>

      <p>Nombre de usuario: {props.userName}</p>

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Child;
