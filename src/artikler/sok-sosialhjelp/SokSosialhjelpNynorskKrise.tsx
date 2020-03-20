import * as React from "react";
import {Normaltekst, Innholdstittel} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp} from "nav-frontend-knapper";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";
import {gaaTilDigitalSoknad} from "../../utils/navigasjon";
import {REST_STATUS} from "../../utils/restUtils";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import {AlertStripeFeil} from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import {UnmountClosed} from "react-collapse";
import {NedChevron, OppChevron} from "nav-frontend-chevron";

const AdvarselNedetid: React.FC<{ nedetidService: any }> = ({ nedetidService}) => {
    return <>
        <AlertStripeFeil>
            Du kan ikke sende digital søknad i perioden{" "}
            {nedetidService.payload.nedetidStartText} –{" "}
            {nedetidService.payload.nedetidSluttText} grunnet
            teknisk vedlikehold. Ta kontakt med ditt lokale
            NAV-kontor hvis du skal søke om økonomisk
            sosialhjelp i denne perioden.
        </AlertStripeFeil>
        <br/>
    </>;
};

const SokSosialhjelpNynorskKrise: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const nedetidService = useNedetidService();

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    const [lesMer, setLesMer] = useState<boolean>(true);

    return (
        <Artikkel tittel="Søk om økonomisk sosialhjelp">
            <Innholdstittel>Søk om økonomisk sosialhjelp</Innholdstittel>

            {nedetidService.restStatus === REST_STATUS.OK &&
                nedetidService.payload.isNedetid && (
                    <AdvarselNedetid nedetidService={nedetidService}/>
                )}

            <div>
                <Normaltekst>
                    Det er gjort midlertidige endringer av den digitale søknaden
                    som følge av koronaviruset:
                </Normaltekst>
                <ul className="punktliste_med_luft">
                    <li>
                        <Normaltekst>
                            Søknaden skal også brukes av frilansere og selvstendig næringsdrivende
                            som søknad om midlertidig inntektssikring frem til
                            ny løsning er på plass hos NAV.
                        </Normaltekst>
                    </li>
                    <li>
                        <Normaltekst>
                            Alle kommuner skal innen kort tid ha digital søknad
                            tilgjengelig. Foreløpig er 321 av 426 kommuner
                            tilgjengelig.
                        </Normaltekst>
                        <UnmountClosed isOpened={lesMer}>
                            <div className="kommunesok_midlertidig">
                                <KommuneSok
                                    ledetekst="Sjekk om du kan søkje digitalt i din kommune"
                                    soknadTilgjengeligTekst="Du kan søke digitalt i"
                                    soknadIkkeTilgjengelig={
                                        <span>
                                            kan dessverre ikkje ta i mot digitale
                                            søknader ennå. Du kan{" "}
                                            <Lenke href={"./sok-papir?lang=nb"}>
                                                søkje på papirskjema
                                            </Lenke>
                                            .
                                        </span>
                                    }
                                    placeholderTekst="Skriv kommunenavn"
                                    ariaLabel="Søk etter kommunenavn"
                                    onValgtKommune={(
                                        kommuneId: string | undefined
                                    ) => setKommuneId(kommuneId)}
                                />
                            </div>
                        </UnmountClosed>
                        <Normaltekst>
                            <a
                                href=".?sjekk_kommune=true"
                                className="lenke"
                                onClick={event => {
                                    setLesMer(!lesMer);
                                    event.preventDefault();
                                }}
                            >
                                {!lesMer && (
                                    <>
                                        Sjekk om du kan søke digitalt i din
                                        kommune <NedChevron />
                                    </>
                                )}
                                {lesMer && (
                                    <>
                                        Lukk <OppChevron />
                                    </>
                                )}
                            </a>
                        </Normaltekst>
                    </li>
                </ul>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                <Hovedknapp
                    disabled={
                        nedetidService.restStatus === REST_STATUS.OK &&
                        nedetidService.payload.isNedetid
                    }
                    onClick={(event: any) => sokDigital(event)}
                >
                    Søk digitalt
                </Hovedknapp>
            </div>
            <br />
        </Artikkel>
    );
};

export default SokSosialhjelpNynorskKrise;
