import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import PanelBase from "nav-frontend-paneler";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import JobblystPanel from "./JobblystPanel";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";

const AndreMuligheterEnglish: React.FC = () => {
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel="Other possibilities"
            >
                <LysPaere />

                <Ingress>
                    Financial assistance is å temporary form of benefit. You
                    should consider every other possibility for you to provide
                    for yourself. If you need help, you can contact the NAV
                    office in the municipality where you live. You can also
                    contact us by phone.
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
                            <LenkeboksLinje href="https://www.nav.no/en/home/benefits-and-services/relatert-informasjon/supplementary-benefit-for-persons-who-have-only-lived-a-short-period-in-norway">
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
                            <LenkeboksLinje href="https://www.nav.no/en/home/benefits-and-services/relatert-informasjon/general-advice-and-guidance">
                                You have the right to information, advice and
                                guidance
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./slik-foregar-et-mote?lang=en">
                                What happens in a meeting?
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>
                            Rettigheter og plikter som forsørger
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="./hvis-du-er-enslig-forsorger?lang=en">
                                If you are a single parent
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-barn?lang=en">
                                If you have children
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-samboer?lang=en">
                                If you are a cohabitant
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-er-gift?lang=en">
                                If you are married
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <JobblystPanel />
            </div>
        </>
    );
};

export default AndreMuligheterEnglish;
