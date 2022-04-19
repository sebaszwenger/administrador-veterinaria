import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <div className="w-5/6 mt-20 ml-auto mr-auto">
        <Header />
        <div className="mt-12 md:flex justify-center">
          <Formulario citas={citas} setCitas={setCitas} />
          <ListadoPacientes citas={citas} />
        </div>
      </div>
    </>
  );
}

export default App;
