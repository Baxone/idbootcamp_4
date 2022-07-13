import { useState } from 'react';

const Contador = () => {

    const [num, setNum] = useState(0);

    const handleClick = (incrementa) => {
        if (incrementa) {
            setNum(num + 1);
        } else {
            setNum(num - 1);
        }
    }

    return (
        <div>
            <p>{num}</p>

            <button onClick={() => handleClick(true)}>
                Incrementa
            </button>

            <button onClick={() => handleClick(false)}>
                Decrementa
            </button>

        </div>
    );
}

export default Contador;