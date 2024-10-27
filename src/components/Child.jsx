function Child(props) {
  const { msg, person } = props;

  return (
    <>
      <h2>Este es el componente hijo</h2>

      <p>{msg}</p>
      <div>
        {person.sex} - {person.age}
      </div>
    </>
  );
}

export default Child;
