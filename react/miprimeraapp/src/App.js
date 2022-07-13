import './App.css';
import Contador from './components/Contador';
import Despedida from './components/Despedida';
import Eventos from './components/Eventos';
import Formulario from './components/Formulario';
import Saludo from './components/Saludo';
import Sumar from './components/Sumar';

function App() {

  const handleSuma = (resultado) => {
    console.log(`Resultado en App: ${resultado}`);
  }

  return (
    <div className="App">
      <h1>Mi primera App</h1>
      {/* <Saludo nombre="Mario"></Saludo>
      <hr />
      <Despedida nombre="Luis" />
      <hr />
      <Contador />
      <hr />
      <Eventos />
      <Sumar num1={3} num2={4} onSumaTerminada={handleSuma} /> */}
      <Formulario />
    </div>
  );

  // Saludo({ nombre: 'Mario' });
}

export default App;
