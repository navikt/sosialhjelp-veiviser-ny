import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import PanelBase from "nav-frontend-paneler";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {JobblystNynorskPanel} from "./JobblystPanel";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";

const AndreMuligheterNynorsk: React.FC = () => {
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel="Andre moglegheiter"
            >
                <LysPaere />

                <Ingress>
                    Økonomisk sosialhjelp er ein mellombels stønad. Du bør
                    vurdere andre moglegheiter til å forsørgje deg sjølv. Dersom
                    du treng hjelp, kan du ta kontakt med NAV-kontoret der du
                    bur. Du kan òg ta kontakt med oss på chat og telefon.
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
                                Dette treng du for å komme i gang med å søke
                                jobbar
                            </LenkeboksLinje>
                        </ul>
                        <Undertittel style={{textAlign: "left"}}>
                            Ung og lite jobberfaring
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://veiledearbeidssoker.nav.no/ung-lite-erfaring">
                                Korleis kan du fullføre utdanninga di?
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel style={{textAlign: "left"}}>
                            Annan økonomisk støtte
                        </Undertittel>

                        <ul>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/mistet-jobben/dagpenger">
                                Dagpengar
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/utenfor-arbeidslivet-lenge/tiltakspenger">
                                Tiltakspengar
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://tjenester.nav.no/veiledearbeidssoker/utenfor-arbeidslivet-lenge/aap">
                                Arbeidsavklaringspengar
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/nynorsk/supplerande-stonad-for-personar-med-kort-butid-i-noreg">
                                Stønad for deg med kort butid i Noreg
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://veiledearbeidssoker.nav.no/utenfor-arbeidslivet-lenge/kvalifiseringsprogrammet">
                                Kvalifiseringsprogram
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <PanelBase className="hjelp_til_bolig_panel">
                    <Undertittel>Hjelp til bustad</Undertittel>
                </PanelBase>
                <div className="hjelp_til_bolig_panel__underpaneler">
                    <LenkepanelBase href={"https://www.husbanken.no/bostotte/"}>
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Bustønad
                        </Undertittel>
                        <Normaltekst>Husbanken</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/person/flere-tema/sosiale-tjenester/mellombels-butilbod-naudssituasjon"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Mellombels butilbod
                        </Undertittel>
                        <Normaltekst>Nødssituasjon</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/leie-eller-eie-bolig"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Leige eller eige bustad
                        </Undertittel>
                    </LenkepanelBase>
                </div>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel>Når du vil snakke med nokon</Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://www.nav.no/finnkontor">
                                Ditt NAV-kontor
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/nynorsk/generelle-rad-og-rettleiing">
                                Du har rett til opplysning, råd og rettleiing
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./slik-foregar-et-mote?lang=nn">
                                Korleis foregår eit møte?
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>
                            Rettar og plikter som forsørgjar
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="./hvis-du-har-samboer?lang=nn">
                                Dersom du er sambuar
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-er-gift?lang=nn">
                                Dersom du er gift
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-barn?lang=nn">
                                Dersom du har barn
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/familie/alene-med-barn">
                                Dersom du er aleine med barn
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <JobblystNynorskPanel />
            </div>
        </>
    );
};

export default AndreMuligheterNynorsk;
