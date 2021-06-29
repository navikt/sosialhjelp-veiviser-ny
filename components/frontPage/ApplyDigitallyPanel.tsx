import {BodyShort, Panel, Title} from "@navikt/ds-react";
import {Label} from "nav-frontend-skjema";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledPanel = styled(Panel)`
    padding: 1.25rem;
`;

const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const DescriptionText = styled(BodyShort)`
    max-width: 90ch;
`;

const NySoknadKnapp = styled.a`
    margin-right: 1.5rem;
`;

const DineSoknaderKnapp = styled.a`
    margin-bottom: 2px;
`;

export const ApplyDigitallyPanel = () => {
    return (
        <StyledPanel>
            <Title level={2} size="m" spacing>
                Søk om økonomisk sosialhjelp
            </Title>
            <DescriptionText spacing>
                Du kan søke om flere ting under økonomisk sosialhjelp, men det
                er kun ett søknadsskjema og du beskriver selv hva du vil søke
                om. Har du sendt en søknad og ønsker å ettersende dokumentasjon,
                kan du gjøre dette under Dine søknader
            </DescriptionText>
            <ButtonRow>
                <Link href="/slik-soker-du" passHref>
                    <NySoknadKnapp className="navds-button navds-button--action navds-button--m navds-body-short">
                        Ny søknad
                    </NySoknadKnapp>
                </Link>
                <DineSoknaderKnapp
                    className="navds-button navds-button--primary navds-button--m navds-body-short"
                    href="https://www.nav.no/sosialhjelp/innsyn"
                >
                    Dine søknader
                </DineSoknaderKnapp>
            </ButtonRow>
        </StyledPanel>
    );
};
