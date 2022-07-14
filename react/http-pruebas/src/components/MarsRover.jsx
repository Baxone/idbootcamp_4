import { useEffect, useState } from "react";

const MarsRover = () => {

    const [fotos, setFotos] = useState([]);

    // TODO: aync await
    // useEffect(() => {
    //     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3466&api_key=GTmH6gE4eG2Vo0jauhVwxkqgWT4xQYJ0dNTWdnSW')
    //         .then(response => response.json())
    //         .then(json => setFotos(json.photos));
    // }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3466&api_key=GTmH6gE4eG2Vo0jauhVwxkqgWT4xQYJ0dNTWdnSW');
            const json = await response.json();
            setFotos(json.photos);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Fotos de Marte</h2>
            <div className="fotos">
                {fotos.map(foto => (
                    <div className="foto" key={foto.id}>
                        <p>{foto.camera.full_name}</p>
                        <img src={foto.img_src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default MarsRover;