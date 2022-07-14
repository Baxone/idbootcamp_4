import styled from "styled-components";

const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({ page }) => {
        if (page === 'primera') return 'flex-end';
        else if (page === 'media') return 'space-between';
        else return 'flex-start';
    }};
`;

export default PaginationWrapper;