import {Panel, Heading, Ingress, Button} from "@navikt/ds-react";
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
            <Heading level="2" size="medium" spacing>
                {props.title}
            </Heading>
            <DescriptionText spacing>{props.description}</DescriptionText>
            <ButtonRow>
                <Link href="/slik-soker-du" passHref>
                    <Button as="a" variant="primary">
                        {props.nySoknadButtonText}
                    </Button>
                </Link>
                <Button
                    as="a"
                    variant="secondary"
                    href="https://www.nav.no/sosialhjelp/innsyn"
                >
                    {props.innsynButtonText}
                </Button>
            </ButtonRow>
            <StyledIllustrasjonsGruppe>
                <img alt="" src={props.illustrationUrl} />
            </StyledIllustrasjonsGruppe>
        </StyledPanel>
    );
};
