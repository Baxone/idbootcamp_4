import { useState } from "react";

const Condicionales = () => {

    const [mostrar, setMostrar] = useState(true);

    const handleClick = () => {
        setMostrar(!mostrar);
    }

    let parrafo = null;
    if (mostrar) {
        parrafo = <p>Contenido del segundo párrafo</p>;
    }

    return <div>
        <button onClick={handleClick}>Mostrar / Ocultar</button>
        {!mostrar ? <p>La variable mostrar es TRUE</p> : null}
        {parrafo}
        {mostrar && <p>Contenido del tercer párrafo</p>}
        {mostrar &&
            <div>
                <p>Párrafo 1</p>
                <p>Párrafo 2</p>
                <p>Párrafo 3</p>
            </div>
        }
    </div>

}

// Botón que modifica una propiedad boolean llamada mostrar

export default Condicionales;