import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import PanelBase from "nav-frontend-paneler";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import JobblystPanel from "./JobblystPanel";
import {Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";
import {BrodsmulestiForeldreside} from "../../komponenter/brodsmulesti/Brodsmulesti";

const andreMuligheterUrlPath = "/andre-muligheter";

export const andreMuligheterBrodsmulestiBokmal: BrodsmulestiForeldreside = {
    tittel: "Andre muligheter",
    path: andreMuligheterUrlPath,
};

export const andreMuligheterBrodsmulestiNynorsk: BrodsmulestiForeldreside = {
    tittel: "Andre moglegheiter",
    path: andreMuligheterUrlPath,
};

export const andreMuligheterBrodsmulestiEngelsk: BrodsmulestiForeldreside = {
    tittel: "Other possibilities",
    path: andreMuligheterUrlPath,
};

const AndreMuligheter: React.FC = () => {
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel="Andre muligheter"
            >
                <LysPaere />

                <Ingress>
                    Økonomisk sosialhjelp er en midlertidig stønad. Du må
                    vurdere andre muligheter til å forsørge deg selv.
                </Ingress>
            </Artikkel>

            <div className="blokk-center artikkel--andre_mulighter">
                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel style={{textAlign: "left"}}>
                            Hjelp til å komme i jobb og aktivitet
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/?sprak=nb">
                                Dette trenger du for å komme i gang med å søke
                                jobber
                            </LenkeboksLinje>
                        </ul>
                        <Undertittel style={{textAlign: "left"}}>
                            Ung og lite jobberfaring
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://veiledearbeidssoker.nav.no/ung-lite-erfaring">
                                Hvordan kan du fullføre utdanningen din?
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel style={{textAlign: "left"}}>
                            Annen økonomisk støtte
                        </Undertittel>

                        <ul>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/mistet-jobben/dagpenger?sprak=nb">
                                Dagpenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/utenfor-arbeidslivet-lenge/tiltakspenger?sprak=nb">
                                Tiltakspenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/utenfor-arbeidslivet-lenge/aap?sprak=nb">
                                Arbeidsavklaringspenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/Person/Pensjon/Andre+pensjonsordninger/supplerende-st%C3%B8nad-for-personer-med-kort-botid-i-norge">
                                Søknad for deg med kort botid i Norge
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://veiledearbeidssoker.nav.no/utenfor-arbeidslivet-lenge/kvalifiseringsprogrammet">
                                Kvalifiseringsprogram
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <PanelBase className="hjelp_til_bolig_panel">
                    <Undertittel>Hjelp til bolig</Undertittel>
                </PanelBase>
                <div className="hjelp_til_bolig_panel__underpaneler">
                    <LenkepanelBase href={"https://www.husbanken.no/bostotte/"}>
                        <Undertittel>Bostøtte</Undertittel>
                        <Normaltekst>Husbanken</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/bolig/midlertidig-botilbud"
                        }
                    >
                        <Undertittel>Midlertidig botilbud</Undertittel>
                        <Normaltekst>Nødsituasjon</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/leie-eller-eie-bolig"
                        }
                    >
                        <Undertittel>Leie eller eie bolig</Undertittel>
                    </LenkepanelBase>
                </div>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel>Når du vil snakke med noen</Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://www.nav.no/person/personopplysninger/#ditt-nav-kontor">
                                Ditt NAV-kontor
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/generelle-rad-og-veiledning">
                                Du har rett til opplysning, råd og veiledning
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./slik-foregar-et-mote">
                                Slik foregår et møte med oss
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>
                            Rettigheter og plikter som forsørger
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="./hvis-du-er-enslig-forsorger">
                                Hvis du er enslig forsørger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-barn">
                                Hvis du har barn
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-samboer">
                                Hvis du har samboer
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-er-gift">
                                Hvis du er gift
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <JobblystPanel />
            </div>
        </Oversettelser>
    );
};

export default AndreMuligheter;
