import React, {useState} from "react";
import styled from "styled-components";

import {KommunerResponse} from "../../pages/api/kommuner";
import {NedetidResponse} from "../../pages/api/nedetid";
import {UnmountClosed} from "react-collapse";
import {Kommunesøk} from "./Kommunesøk";
import {SanityApplyDigitallyPanel} from "../../src/utils/sanityFetch";
import {SanityBlockContent} from "../SanityBlockContentNext";
import {buttonClickEvent, logAmplitudeEvent} from "../../src/utils/amplitude";
import {Alert, Button} from "@navikt/ds-react";
import {CollapseFilled, ExpandFilled} from "@navikt/ds-icons";

export const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: 1rem;
    a {
        white-space: break-spaces;
    }
`;

const ToggleKommunesokButton = styled(Button)`
    display: inline-flex;
    gap: 0.25rem;
    align-items: center;
    white-space: normal;
    @media (max-width: 448px) {
        flex-direction: column;
    }
`;

export const StyledSokDigitalt = styled.div`
    text-align: center;
    display: block;
`;

export const SokDigitalt = (props: {
    nedetid: NedetidResponse;
    kommuner: KommunerResponse;
    applyDigitallyPanel: SanityApplyDigitallyPanel;
}) => {
    const [lesMer, setLesMer] = useState(false);

    const toggleKommunesok = (newToggleValue: boolean) => {
        if (newToggleValue)
            logAmplitudeEvent(
                "Klikk på knapp",
                buttonClickEvent("Sjekk om du kan søke digitalt i din kommune")
            );
        setLesMer(newToggleValue);
    };

    return (
        <StyledSokDigitalt>
            {props.nedetid.isNedetid && (
                <Alert variant="error" style={{textAlign: "left"}}>
                    Du kan ikke sende digital søknad i perioden{" "}
                    {props.nedetid.nedetidStartText} –{" "}
                    {props.nedetid.nedetidSluttText} grunnet teknisk
                    vedlikehold. Ta kontakt med ditt lokale NAV-kontor hvis du
                    skal søke om økonomisk sosialhjelp i denne perioden.
                </Alert>
            )}
            <ButtonRow>
                <Button
                    as="a"
                    variant="primary"
                    href="https://www.nav.no/sosialhjelp/soknad/informasjon"
                    disabled={props.nedetid.isNedetid}
                >
                    {props.applyDigitallyPanel.buttonText}
                </Button>
                <Button
                    as="a"
                    variant="secondary"
                    disabled={props.nedetid.isNedetid}
                    href="https://www.nav.no/sosialhjelp/innsyn"
                >
                    {props.applyDigitallyPanel.innsynButtonText}
                </Button>
            </ButtonRow>
            <SanityBlockContent
                blocks={props.applyDigitallyPanel.body}
                templateProps={{
                    antallKommuner: props.kommuner.antallAktivertSoknad,
                    totaltAntallKommuner: props.kommuner.totaltAntall,
                }}
            />

            {!props.nedetid.isNedetid && (
                <>
                    <UnmountClosed isOpened={lesMer}>
                        <Kommunesøk
                            applyDigitallyPanel={props.applyDigitallyPanel}
                            kommuner={props.kommuner}
                        />
                    </UnmountClosed>
                    <ToggleKommunesokButton
                        variant="tertiary"
                        onClick={() => toggleKommunesok(!lesMer)}
                    >
                        {lesMer ? (
                            <>
                                {props.applyDigitallyPanel.closePanelLink}{" "}
                                <CollapseFilled />
                            </>
                        ) : (
                            <>
                                {props.applyDigitallyPanel.openPanelLink}{" "}
                                <ExpandFilled />
                            </>
                        )}
                    </ToggleKommunesokButton>
                </>
            )}
        </StyledSokDigitalt>
    );
};
