import styled, { css } from "styled-components";

const CustomButton = styled.button`
    background-color: indigo;
    border: 1px solid black;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    ${({ theme }) => (theme === 'light') && css`
                background-color: lightblue;
                color: black;`
    };
    &:hover{
        border-color: red;
        opacity: 0.9;
    }
`;

export default CustomButton;