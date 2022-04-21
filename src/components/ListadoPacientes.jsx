import Paciente from "./Paciente";

const ListadoPacientes = ({ citas, setCitas, setEditarCita }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll pl-5 mb-5">
      {citas && citas.length ? (
        <>
          <h2 className="from-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>

          {citas.map((cita) => (
            <Paciente
              key={cita.id}
              cita={cita}
              citas={citas}
              setCitas={setCitas}
              setEditarCita={setEditarCita}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Aun no hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando una cita {""}
            <span className="text-indigo-600 font-bold ">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
