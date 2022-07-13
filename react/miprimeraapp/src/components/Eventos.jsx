import { useState } from "react";

const Eventos = () => {

    const [mensaje, setMensaje] = useState('');
    const [cont, setCont] = useState(0);

    const handleChange = (event) => {
        setMensaje(event.target.value);
    }

    const handleClick = () => {
        setCont(cont + 1);
    }

    return (
        <div>
            <p>Mensaje: {mensaje}</p>
            <p>Contador: {cont}</p>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Incrementa</button>
        </div>
    );
}

export default Eventos;

// Botón dentro del JSX que incremente en uno el cont