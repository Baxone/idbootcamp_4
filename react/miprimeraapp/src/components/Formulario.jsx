import { useState } from "react";

const Formulario = () => {

    const [persona, setPersona] = useState({
        nombre: '',
        apellidos: '',
        edad: 0
    });

    const handleChange = (event, field) => {
        console.log(field, event.target.value);
    }

    return (
        <div className="formulario">
            <div>
                <label htmlFor="">Nombre</label>
                <input
                    type="text"
                    onChange={(event) => handleChange(event, 'nombre')}
                />
            </div>
            <div>
                <label htmlFor="">Apellidos</label>
                <input
                    type="text"
                    onChange={(event) => handleChange(event, 'apellidos')}
                />
            </div>
            <div>
                <label htmlFor="">Edad</label>
                <input
                    type="text"
                    onChange={(event) => handleChange(event, 'edad')}
                />
            </div>
            <button>Enviar</button>
        </div>
    );
}

export default Formulario;