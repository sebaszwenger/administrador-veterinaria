const Paciente = ({ cita }) => {
  //Extrae los datos de la cita
  const { mascota, email, propietario, fecha, sintomas } = cita;

  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-md mb-5">
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
    </div>
  );
};

export default Paciente;
