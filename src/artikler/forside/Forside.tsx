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

const Forside: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div className="blokk-center forside">
                <InfoPanelContainer>
                    <InfoPanel href="./dette-bor-du-vite">
                        <Undertittel>
                            Dette bør du vite før du søker
                        </Undertittel>
                        <Normaltekst>
                            Hvem kan søke? Hva må du dokumentere? Hva skjer
                            etter at du har søkt?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./dette-kan-du-soke-om">
                        <Undertittel>Dette kan du søke om</Undertittel>
                        <Normaltekst>
                            Hvilke utgifter kan du søke om å få hjelp til å
                            betale?
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>

                <SokOmSosialhjelpPanel href="./slik-soker-du">
                    Søk om økonomisk sosialhjelp
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <InfoPanel href="./nodsituasjon">
                        <Undertittel>
                            Dette gjør du i en nødsituasjon
                        </Undertittel>
                        <Normaltekst>
                            Hva betyr det å være i en nødsituasjon? Hva bør du
                            gjøre om du er i en nødsituasjon?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./andre-muligheter">
                        <Undertittel>Andre muligheter</Undertittel>
                        <Normaltekst>
                            Har du sjekket andre muligheter til å forsørge deg
                            selv?
                        </Normaltekst>
                    </InfoPanel>
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

export default Forside;
