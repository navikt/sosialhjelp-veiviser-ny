import * as React from "react";
import styled from "styled-components/macro";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenkepanel from "nav-frontend-lenkepanel/lib";

const JobblystPanel = styled(Lenkepanel)`
    margin-top: 1rem;
    margin-bottom: 4rem;
    min-height: 10rem;
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

        padding: 3rem 1.5rem 0rem 3rem;
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

export const JobblystBokmalPanel = () => {
    return (
        <JobblystPanel
            href="https://www.facebook.com/navjobblyst/"
            tittelProps="normaltekst"
            border={false}
        >
            <Content>
                <Innholdstittel tag="h2">Jobblyst</Innholdstittel>
                <Normaltekst>
                    Råd og veiledning for deg som er ung og har spørsmål
                </Normaltekst>
            </Content>
            <JobblystImage src="img/JobblystS.png" alt="" />
        </JobblystPanel>
    );
};

export const JobblystNynorskPanel = () => (
    <JobblystPanel
        href="https://www.facebook.com/navjobblyst/"
        tittelProps="normaltekst"
        border={false}
    >
        <Content>
            <Innholdstittel tag="h2">Jobblyst</Innholdstittel>
            <Normaltekst>
                Råd og rettleiing for deg som er ung og har spørsmål
            </Normaltekst>
        </Content>
        <JobblystImage src="img/JobblystS.png" alt="" />
    </JobblystPanel>
);

export const JobblystEnglishPanel = () => (
    <JobblystPanel
        href="https://www.facebook.com/navjobblyst/"
        tittelProps="normaltekst"
        border={false}
    >
        <Content>
            <Innholdstittel tag="h2">Jobblyst</Innholdstittel>
            <Normaltekst>Advice and guidance for young people</Normaltekst>
        </Content>
        <JobblystImage src="img/JobblystS.png" alt="" />
    </JobblystPanel>
);
