const Paciente = ({ cita, citas, setCitas, setEditarCita }) => {
  //Extrae los datos de la cita
  const { mascota, email, propietario, fecha, sintomas } = cita;

  //FUNCIONES
  //Pasa los datos de la cita a editar hacia el modulo de Formulario via modulo App
  const editarCita = () => {
    setEditarCita(cita);
  };

  //Elimina la cita seleccionada
  const borrarCita = (e) => {
    const citasActualizadas = citas.filter(
      (elemento) => elemento.id !== cita.id
    );
    setCitas(citasActualizadas);
  };

  return (
    <div className="bg-white shadow-md px-5 py-7 rounded-md mb-5">
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{mascota}</span>
      </p>

      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="bg-indigo-600 mt-7 py-2 px-5 text-white uppercase font-bold hover:bg-indigo-800 rounded-md cursor-pointer transition-all"
          onClick={editarCita}
        >
          editar
        </button>

        <button
          className="bg-red-600 mt-7 py-2 px-5 text-white uppercase font-bold hover:bg-red-800 rounded-md cursor-pointer transition-all"
          onClick={borrarCita}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
