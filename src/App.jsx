import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id) => {
    const tempPacientes = pacientes.filter(paciente => paciente.id !== id);
    setPacientes([...tempPacientes]);
  }
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);
  return (
    <div className="container mx-auto">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
