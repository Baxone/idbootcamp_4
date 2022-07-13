import React from 'react';

class Despedida extends React.Component {

    componentDidMount() {

    }

    render() {
        return <h2>Adios {this.props.nombre}</h2>;
    }
}

export default Despedida;