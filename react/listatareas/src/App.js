import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Lista from './components/Lista';

function App() {

  const [arrTareas, setArrTareas] = useState([]);

  const handleTareaEnviada = (nuevaTarea) => {
    setArrTareas([...arrTareas, nuevaTarea]);
  }

  const handleTareaBorrada = (index) => {
    const arrCopia = [...arrTareas];
    arrCopia.splice(index, 1);
    setArrTareas(arrCopia);
  }

  return (
    <div className="App">
      <Formulario onTareaEnviada={handleTareaEnviada} />
      <Lista tareas={arrTareas} onTareaBorrada={handleTareaBorrada} />
    </div>
  );
}

export default App;
