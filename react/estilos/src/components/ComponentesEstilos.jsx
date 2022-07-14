import Card from "./ui/Card";
import CustomButton from "./ui/CustomButton";
import FlexWrap from "./ui/FlexWrap";
import PaginationWrapper from "./ui/PaginationWrapper";

// const CustomButton = styled.button`
//     background-color: ${({ theme }) => theme === 'dark' ? 'indigo' : 'lightblue'};
//     border: 1px solid black;
//     color: ${({ theme }) => theme === 'dark' ? 'white' : 'black'};
//     padding: 10px 20px;
//     cursor: pointer;
// `;

// const CustomButton = styled.button`
//     background-color: indigo;
//     border: 1px solid black;
//     color: white;
//     padding: 10px 20px;
//     cursor: pointer;
//     ${({ theme }) => {
//         if (theme === 'light') {
//             return css`
//                 background-color: lightblue;
//                 color: black;
//             `
//         }
//     }}
// `;



// <FlexWrap direction="row | column">
//       <p></p>
// </FlexWrap >
// Es un div que tiene como estilos por defecto una configuración flex. 
// La dirección de flex la determina el atributo direction


const ComponentesEstilos = () => {

    return <div>
        <FlexWrap direction="column">
            <CustomButton theme="dark">
                Pulsa!!!
            </CustomButton>
            <CustomButton theme="light">
                Otra vez!!!
            </CustomButton>
        </FlexWrap>
        <PaginationWrapper page="ultima">
            <CustomButton>Anterior</CustomButton>
            <CustomButton>Siguiente</CustomButton>
        </PaginationWrapper>
        <Card
            nombre="Mario"
            apellidos="Girón Martín"
            email="mario@gmail.com">
        </Card>
    </div>;
}

export default ComponentesEstilos;

/* 
<PaginationWrapper page="primera|media|ultima">
    <CustomButton>Anterior</CustomButton>
    <CustomButton>Siguiente</CustomButton>
</PaginationWrapper>

Si el valor es primera los elementos deben aparecer a la derecha
Si el valor es media, los botones deben aparecer cada uno a un lado
Si el valor es ultima los elementos deben aparecer a la izquierda

<Card nombre="Mario" apellidos="Girón Martín" email="mario@gmail.com"></Card>

*/
