import Paciente from "./Paciente";

const ListadoPacientes = ({ citas }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll pl-5 mb-5">
      <h2 className="from-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
      </p>

      {citas.map((cita, index) => (
        <Paciente key={index} cita={cita} />
      ))}
    </div>
  );
};

export default ListadoPacientes;
