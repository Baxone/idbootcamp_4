import { useState } from "react";

const Formulario = ({ onTareaEnviada }) => {

    const [tarea, setTarea] = useState({
        titulo: '',
        texto: '',
        prioridad: ''
    });

    const handleChange = (event, field) => {
        setTarea({
            ...tarea,
            [field]: event.target.value
        });
    }

    return (
        <div className="formulario">
            <div>
                <label>Título</label>
                <input type="text" onChange={(event) => handleChange(event, 'titulo')} />
            </div>
            <div>
                <label>Texto</label>
                <input type="text" onChange={(event) => handleChange(event, 'texto')} />
            </div>
            <div>
                <label>Prioridad</label>
                <select onChange={(event) => handleChange(event, 'prioridad')}>
                    <option value=""></option>
                    <option value="urgente">Urgente</option>
                    <option value="diaria">Diaria</option>
                    <option value="mensual">Mensual</option>
                </select>
            </div>
            <button onClick={() => onTareaEnviada(tarea)}>Enviar</button>
        </div>
    );

}

export default Formulario;