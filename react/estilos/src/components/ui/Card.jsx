import styled from "styled-components";

const StyledDiv = styled.div`
    width: 200px;
    border: 1px solid black;
    border-radius: 10px;
`;

const Card = ({ nombre, apellidos, email }) => {
    return <StyledDiv>
        <p>Nombre: {nombre}</p>
        <p>Apellidos: {apellidos}</p>
        <p>Email: {email}</p>
    </StyledDiv>
}

export default Card;