function Mensaje({ mensaje }) {
  return (
    <>
      <p className="bg-red-600 w-full p-3 text-white uppercase font-bold rounded-md text-center mb-5">
        {mensaje}
      </p>
    </>
  );
}

export default Mensaje;
