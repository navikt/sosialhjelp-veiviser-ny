import * as React from "react";
import "./komponenter/forside.less";
import {Undertittel} from "nav-frontend-typografi";
import Dekorator from "../../komponenter/dekorator/Dekorator";
import SokOmSosialhjelpPanel from "./komponenter/SokOmSosialhjelpPanel";
import {ForsideLenke} from "./komponenter/ForsideLenke";
import {AlertStripeInfo} from "nav-frontend-alertstriper";
import {useDecorator} from "../../utils/useDecorator";
import {InternLenke} from "../../komponenter/InternLenke";
import {BlokkCenter} from "../../komponenter/BlokkCenter";
import {ARTICLE_WIDTH} from "../../utils/variables";

export const ForsideEnglish: React.FC = () => {
    useDecorator([]);
    return (
        <Dekorator erForside={true}>
            <BlokkCenter width={ARTICLE_WIDTH.default} role="main">
                <AlertStripeInfo>
                    <InternLenke href="/korona">
                        Coronavirus - More people may be entitled to financial
                        assistance
                    </InternLenke>
                </AlertStripeInfo>

                <br />

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=en">
                    Apply for financial assitance
                </SokOmSosialhjelpPanel>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            Before applying
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./dette-bor-du-vite?lang=en"
                                description="Information for first time applicants"
                            >
                                What you should know
                            </ForsideLenke>
                            <ForsideLenke
                                href="./dette-kan-du-soke-om?lang=en"
                                description="Expenses you can apply for"
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
                    </div>

                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            After applying
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./behandlingstid?lang=nb"
                                description="How long will it take to process my application?"
                            >
                                Processing time
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=nb"
                                description="How to upload documentation"
                            >
                                Upload documentation
                            </ForsideLenke>
                            <ForsideLenke
                                href="./status-soknad?lang=nb"
                                description="What is the status of your application?"
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
                                description="How to appeal the decisions on social services"
                            >
                                Appeal
                            </ForsideLenke>
                        </ul>
                    </div>
                </div>
            </BlokkCenter>
        </Dekorator>
    );
};
