const persona = {
    nombre: 'Mario',
    apellidos: 'Girón'
}

function nombreCompleto(pers) {
    return pers.nombre + ' ' + pers.apellidos;
}

function saludar(pers) {
    if (pers) {
        return <h1 className="cabecera">Hola {nombreCompleto(pers)}</h1>;
    } else {
        return <h1 style={{
            backgroundColor: 'red',
            color: 'white'
        }}>No hay persona</h1>;
    }
}

const element = saludar();
// Comentarios normales
const ele = <div>
    <div>
        <p className="parrafo">Hola React!</p>
    </div>
    {/* Comentarios */}
    <div>
        <p>Segundo párrafo</p>
    </div>
</div>;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(ele);





// const elem = React.createElement('div',
//     React.createElement('p', { className: 'parrafo' }, 'Hola React!')
// );