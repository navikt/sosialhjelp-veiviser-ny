import styled from "styled-components/macro";

export const LenkeboksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    @media all and (min-width: 601px) {
        flex-direction: row;
    }

    @media all and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;
