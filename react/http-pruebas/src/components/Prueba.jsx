import { useEffect, useState } from "react"

const Prueba = () => {
    const [cont, setCont] = useState(0);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        console.log('Se lanza useEffect [mensaje]');
    }, [mensaje])

    useEffect(() => {
        console.log('Se lanza useEffect [cont]');
    }, [cont])

    return <div>
        <p>Contador: {cont}</p>
        <p>Mensaje: {mensaje}</p>
        <input type="text" onChange={(event) => setMensaje(event.target.value)} />
        <button onClick={() => setCont(cont + 1)}>Pulsa!!</button>
    </div>
}

export default Prueba;