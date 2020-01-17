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

export const ForsideNynorsk: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <SprakvelgerForside />
                <InfoPanelContainer>
                    <InfoPanel href="./dette-bor-du-vite?lang=nn">
                        <Undertittel>
                            Dette bør du vite før du søkjer
                        </Undertittel>
                        <Normaltekst>
                            Kven kan søkje? Kva må du dokumentere? Kva skjer
                            etter at du har søkt?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./dette-kan-du-soke-om?lang=nn">
                        <Undertittel>Dette kan du søkje om</Undertittel>
                        <Normaltekst>
                            Kva utgifter kan du søkje om å få hjelp til å
                            betale?
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=nn">
                    Søk om økonomisk sosialhjelp
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <InfoPanel href="./nodsituasjon?lang=nn">
                        <Undertittel>Når du er i ein nødssituasjon</Undertittel>
                        <Normaltekst>
                            Kva betyr det å vere i ein nødsituasjon? Kva bør du
                            gjere om du er i ein nødsituasjon?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./andre-muligheter?lang=nn">
                        <Undertittel>Andre moglegheitar</Undertittel>
                        <Normaltekst>
                            Har du sjekka andre muligheitar til å forsørgje deg
                            sjølv?
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
