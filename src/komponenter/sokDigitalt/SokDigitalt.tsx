import AlertStripe from "nav-frontend-alertstriper";
import {Hovedknapp} from "nav-frontend-knapper";
import Lenke from "nav-frontend-lenker";
import {Normaltekst} from "nav-frontend-typografi";
import React, {useState} from "react";
import {UnmountClosed} from "react-collapse";
import useNedetidService from "../../artikler/sok-sosialhjelp/komponenter/kommunesok/service/useNedetidService";
import useKommuneNrService from "../../artikler/sok-sosialhjelp/komponenter/kommunesok/service/useKommuneNrService";
import useTilgjengeligeKommunerService, {
    antallKommuner,
} from "../../artikler/sok-sosialhjelp/komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import {REST_STATUS} from "../../utils/restUtils";
import {gaaTilDigitalSoknad} from "../../utils/navigasjon";
import {Avsnitt} from "../avsnitt/Avsnitt";
import {InternLenke} from "../InternLenke";
import AapneLukkeLenke from "../../artikler/sok-sosialhjelp/komponenter/aapneLukkeLenke/AapneLukkeLenke";
import KommuneSok from "../../artikler/sok-sosialhjelp/komponenter/kommunesok/Kommunesok";
import {ANTALL_KOMMUNER} from "../../artikler/sok-sosialhjelp/SokSosialhjelp";
import styled from "styled-components/macro";
import {detekterSprak} from "../../utils/sprakUtils";

const StyledSokDigitalt = styled.div`
    text-align: center;
    display: block;

    .sok_knapp {
        display: block;
        text-align: center;
        margin-top: 2rem;
    }

    h2.typo-undertittel {
        margin-top: 0;
        margin-bottom: 2rem;
    }

    h2.sok_digitalt_overskrift {
        margin-bottom: 0.5rem;
    }
`;

