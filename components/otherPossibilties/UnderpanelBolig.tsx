import styled from "styled-components";

export const UnderpanelBolig = styled.div`
    @media all and (min-width: 601px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: initial;
        margin-top: 0.25rem;

        .navds-link-panel:nth-child(1) {
            margin-right: 0.25rem;
        }
        .navds-link-panel:nth-child(2) {
            margin-right: 0.25rem;
        }

        .navds-link-panel {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 100%;
        }
    }

    @media all and (max-width: 600px) {
        .navds-link-panel {
            margin: 0.25rem 0 0 0;

            p {
                display: none;
            }
        }

        .navds-link-panel:nth-child(3) {
            margin-bottom: 1rem;
        }
    }
`;
