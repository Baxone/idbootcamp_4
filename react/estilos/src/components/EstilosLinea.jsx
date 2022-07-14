import { useState } from "react";

const EstilosLinea = () => {

    const [estilosParrafo, setEstilosParrafo] = useState({
        backgroundColor: 'dodgerblue',
        color: 'white',
        border: '1px solid black',
        fontSize: '12px'
    });

    const cambiaColorFondo = (color) => {
        setEstilosParrafo({
            ...estilosParrafo,
            backgroundColor: color
        });
    }

    // Campo de texto, el valor que escribo en el campo de texto debe ser el color de la fuente
    // Campo de tipo range. El valor que devuelva dicho campo lo asignamos al tamaño de la fuente (font-size)

    const cambiaColorTexto = (event) => {
        setEstilosParrafo({
            ...estilosParrafo,
            color: event.target.value
        })
    }

    const cambiaFontSize = (event) => {
        setEstilosParrafo({
            ...estilosParrafo,
            fontSize: `${event.target.value}px`
        })
    }

    return <div>
        <div>
            <button onClick={() => cambiaColorFondo('red')}>Rojo</button>
            <button onClick={() => cambiaColorFondo('green')}>Verde</button>
            <button onClick={() => cambiaColorFondo('blue')}>Azul</button>
        </div>
        <div>
            <input type="text" onChange={cambiaColorTexto} />
        </div>
        <div>
            <input type="range" onChange={cambiaFontSize} min="10" max="120" step="10" defaultValue={estilosParrafo.fontSize} />
        </div>
        <p style={estilosParrafo}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quaerat!
        </p>
    </div>;
}

export default EstilosLinea;