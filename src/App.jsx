import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";
import { Button, Container } from "react-bootstrap";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    // la consulta de la api solo sucede en el montaje
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //cambiar el valor del state mostrarSpinner para que se vea el componente Spinner
      setMostrarSpinner(true)
      // aqui hago la peticion o request
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      //guardar la frase del personaje en el state
      setPersonaje(dato[0]);
      //cambiar el valor de mostrarSpinner para que se vea el componente Frase
      setMostrarSpinner(false)
    } catch (error) {
      console.log(error);
      // mostrar un mensaje de error al usuario
    }
  };

  //cargar un componente condicional
  // usamos el operador ternario
  // (condicion logica)?(codigo si se cumple la condicion logica):(logica si no se cumple la condicion)
  // const componenteCondicional = (mostrarSpinner)
  const componenteCondicional =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <Container>
      <div className="d-flex justify-content-center align-content-center row">
        <div className="card-img-top d-flex justify-content-center">
          <img
            src="https://trello.com/1/cards/63288a1289c67400fd5b534f/attachments/632b24ad1ed8b700597e4050/previews/632b24ae1ed8b700597e418b/download/theSimpson.png"
            style={{ width: "80%" }}
            className="p-3"
            alt="Los simpsons titulo"
          />
        </div>
        {/* className="btn btn-warning text-dark btn-sm col-3 mt-5 mb-5" */}
        <Button
          type="button"
          variant={"warning"}
          className="w-50 mb-5"
          onClick={consultarAPI}
        >
          Obtener frase
        </Button>
        {componenteCondicional}
      </div>
    </Container>
  );
}

export default App;
