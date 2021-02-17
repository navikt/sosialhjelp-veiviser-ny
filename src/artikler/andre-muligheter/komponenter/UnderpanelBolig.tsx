import styled from "styled-components";

export const UnderpanelBolig = styled.div`
    @media all and (min-width: 601px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: initial;
        margin-top: 4px;

        .lenkepanel:nth-child(1) {
            margin-right: 4px;
        }
        .lenkepanel:nth-child(2) {
            margin-right: 4px;
        }

        .lenkepanel {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 100%;

            .lenkepanel__indikator {
                margin-top: 1rem;
            }
        }
    }

    @media all and (max-width: 600px) {
        .lenkepanel {
            width: 100%;
            margin: 4px 0 0 0;

            p {
                display: none;
            }
        }

        .lenkepanel:nth-child(3) {
            margin-bottom: 1rem;
        }
    }
`;
