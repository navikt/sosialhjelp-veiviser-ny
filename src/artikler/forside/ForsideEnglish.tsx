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

export const ForsideEnglish: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <SprakvelgerForside />
                <InfoPanelContainer>
                    <InfoPanel href="./dette-bor-du-vite?lang=en">
                        <Undertittel>What you should know</Undertittel>
                        <Normaltekst>
                            Who can apply? What should you document? What
                            happens after you have applied?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./dette-kan-du-soke-om?lang=en">
                        <Undertittel>
                            What can financial assistance cover?
                        </Undertittel>
                        <Normaltekst>
                            Which expenses can you apply for help to cover?
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=en">
                    Apply for financial assistance
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <InfoPanel href="./nodsituasjon?lang=en">
                        <Undertittel>In an emergency</Undertittel>
                        <Normaltekst>
                            What does it mean to be in an emergency? What can
                            you do in an emergency situation?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./andre-muligheter?lang=en">
                        <Undertittel>Other possibilities</Undertittel>
                        <Normaltekst>
                            Have you considered other possibilities to provide
                            for yourself?
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>

                <InfoPanelContainer>
                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/sosialhjelp"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Do you have questions about social services and
                            financial assistance?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat witch us about social services
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/okonomi"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Do you have questions about budgetting, economy and
                            debt counseling?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat with us about debt counseling
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>
            </div>
        </Dekorator>
    );
};
