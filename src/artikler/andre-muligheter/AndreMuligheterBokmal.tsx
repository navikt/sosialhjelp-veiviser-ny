import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import {HjelpTilBolig} from "./komponenter/HjelpTilBolig";
import {UnderpanelBolig} from "./komponenter/UnderpanelBolig";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {JobblystBokmalPanel} from "./JobblystPanel";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";
import {BlokkCenter} from "../../komponenter/BlokkCenter";
import {ARTICLE_WIDTH} from "../../utils/variables";

const AndreMuligheterBokmal: React.FC = () => {
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel="Andre muligheter"
                illustrasjon={
                    <LysPaere className="illustrasjon_andre_muligheter" />
                }
                extraWide
            >
                <Ingress>
                    Økonomisk sosialhjelp er en midlertidig stønad. Du bør
                    vurdere om du har andre muligheter til å forsørge deg selv.
                    Hvis du har behov for hjelp, kan du ta kontakt med
                    NAV-kontoret der du bor. Du kan også kontakte oss på chat og
                    telefon.
                </Ingress>
            </Artikkel>

            <BlokkCenter width={ARTICLE_WIDTH.large}>
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
                            <LenkeboksLinje href="https://www.nav.no/no/Person/Arbeid/Arbeidsavklaringspenger/arbeidsavklaringspenger-aap">
                                Arbeidsavklaringspenger
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/Person/Pensjon/Andre+pensjonsordninger/supplerende-st%C3%B8nad-for-personer-med-kort-botid-i-norge">
                                Stønad for deg med kort botid i Norge
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://veiledearbeidssoker.nav.no/utenfor-arbeidslivet-lenge/kvalifiseringsprogrammet">
                                Kvalifiseringsprogram
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <HjelpTilBolig>
                    <Undertittel>Hjelp til bolig</Undertittel>
                </HjelpTilBolig>
                <UnderpanelBolig>
                    <LenkepanelBase href={"https://www.husbanken.no/bostotte/"}>
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Bostøtte
                        </Undertittel>
                        <Normaltekst>Husbanken</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/bolig/midlertidig-botilbud"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Midlertidig botilbud
                        </Undertittel>
                        <Normaltekst>Nødsituasjon</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/leie-eller-eie-bolig"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Leie eller eie bolig
                        </Undertittel>
                    </LenkepanelBase>
                </UnderpanelBolig>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel>Når du vil snakke med noen</Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://www.nav.no/finnkontor">
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
                            <LenkeboksLinje href="./hvis-du-har-samboer">
                                Hvis du har samboer
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-er-gift">
                                Hvis du er gift
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-barn">
                                Hvis du har barn
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/familie/alene-med-barn">
                                Hvis du er alene med barn
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <JobblystBokmalPanel />
            </BlokkCenter>
        </>
    );
};

export default AndreMuligheterBokmal;
