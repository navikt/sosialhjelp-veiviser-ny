import React, {useState} from "react";
import styled from "styled-components/macro";
import {Hovedknapp} from "nav-frontend-knapper";

import {useRouter} from "next/router";
import {Normaltekst} from "nav-frontend-typografi";
import {KommunerResponse} from "../../pages/api/kommuner";
import {NedetidResponse} from "../../pages/api/nedetid";
import AlertStripe from "nav-frontend-alertstriper";
import {NedChevron, OppChevron} from "nav-frontend-chevron";
import {UnmountClosed} from "react-collapse";
import {Kommunesøk} from "./Kommunesøk";
import {SanityApplyDigitallyPanel} from "../../src/utils/sanityFetch";
import {SanityBlockContent} from "../SanityBlockContentNext";

const StyledHovedknapp = styled(Hovedknapp)`
    margin-top: 1.5rem;
    margin-bottom: 2rem;
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

    const router = useRouter();

    const onButtonClick = (event) => {
        event.preventDefault();
        router.push("https://www.nav.no/sosialhjelp/soknad/informasjon");
    };

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
            <StyledHovedknapp
                disabled={props.nedetid.isNedetid}
                onClick={(event: any) => onButtonClick(event)}
            >
                {props.applyDigitallyPanel.buttonText}
            </StyledHovedknapp>
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
                        <a
                            href="#"
                            className="lenke"
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
                        </a>
                    </Normaltekst>
                </>
            )}
        </StyledSokDigitalt>
    );
};