import { useState } from "react";

const Sumar = ({ num1, num2, onSumaTerminada }) => {

    const [resultado, setResultado] = useState(0);

    const handleClick = () => {
        setResultado(num1 + num2);
        onSumaTerminada(num1 + num2);
    }

    return <div>
        <p>{num1} + {num2}</p>
        <button onClick={handleClick}>Suma</button>
        <p>{resultado}</p>
    </div>

}

export default Sumar;