const tekster = {
    nb: {
        AlertStripe: {
            tekst1: "Du kan ikke sende digital søknad i perioden",
            tekst2:
                "grunnet teknisk vedlikehold. Ta kontakt med ditt lokale NAV-kontor hvis du skal søke om økonomisk sosialhjelp i denne perioden.",
        },
        Hovedknapp: {
            tekst: "Søk digitalt",
        },
        Avsnitt: {
            tekst1:
                "Digital søknad om økonomisk sosialhjelp skal innen kort tid være tilgjengelig for hele landet.",
            tekst2: "Foreløpig kan",
            tekst3: `av ${ANTALL_KOMMUNER} kommuner`,
            tekst4: "ta imot digital søknad.",
        },
        KommuneSok: {
            ledetekst: "Sjekk om du kan søke digitalt i din kommune",
            soknadOgInnsynTilgjengeligTekst: {
                tekst1: "Du kan søke digitalt i",
                tekst2: "Du kan også følge",
                lenketekst: "statusen på søknaden",
                tekst3: "din på nav.no",
            },
            soknadTilgjengeligUtenInnsynTekst: {
                tekst1: "Du kan søke digitalt i",
                tekst2: "Snart kan du også følge",
                lenketekst: "statusen på søknaden",
                tekst3: "din på nav.no",
            },
            soknadIkkeTilgjengeligTekst: {
                tekst1: "Du kan dessverre ikke søke digitalt i",
                tekst2: "ennå. Du kan",
                lenketekst: "søke på papirskjema",
            },
            placeholderTekst: "Skriv kommunenavn",
            ariaLabel: "Søk etter kommunenavn",
        },
        AapneLukkeLenke: {
            aapneTekst: "Sjekk om du kan søke digitalt i din kommune",
            lukkeTekst: "Lukk",
        },
    },
    nn: {
        AlertStripe: {
            tekst1: "Du kan ikkje sende digital søknad i perioden",
            tekst2:
                "grunna teknisk vedlikehald. Ta kontakt med ditt lokale NAV-kontor viss du skal søkje om økonomisk sosialhjelp i denne perioden.",
        },
        Avsnitt: {
            tekst1:
                "Digital søknad om økonomisk sosialhjelp vil snart vere tilgjengeleg for heile landet.",
            tekst2: "Førebels kan",
            tekst3: `av ${ANTALL_KOMMUNER} kommunar`,
            tekst4: "ta imot digital søknad.",
        },
        Hovedknapp: {
            tekst: "Søk digitalt",
        },
        KommuneSok: {
            ledetekst: "Sjekk om du kan søkje digitalt i din kommune",
            soknadOgInnsynTilgjengeligTekst: {
                tekst1: "Du kan søkje digitalt i",
                tekst2: "Du kan også følge",
                lenketekst: "statusen på søknaden",
                tekst3: "din på nav.no",
            },
            soknadTilgjengeligUtenInnsynTekst: {
                tekst1: "Du kan søkje digitalt i",
                tekst2: "Snart kan du også følge",
                lenketekst: "statusen på søknaden",
                tekst3: "din på nav.no",
            },
            soknadIkkeTilgjengeligTekst: {
                tekst1: "Du kan dessverre ikke søkje digitalt i",
                tekst2: "enno. Du kan",
                lenketekst: "søkje på papirskjema",
            },
            placeholderTekst: "Skriv kommunenavn",
            ariaLabel: "Søk etter kommunenavn",
        },
        AapneLukkeLenke: {
            aapneTekst: "Sjekk om du kan søke digitalt i din kommune",
            lukkeTekst: "Lukk",
        },
    },
    en: {
        AlertStripe: {
            tekst1: "You cannot send digital application during",
            tekst2:
                "due to technical maintenance. Contact your local NAV office if you want to apply for social assistance during this period.",
        },
        Avsnitt: {
            tekst1:
                "All municipalities should be able to receive digital applications shortly.",
            tekst2: "At the moment",
            tekst3: `out of ${ANTALL_KOMMUNER} municipalities`,
            tekst4: "can receive applications digitally.",
        },
        Hovedknapp: {
            tekst: "Apply digitally",
        },
        KommuneSok: {
            ledetekst: "Check if you can apply digitally in your municipality",
            soknadOgInnsynTilgjengeligTekst: {
                tekst1: "You can apply digitally in",
                tekst2: "You can also follow the",
                lenketekst: "status of your application",
                tekst3: "online",
            },
            soknadTilgjengeligUtenInnsynTekst: {
                tekst1: "You can apply digitally in",
                tekst2: "Soon you will also be able to follow the",
                lenketekst: "status of your application",
                tekst3: "online",
            },
            soknadIkkeTilgjengeligTekst: {
                tekst1: "",
                tekst2:
                    "is unfortunately not yet able to accept digital applications. You can apply using the",
                lenketekst: "municipality's own paper form",
            },
            placeholderTekst: "Enter municipality name",
            ariaLabel: "Search for municipality",
        },
        AapneLukkeLenke: {
            aapneTekst:
                "Check if your municipality support digital applications",
            lukkeTekst: "Close",
        },
    },
};

