const Lista = ({ tareas, onTareaBorrada }) => {
    return (
        <div className="tareas">
            {tareas.map((tarea, index) => (
                <div className="tarea" key={index}>
                    <p>{index}</p>
                    <h4>{tarea.titulo}</h4>
                    <p>{tarea.texto}</p>
                    <p>{tarea.prioridad}</p>
                    <button onClick={() => onTareaBorrada(index)}>Borrar</button>
                </div>
            ))}
        </div>
    );
}

export default Lista;