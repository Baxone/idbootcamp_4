import styled from "styled-components";

const FlexWrap = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: center;
    align-items: center;
`;

export default FlexWrap;