export const SokDigitalt = () => {
    const nedetidService = useNedetidService();
    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();
    const kommuneNrService = useKommuneNrService();

    const [lesMer, setLesMer] = useState<boolean>(false);
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const [valgtKommuneNavn, setValgtKommuneNavn] = useState("");

    const lang = detekterSprak();

    let antallTilgjengeligKommuner: string = "";
    if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
        antallTilgjengeligKommuner = antallKommuner(
            tilgjengeligeKommunerService.payload.results
        );
    }

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    return (
        <StyledSokDigitalt>
            {nedetidService.restStatus === REST_STATUS.OK &&
                nedetidService.payload.isNedetid && (
                    <AlertStripe type="feil" style={{textAlign: "left"}}>
                        {tekster[lang].AlertStripe.tekst1}{" "}
                        {nedetidService.payload.nedetidStartText} –{" "}
                        {nedetidService.payload.nedetidSluttText}{" "}
                        {tekster[lang].AlertStripe.tekst2}
                    </AlertStripe>
                )}

            <Hovedknapp
                style={{marginTop: "1.5rem", marginBottom: "2rem"}}
                disabled={
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                }
                onClick={(event: any) => sokDigital(event)}
            >
                {tekster[lang].Hovedknapp.tekst}
            </Hovedknapp>

            <Avsnitt>
                {tekster[lang].Avsnitt.tekst1}{" "}
                {tilgjengeligeKommunerService.restStatus === REST_STATUS.OK && (
                    <>
                        {tekster[lang].Avsnitt.tekst2}{" "}
                        <b>
                            {antallTilgjengeligKommuner}{" "}
                            {tekster[lang].Avsnitt.tekst3}
                        </b>{" "}
                        {tekster[lang].Avsnitt.tekst4}
                    </>
                )}
            </Avsnitt>
            {!(
                nedetidService.restStatus === REST_STATUS.OK &&
                nedetidService.payload.isNedetid
            ) && (
                <>
                    <UnmountClosed isOpened={lesMer}>
                        <KommuneSok
                            ledetekst={tekster[lang].KommuneSok.ledetekst}
                            soknadOgInnsynTilgjengeligTekst={
                                <>
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadOgInnsynTilgjengeligTekst
                                            .tekst1
                                    }{" "}
                                    {valgtKommuneNavn}.{" "}
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadOgInnsynTilgjengeligTekst
                                            .tekst2
                                    }{" "}
                                    <Lenke href="https://www.nav.no/sosialhjelp/innsyn">
                                        {
                                            tekster[lang].KommuneSok
                                                .soknadOgInnsynTilgjengeligTekst
                                                .lenketekst
                                        }
                                    </Lenke>{" "}
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadOgInnsynTilgjengeligTekst
                                            .tekst3
                                    }
                                </>
                            }
                            soknadTilgjengeligUtenInnsynTekst={
                                <>
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadTilgjengeligUtenInnsynTekst
                                            .tekst1
                                    }{" "}
                                    {valgtKommuneNavn}.{" "}
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadTilgjengeligUtenInnsynTekst
                                            .tekst2
                                    }{" "}
                                    <InternLenke
                                        href={`./status-soknad?lang=${lang}`}
                                    >
                                        {
                                            tekster[lang].KommuneSok
                                                .soknadTilgjengeligUtenInnsynTekst
                                                .lenketekst
                                        }
                                    </InternLenke>{" "}
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadTilgjengeligUtenInnsynTekst
                                            .tekst3
                                    }
                                </>
                            }
                            soknadIkkeTilgjengeligTekst={
                                <>
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadIkkeTilgjengeligTekst.tekst1
                                    }{" "}
                                    {valgtKommuneNavn}{" "}
                                    {
                                        tekster[lang].KommuneSok
                                            .soknadIkkeTilgjengeligTekst.tekst2
                                    }{" "}
                                    <Lenke href={`./sok-papir?lang=${lang}`}>
                                        {
                                            tekster[lang].KommuneSok
                                                .soknadIkkeTilgjengeligTekst
                                                .lenketekst
                                        }
                                    </Lenke>
                                    .
                                </>
                            }
                            placeholderTekst={
                                tekster[lang].KommuneSok.placeholderTekst
                            }
                            ariaLabel={tekster[lang].KommuneSok.ariaLabel}
                            tilgjengeligeKommunerService={
                                tilgjengeligeKommunerService
                            }
                            kommuneNrService={kommuneNrService}
                            onValgtKommune={(kommuneId: string | undefined) =>
                                setKommuneId(kommuneId)
                            }
                            setValgtKommuneNavn={(kommuneNavn: string) =>
                                setValgtKommuneNavn(kommuneNavn)
                            }
                        />
                    </UnmountClosed>

                    <Normaltekst>
                        <AapneLukkeLenke
                            aapneTekst={
                                tekster[lang].AapneLukkeLenke.aapneTekst
                            }
                            lukkeTekst={
                                tekster[lang].AapneLukkeLenke.lukkeTekst
                            }
                            aapen={lesMer}
                            onClick={() => setLesMer(!lesMer)}
                        />
                    </Normaltekst>
                </>
            )}
        </StyledSokDigitalt>
    );
};
