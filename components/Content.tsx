import styled from "styled-components/macro";

export const Content = styled.div`
    max-width: 49.5rem;
    margin-left: auto;
    margin-right: auto;

    @media all and (max-width: 803px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    @media all and (min-width: 804px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
