import { useEffect, useState } from "react";

const MarsRover = () => {

    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3466&api_key=GTmH6gE4eG2Vo0jauhVwxkqgWT4xQYJ0dNTWdnSW')
            .then(response => response.json())
            .then(json => setFotos(json.photos));
    }, []);

    return <div>
        <h2>Fotos de Marte</h2>

    </div>

}

export default MarsRover;