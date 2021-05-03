import React, {useState} from "react";
import styled from "styled-components/macro";
import {Hovedknapp, Knapp} from "nav-frontend-knapper";
import {Normaltekst} from "nav-frontend-typografi";
import {KommunerResponse} from "../../pages/api/kommuner";
import {NedetidResponse} from "../../pages/api/nedetid";
import AlertStripe from "nav-frontend-alertstriper";
import {NedChevron, OppChevron} from "nav-frontend-chevron";
import {UnmountClosed} from "react-collapse";
import {Kommunesøk} from "./Kommunesøk";
import {SanityApplyDigitallyPanel} from "../../src/utils/sanityFetch";
import {SanityBlockContent} from "../SanityBlockContentNext";

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

    return (
        <StyledSokDigitalt>
            {props.nedetid.isNedetid && (
                <AlertStripe type="feil" style={{textAlign: "left"}}>
                    Du kan ikke sende digital søknad i perioden{" "}
                    {props.nedetid.nedetidStartText} –{" "}
                    {props.nedetid.nedetidSluttText} grunnet teknisk
                    vedlikehold. Ta kontakt med ditt lokale NAV-kontor hvis du
                    skal søke om økonomisk sosialhjelp i denne perioden.
                </AlertStripe>
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
                    <Normaltekst>
                        <Knapp
                            mini
                            type="flat"
                            onClick={() => setLesMer(!lesMer)}
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
                        </Knapp>
                    </Normaltekst>
                </>
            )}
        </StyledSokDigitalt>
    );
};
