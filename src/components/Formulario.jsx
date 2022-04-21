import { useState, useEffect } from "react";
import Mensaje from "../components/Mensaje";

const Formulario = ({ setCitas, citas, editarCita, setEditarCita }) => {
  //STATES
  //State que maneja mensaje de error en pantalla
  const [error, setError] = useState(false);

  //State que maneja los campos del formulario
  const [paciente, setPaciente] = useState({
    mascota: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
    id: "",
  });

  // Extrae los valores del state paciente
  const { mascota, email, propietario, fecha, sintomas, id } = paciente;

  useEffect(() => {
    if (Object.keys(editarCita).length > 0) {
      setPaciente(editarCita);
    }
  }, [editarCita]);

  //FUNCIONES
  //Genera un id para el paciente
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  //Valida los campos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, email, propietario, fecha, sintomas].includes("")) {
      //Coloca mensaje de error
      setError(true);
      return;
    }

    //Revisa si se esta queriendo editar una cita
    if (Object.keys(editarCita).length > 0) {
      //Edita una cita
      const citasActualizadas = citas.map((cita) =>
        cita.id === editarCita.id ? paciente : cita
      );
      setEditarCita({});
      setCitas(citasActualizadas);
    } else {
      //Crea nueva cita

      //Genera un id para la cita
      paciente.id = generarId();

      //Borra mensaje de error
      setError(false);

      //Crea la cita del paciente
      setCitas([...citas, paciente]);
    }

    // Reiniciar el formulario
    setPaciente({
      mascota: "",
      propietario: "",
      email: "",
      fecha: "",
      sintomas: "",
      id: "",
    });
  };

  //Almacena los campos del formulario en el state de paciente
  const handleCita = (e) => {
    setPaciente({
      ...paciente,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 pl-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 p-5 mb-10"
      >
        <div className="mb-5">
          <label htmlFor="mascota" className="block  uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            onChange={handleCita}
            value={mascota}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block  uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            onChange={handleCita}
            value={propietario}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block  uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email contacto propietario"
            onChange={handleCita}
            value={email}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block  uppercase font-bold">
            Alta
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleCita}
            value={fecha}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Sintomas" className="block  uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            onChange={handleCita}
            value={sintomas}
          />
        </div>

        {error && <Mensaje mensaje="Todos los campos son obligatorios" />}

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 rounded-md cursor-pointer transition-all"
          // Cambia el value del boton segun se este creando o editando una cita
          value={
            Object.keys(editarCita).length
              ? "Editar Paciente"
              : "Agregar Paciente"
          }
        />
      </form>
    </div>
  );
};
export default Formulario;
