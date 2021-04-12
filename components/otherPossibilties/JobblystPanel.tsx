import Lenkepanel from "nav-frontend-lenkepanel";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import React from "react";
import styled from "styled-components/macro";
import {SanityJobblystPanel} from "../../src/utils/sanityFetch";

const StyledJobblystPanel = styled(Lenkepanel)`
    margin-top: 1rem;
    margin-bottom: 4rem;
    border: 4px solid #9bd0b0;
    border-radius: 5px;
    transition: all 0.2s;

    .lenkepanel__heading {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    @media all and (min-width: 801px) {
        .lenkepanel__indikator {
            margin-bottom: 3rem;
        }

        padding: 3rem 1.5rem 0rem 3rem !important;
    }

    @media all and (max-width: 800px) {
        padding: 1rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    :hover {
        border: 4px solid #0067c5;

        h1,
        p {
            color: black;
            text-decoration-color: black;
        }
    }
`;

const Content = styled.div`
    @media all and (min-width: 801px) {
        align-self: center;
        padding-bottom: 3rem;
    }
`;

const JobblystImage = styled.img`
    @media all and (max-width: 800px) {
        display: none;
    }
    @media all and (min-width: 801px) {
        align-self: flex-end;
        width: 322px;
    }
`;

export const JobblystPanel = (props: SanityJobblystPanel) => {
    return (
        <StyledJobblystPanel
            href={props.href}
            tittelProps="normaltekst"
            border={false}
        >
            <Content>
                <Innholdstittel tag="h2">{props.title}</Innholdstittel>
                <Normaltekst>{props.description}</Normaltekst>
            </Content>
            <JobblystImage src={props.illustrationUrl} alt="" />
        </StyledJobblystPanel>
    );
};
