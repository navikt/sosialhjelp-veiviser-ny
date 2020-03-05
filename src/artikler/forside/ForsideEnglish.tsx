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

export const ForsideEnglish: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <SprakvelgerForside />

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=en">
                    Apply for financial assitance
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <Panel className="infopanel">
                        <Undertittel>Before you apply</Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./dette-bor-du-vite?lang=en"
                                description="Information for first time applicants"
                            >
                                What you should know
                            </ForsideLenke>
                            <ForsideLenke
                                href="./dette-kan-du-soke-om?lang=en"
                                description="What expenses can you apply for?"
                            >
                                What you can apply for
                            </ForsideLenke>
                            <ForsideLenke
                                href="./nodsituasjon?lang=en"
                                description="Assistance to cover bare essentatials"
                            >
                                When you are in a financial emergency
                            </ForsideLenke>
                            <ForsideLenke
                                href="./sok-papir?lang=en"
                                description="Where to find application form on paper"
                            >
                                Application form on paper
                            </ForsideLenke>
                            <ForsideLenke
                                href="./andre-muligheter?lang=en"
                                description="Other possibilities to provide for yourself"
                            >
                                Other possibilities
                            </ForsideLenke>
                        </ul>
                    </Panel>

                    <Panel className="infopanel">
                        <Undertittel>After you have applied</Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./behandlingstid?lang=en"
                                description="How long will it take to process my application?"
                            >
                                Processing time
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=en"
                                description="How to upload documentation"
                            >
                                Upload documentation
                            </ForsideLenke>
                            <ForsideLenke
                                href="./status-soknad?lang=en"
                                description="What is the status on your application?"
                            >
                                Application status
                            </ForsideLenke>
                            <ForsideLenke
                                href="./kontakte-veileder?lang=en"
                                description="How to contact your case worker"
                            >
                                Contact case worker
                            </ForsideLenke>
                            <ForsideLenke
                                href="./klage?lang=en"
                                description="How to appeal for decisions on social services"
                            >
                                Appeal
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
