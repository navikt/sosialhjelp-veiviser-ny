import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Sidetittel, Undertittel} from "nav-frontend-typografi";
import SokJobbPanel from "./SokJobbPanel";
import "./komponenter/andreMuligheter.less";
import PanelBase from "nav-frontend-paneler";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import JobblystPanel from "./JobblystPanel";
import {Sprak} from "../../utils/sprakUtils";

const AndreMuligheter: React.FC = () => {
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                sprak={[Sprak.NORSK_BOKMAL]}
                tittel="Andre muligheter"
            >
                <Ingress>
                    Økonomisk sosialhjelp er en midlertidig stønad. Du må vurdere andre
                    muligheter til å forsørge deg selv.
                </Ingress>
            </Artikkel>

            <div className="blokk-center artikkel--andre_mulighter">
                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel>Skole og utdanning</Undertittel>
                        <ul>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="/sosialhjelp/artikkel/514880"
                                >
                                    Dette gjør du i en nødssituasjon
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    href="https://www.nav.no/353421/finn-ditt-nav-kontor"
                                    className="no-text-decoration"
                                >
                                    Finn NAV-kontoret ditt
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="https://www.nav.no/87526/generelle-råd-og-veiledning"
                                   className="no-text-decoration"
                                >
                                    Du har rett til opplysning,
                                    råd og veiledning
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="/sosialhjelp/artikkel/514876"
                                >
                                    Slik foregår et møte med oss
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lenkeboks">

                        <Undertittel>Annen økonomisk støtte</Undertittel>

                        <ul>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="/sosialhjelp/artikkel/514880"
                                >
                                    Dette gjør du i en
                                    nødssituasjon
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    href="https://www.nav.no/353421/finn-ditt-nav-kontor"
                                    className="no-text-decoration"
                                >
                                    Finn NAV-kontoret ditt
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="https://www.nav.no/87526/generelle-råd-og-veiledning"
                                   className="no-text-decoration"
                                >
                                    Du har rett til opplysning,
                                    råd og veiledning
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="/sosialhjelp/artikkel/514876"
                                >
                                    Slik foregår et møte med oss
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <SokJobbPanel/>

                <PanelBase className="hjelp_til_bolig_panel">
                    <Undertittel>Hjelp til bolig</Undertittel>
                </PanelBase>
                <div className="hjelp_til_bolig_panel__underpaneler">
                    <LenkepanelBase
                        href={"todo"}
                    >
                        <Undertittel>Bostøtte</Undertittel>
                        <Normaltekst>Husbanken</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={"todo"}
                    >
                        <Undertittel>Midlertidig botilbud</Undertittel>
                        <Normaltekst>Nødsituasjon</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={"todo"}
                    >
                        <Undertittel>Leie eller eie bolig</Undertittel>
                    </LenkepanelBase>
                </div>


                <div className="lenkeboks_container lenkeboks_container--3_spalter">

                    <div className="lenkeboks">
                        <Undertittel>Helse og jobb</Undertittel>
                        <ul>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="todo"
                                >
                                    Psykiste problemer
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    href="todo"
                                    className="no-text-decoration"
                                >
                                    Nedsatt funksjonsevne
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="todo"
                                   className="no-text-decoration"
                                >
                                    Rus
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>Hjelp til å komme i jobb eller aktivitet</Undertittel>
                        <ul>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="todo"
                                >
                                    Registrer deg som arbeidssøker
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    href="todo"
                                    className="no-text-decoration"
                                >
                                    Finn og søk jobb
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="todo"
                                   className="no-text-decoration"
                                >
                                    Kvalifiseringsprogrammet
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="todo"
                                   className="no-text-decoration"
                                >
                                    Arbeidstrening
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="todo"
                                   className="no-text-decoration"
                                >
                                    Tiltak for å komme i jobb
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>Rettigheter og plikter som forsørger</Undertittel>
                        <ul>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="todo"
                                >
                                    Hvis du er enslig forsørger
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    href="todo"
                                    className="no-text-decoration"
                                >
                                    Hvis du har barn
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="todo"
                                   className="no-text-decoration"
                                >
                                    Hvis du har samboer
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="todo"
                                   className="no-text-decoration"
                                >
                                    Hvis du er gift
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <JobblystPanel/>

            </div>
        </>
    );
};

export default AndreMuligheter;
