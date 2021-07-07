import React, {useState} from "react";
import styled from "styled-components/macro";
import {Knapp} from "nav-frontend-knapper";

import {KommunerResponse} from "../../pages/api/kommuner";
import {NedetidResponse} from "../../pages/api/nedetid";
import {NedChevron, OppChevron} from "nav-frontend-chevron";
import {UnmountClosed} from "react-collapse";
import {Kommunesøk} from "./Kommunesøk";
import {SanityApplyDigitallyPanel} from "../../src/utils/sanityFetch";
import {SanityBlockContent} from "../SanityBlockContentNext";
import {buttonClickEvent, logAmplitudeEvent} from "../../src/utils/amplitude";
import {Alert} from "@navikt/ds-react";

export const getDisabledClassname = (erNedetid: boolean) => {
    return erNedetid ? "knapp--disabled" : "";
};

export const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    a {
        white-space: break-spaces;
    }
`;

const StyledInnsynknapp = styled.a`
    transform: translateY(-2px);
    margin-top: 1rem;
`;

const ToggleKommunesokButton = styled(Knapp)`
    white-space: normal;
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
                <a
                    href="https://www.nav.no/sosialhjelp/soknad/informasjon"
                    className={`knapp knapp--hoved ${getDisabledClassname(
                        props.nedetid.isNedetid
                    )}`}
                >
                    {props.applyDigitallyPanel.buttonText}
                </a>
                <StyledInnsynknapp
                    href="https://www.nav.no/sosialhjelp/innsyn"
                    className={`knapp ${getDisabledClassname(
                        props.nedetid.isNedetid
                    )}`}
                >
                    {props.applyDigitallyPanel.innsynButtonText}
                </StyledInnsynknapp>
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
                        mini
                        type="flat"
                        onClick={() => toggleKommunesok(!lesMer)}
                    >
                        {lesMer ? (
                            <>
                                {props.applyDigitallyPanel.closePanelLink}{" "}
                                <OppChevron />
                            </>
                        ) : (
                            <>
                                {props.applyDigitallyPanel.openPanelLink}{" "}
                                <NedChevron />
                            </>
                        )}
                    </ToggleKommunesokButton>
                </>
            )}
        </StyledSokDigitalt>
    );
};
