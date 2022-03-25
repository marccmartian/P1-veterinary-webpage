const Patient = ({ patient, setCurrentPatient, removePatient }) => {
  const { petName, owner, email, alta, symptoms, id } = patient;

  const confirmRemovePatient = () => {
    const userResponse = confirm("Desea eliminar al paciente?");
    if (userResponse) removePatient(id);
  };

  return (
    <div className="mx-3 mb-3 bg-white shadow-md px-8 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
          onClick={() => setCurrentPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          onClick={confirmRemovePatient}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
