import { useEffect, useState } from "react";

const RickYMorty = () => {

    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            .then(response => response.json())
            .then(json => setPersonajes(json.results));
    }, [pagina]);

    return (
        <div>
            <div>
                <button onClick={() => setPagina(pagina - 1)}>
                    Anterior
                </button>
                <p>Página: {pagina}</p>
                <button onClick={() => setPagina(pagina + 1)}>
                    Siguiente
                </button>
            </div>
            <div className="personajes">
                {personajes.map(personaje => (
                    <div className="personaje" key={personaje.id}>
                        <h4>{personaje.name}</h4>
                        <p>{personaje.species}</p>
                        <p>{personaje.status}</p>
                        <img src={personaje.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default RickYMorty;