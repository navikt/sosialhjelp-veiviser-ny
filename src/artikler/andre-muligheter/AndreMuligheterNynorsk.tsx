import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import PanelBase from "nav-frontend-paneler";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import JobblystPanel from "./JobblystPanel";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";

const AndreMuligheterNynorsk: React.FC = () => {
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel="Andre moglegheitar"
            >
                <LysPaere />

                <Ingress>
                    Økonomisk sosialhjelp er en midlertidig stønad. Du bør
                    vurdere andre moglegheitar til å forsørgje deg sjølv. Dersom
                    du hjelp, kan du ta kontakt med NAV-kontoret der du bur. Du
                    kan òg ta kontakt med oss på telefon.
                </Ingress>
            </Artikkel>

            <div className="blokk-center artikkel--andre_mulighter">
                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel style={{textAlign: "left"}}>
                            Hjelp til å komme i jobb og aktivitet
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/">
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
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/mistet-jobben/dagpenger">
                                Dagpenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/utenfor-arbeidslivet-lenge/tiltakspenger">
                                Tiltakspenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/utenfor-arbeidslivet-lenge/aap">
                                Arbeidsavklaringspenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/nynorsk/supplerande-stonad-for-personar-med-kort-butid-i-noreg">
                                Søknad for deg med kort botid i Noreg
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
                            <LenkeboksLinje href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/nynorsk/generelle-rad-og-rettleiing">
                                Du har rett til opplysning, råd og rettleiing
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./slik-foregar-et-mote?lang=nn">
                                Korleis føregår eit møte?
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>
                            Rettigheter og plikter som forsørger
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="./hvis-du-er-enslig-forsorger?lang=nn">
                                Dersom du er einsleg forsørgjar
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-barn?lang=nn">
                                Dersom du har barn
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-samboer?lang=nn">
                                Dersom du er sambuar
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-er-gift?lang=nn">
                                Dersom du er gift
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <JobblystPanel />
            </div>
        </>
    );
};

export default AndreMuligheterNynorsk;
