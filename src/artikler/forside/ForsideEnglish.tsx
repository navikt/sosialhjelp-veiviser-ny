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
                        <Undertittel>
                            You should know this before applying
                        </Undertittel>
                        <Normaltekst>
                            Who can apply? What are the required documentations?
                            What happens after you have applied?
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel href="./dette-kan-du-soke-om?lang=en">
                        <Undertittel>You can apply for this</Undertittel>
                        <Normaltekst>
                            What expenses can you apply for?
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=en">
                    Apply for financial assistance
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <InfoPanel href="./nodsituasjon?lang=en">
                        <Undertittel>
                            When you are in a financial emergency
                        </Undertittel>
                        <Normaltekst>
                            What does it mean to be in an emergency? What should
                            you do in an emergency?
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
                            financial social assistance?
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
                            Do you have questions about budgeting, finances, and
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
