import { useState, useEffect } from "react";
import Error from "./Error";

let initialData = {
  petName: "",
  owner: "",
  email: "",
  alta: "",
  symptoms: "",
};

const generateId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
};

const Form = ({ patients, setPatients, currentPatient, setCurrentPatient }) => {
  const [petInfo, setPetInfo] = useState(initialData);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(currentPatient).length > 0) {
      setPetInfo(currentPatient);
    }
  }, [currentPatient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { petName, owner, email, alta, symptoms } = petInfo;

    // validate empty fields
    if ([petName, owner, email, alta, symptoms].includes("")) {
      console.log("Hay un campo vacío");
      setError(true);
      return;
    }

    if (currentPatient.id) {
      // editando registro
      const updatedPatients = patients.map((p) =>
        p.id === currentPatient.id ? petInfo : p
      );
      setPatients(updatedPatients);
      setCurrentPatient({});
    } else {
      // nuevo registro
      const petInfoWithID = { ...petInfo, id: generateId() };
      setPatients([...patients, petInfoWithID]);
    }

    setError(false);
    setPetInfo(initialData);
  };

  const handleInputChange = (event) => {
    setPetInfo({
      ...petInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-7 mb-10"
      >
        {error && (
          <Error>
            <p className="text-red-600 font-bold text-center uppercase">
              ¡Todos los campos son obligatorios!
            </p>
          </Error>
        )}

        <div className="mb-8">
          <label
            htmlFor="pet-name"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>
          <input
            id="pet-name"
            type="text"
            placeholder="Nombre de tu mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petInfo.petName}
            name="petName"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="owner-name"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="owner-name"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petInfo.owner}
            name="owner"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petInfo.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="alta"
            className="block text-gray-700 font-bold uppercase"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petInfo.alta}
            name="alta"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 font-bold uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petInfo.symptoms}
            name="symptoms"
            onChange={handleInputChange}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
          value={currentPatient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
