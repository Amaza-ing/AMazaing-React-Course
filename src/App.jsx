function App() {
  return (
    <>
      <div>
        <h1>Bienvenidos al curso de React de AMazaing</h1>
        <hr />
        <h3>
          Este curso está separado por ramas, tienes cada lección y ejemplo en
          cada rama.
        </h3>
        <h4>
          Puedes ver cada rama en el{" "}
          <a
            href="https://github.com/Amaza-ing/AMazaing-React-Course"
            target="_blank"
          >
            repositorio de GitHub ⤴.
          </a>
        </h4>
        <h4>
          También puedes ver las ramas desde una terminal en Visual Studio Code
          o el editor de código que utilices escribiendo el siguiente comando:
          <pre>git branch -a</pre>
        </h4>
        <h4>
          Puedes moverte a cada rama escribiendo el comando:
          <pre>git checkout nombre-de-la-rama</pre>
        </h4>
        <hr />
        <h2>Hecho por Adrián Maza</h2>
        <h3>
          <a href="https://www.youtube.com/@AMaza-Ing" target="_blank">
            AMazaing
          </a>
        </h3>
        <h4>Espero que lo disfrutes ;)</h4>
        <div className="links">
          <h5>
            <a href="https://www.youtube.com/@AMaza-Ing" target="_blank">
              YouTube/AMaza-ing
            </a>
          </h5>
          <h5>
            <a
              href="https://www.linkedin.com/in/adrian-maza-vazquez/"
              target="_blank"
            >
              LinkedIn/Adrián-Maza
            </a>
          </h5>
          <h5>
            <a href="https://www.amaza-ing.com/" target="_blank">
              AMazaing Web
            </a>
          </h5>
          <h5>
            <a href="https://github.com/Amaza-ing" target="_blank">
              GitHub/AMaza-ing
            </a>
          </h5>
        </div>
      </div>
    </>
  );
}

export default App;
