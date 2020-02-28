import * as React from "react";
import {
    InfoPanel,
    InfoPanelContainer,
} from "../../komponenter/infopanel/InfoPanel";
import "./komponenter/forside.less";
import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Dekorator from "../../komponenter/dekorator/Dekorator";
import SokOmSosialhjelpPanel from "./komponenter/SokOmSosialhjelpPanel";
import ChatIkon from "../../komponenter/bilder/ChatIkon";
import {SprakvelgerForside} from "./komponenter/SprakvelgerForside";
import {ForsideLenke} from "./komponenter/ForsideLenke";
import {Panel} from "nav-frontend-paneler";

export const ForsideBokmal: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <SprakvelgerForside />

                <SokOmSosialhjelpPanel href="./slik-soker-du">
                    Søk om økonomisk sosialhjelp
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <Panel className="infopanel">
                        <Undertittel>Før du søker</Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./dette-bor-du-vite?lang=nb"
                                description="Informasjon til deg som søker for første gang"
                            >
                                Dette bør du vite
                            </ForsideLenke>
                            <ForsideLenke
                                href="./dette-kan-du-soke-om?lang=nb"
                                description="Hvilke utgifter kan du få hjelp til å betale"
                            >
                                Dette kan du søke om
                            </ForsideLenke>
                            <ForsideLenke
                                href="./nodsituasjon?lang=nb"
                                description="Utgifter til det mest nødvendige"
                            >
                                Nødsituasjon
                            </ForsideLenke>
                            <ForsideLenke
                                href="./soknad-pa-papir?lang=nb"
                                description="Hvor du finner søknadsskjema på papir"
                            >
                                Søknadsskjema på papir
                            </ForsideLenke>
                            <ForsideLenke
                                href="./andre-muligheter?lang=nb"
                                description="Andre muligheter til å forsørge deg"
                            >
                                Andre muligheter
                            </ForsideLenke>
                        </ul>
                    </Panel>

                    <Panel className="infopanel">
                        <Undertittel>Etter at du har søkt</Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./behandlingstid"
                                description="Hvor lang tid tar det å behandle søknaden?"
                            >
                                Behandlingstid
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=nb"
                                description="Hvordan ettersende dokumentasjon"
                            >
                                Ettersende
                            </ForsideLenke>
                            <ForsideLenke
                                href="./todo"
                                description="Hva er status i saken din?"
                            >
                                Status i sak
                            </ForsideLenke>
                            <ForsideLenke
                                href="./todo"
                                description="Hvordan kan du kontakte veilederen din?"
                            >
                                Kontakt veileder
                            </ForsideLenke>
                            <ForsideLenke
                                href="./klage?lang=nb"
                                description="Hvor sender du klage på utfall i en sak?"
                            >
                                Klage
                            </ForsideLenke>
                        </ul>
                    </Panel>
                </InfoPanelContainer>

                <InfoPanelContainer>
                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/sosialhjelp"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Har du spørsmål om sosiale tjenester og økonomisk
                            sosialhjelp?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat med oss om sosiale tjenester
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/okonomi"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Har du spørsmål om budsjett, økonomi, og
                            gjeldsrådgivning?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat med oss om gjeldsrådgivning
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>
            </div>
        </Dekorator>
    );
};
