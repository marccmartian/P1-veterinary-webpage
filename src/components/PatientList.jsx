import Patient from "./Patient";

const PatientList = ({ patients, setCurrentPatient, removePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza Agregando pacientes y{" "}
            <span className="text-indigo-600 font-bold">Aparecerán aquí</span>
          </p>
        </>
      )}

      <div className="md:h-screen overflow-y-scroll">
        {patients.map((patient) => (
          <Patient
            key={patient.id}
            patient={patient}
            setCurrentPatient={setCurrentPatient}
            removePatient={removePatient}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
