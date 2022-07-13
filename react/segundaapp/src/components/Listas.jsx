import SERIES from '../data/series';

const Listas = () => {

    const arr = [];
    for (let serie of SERIES) {
        arr.push(<div>
            <h3>{serie.titulo}</h3>
            <p>{serie.creador}</p>
            <img src={serie.imagen} alt="" />
        </div>);
    }

    // return <div>
    //     {arr}
    // </div>;

    return <div className="series">
        {SERIES.map(serie => {
            return <div key={serie.id} className="serie">
                <h3>{serie.titulo}</h3>
                <p>{serie.creador}</p>
                <img src={serie.imagen} alt="" />
            </div>
        })}
    </div>
}

export default Listas;