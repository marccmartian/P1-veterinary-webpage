import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) || [];
      setPatients(patientsLS);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const removePatient = (id) => {
    const updatedPatients = patients.filter((p) => p.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="Container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex lg:mx-40 md:mx-10">
        <Form
          patients={patients}
          setPatients={setPatients}
          currentPatient={currentPatient}
          setCurrentPatient={setCurrentPatient}
        />
        <PatientList
          patients={patients}
          setCurrentPatient={setCurrentPatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  );
}

export default App;
