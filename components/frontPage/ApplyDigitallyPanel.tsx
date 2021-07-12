import {Panel, Title, Ingress} from "@navikt/ds-react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

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
    gap: 0.75rem;

    @media (max-width: 448px) {
        flex-direction: column;
        
    }
`;

const DescriptionText = styled(Ingress)`
    max-width: 90ch;
`;

const LinkButton = styled.a`
box-sizing: border-box; 
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
                    <LinkButton className="navds-button navds-button--action navds-body-short">
                        {props.nySoknadButtonText}
                    </LinkButton>
                </Link>
                <LinkButton
                    className="navds-button navds-button--primary navds-body-short"
                    href="https://www.nav.no/sosialhjelp/innsyn"
                >
                    {props.innsynButtonText}
                </LinkButton>
            </ButtonRow>
            <StyledIllustrasjonsGruppe>
                <img alt="" src={props.illustrationUrl} />
            </StyledIllustrasjonsGruppe>
        </StyledPanel>
    );
};
