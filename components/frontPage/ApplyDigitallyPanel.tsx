import {Panel, Title, Ingress} from "@navikt/ds-react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import IllustrasjonsGruppe from "./IllustrasjonsGruppe";

const StyledPanel = styled(Panel)`
    padding: 2rem;
    position: relative;

    @media (max-width: 648px) {
        padding: 1rem;
    }
`;

const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 448px) {
        flex-direction: column;
        gap: 0.75rem;
    }
`;

const DescriptionText = styled(Ingress)`
    max-width: 90ch;
`;

const NySoknadKnapp = styled.a`
    margin-right: 1.5rem;

    @media (max-width: 448px) {
        margin-right: 0;
    }
`;

const DineSoknaderKnapp = styled.a`
    margin-bottom: 2px;
`;

const StyledIllustrasjonsGruppe = styled.div`
    position: absolute;
    right: 2rem;
    bottom: 0;
    margin-bottom: -6px;

    @media (max-width: 960px) {
        display: none;
    }
`;

export const ApplyDigitallyPanel = ({...props}) => {
    return (
        <StyledPanel>
            <Title level={2} size="m" spacing>
                {props.title}
            </Title>
            <DescriptionText spacing>{props.description}</DescriptionText>
            <ButtonRow>
                <Link href="/slik-soker-du" passHref>
                    <NySoknadKnapp className="navds-button navds-button--action navds-body-short">
                        {props.nySoknadButtonText}
                    </NySoknadKnapp>
                </Link>
                <DineSoknaderKnapp
                    className="navds-button navds-button--primary navds-body-short"
                    href="https://www.nav.no/sosialhjelp/innsyn"
                >
                    {props.innsynButtonText}
                </DineSoknaderKnapp>
            </ButtonRow>
            <StyledIllustrasjonsGruppe>
                <img alt="" src={props.illustrationUrl} />
            </StyledIllustrasjonsGruppe>
        </StyledPanel>
    );
};
