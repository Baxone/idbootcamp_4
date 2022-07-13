import { useState } from "react";

const Formulario = () => {

    const [persona, setPersona] = useState({
        nombre: '',
        apellidos: '',
        edad: 0
    });

    // const handleChange = (event, field) => {
    //     console.log(field, event.target.value);
    //     // Copio el objeto persona
    //     const personaCopia = { ...persona };
    //     // Modifico el objeto
    //     personaCopia[field] = event.target.value;
    //     // Asigno la copia como valor de persona
    //     setPersona(personaCopia);
    // }

    const handleChange = (event, field) => {
        setPersona({
            ...persona,
            [field]: event.target.value
        });
    }

    return (
        <div className="formulario">
            <div>
                <p>Nombre: {persona.nombre}</p>
                <p>Apellidos: {persona.apellidos}</p>
                <p>Edad: {persona.edad}</p>
            </div>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    onChange={(event) => handleChange(event, 'nombre')}
                />
            </div>
            <div>
                <label>Apellidos</label>
                <input
                    type="text"
                    onChange={(event) => handleChange(event, 'apellidos')}
                />
            </div>
            <div>
                <label>Edad</label>
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