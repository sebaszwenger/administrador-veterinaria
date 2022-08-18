import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //STATES
  //State que maneja el arreglo de citas
  const [citas, setCitas] = useState([]);

  //State que maneja la cita a editar
  const [editarCita, setEditarCita] = useState({});

  //Recupera el local storage cuando se carga el componente
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("pacientes")) ?? [];
    if (storage.length > 0) {
      setCitas(storage);
    }
  }, []);

  //Almacena las citas en el Local Storage
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(citas));
  }, [citas]);

  return (
    <>
      <div className="w-5/6 mt-20 ml-auto mr-auto">
        <Header />
        <div className="mt-12 md:flex justify-center">
          <Formulario
            citas={citas}
            setCitas={setCitas}
            editarCita={editarCita}
            setEditarCita={setEditarCita}
          />
          <ListadoPacientes
            setCitas={setCitas}
            citas={citas}
            setEditarCita={setEditarCita}
          />
        </div>
      </div>
    </>
  );
}

export default App;
