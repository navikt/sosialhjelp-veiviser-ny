import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import {HjelpTilBolig} from "./komponenter/HjelpTilBolig";
import {UnderpanelBolig} from "./komponenter/UnderpanelBolig";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {JobblystEnglishPanel} from "./JobblystPanel";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";
import {BlokkCenter} from "../../komponenter/BlokkCenter";
import {ARTICLE_WIDTH} from "../../utils/variables";

const AndreMuligheterEnglish: React.FC = () => {
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel="Other possibilities"
                illustrasjon={
                    <LysPaere className="illustrasjon_andre_muligheter" />
                }
                extraWide
            >
                <Ingress>
                    Financial assistance is å temporary form of benefit. You
                    should consider every other possibility for you to provide
                    for yourself. If you need help, you can contact the NAV
                    office in the municipality where you live. You can also
                    contact us by chat or phone.
                </Ingress>
            </Artikkel>

            <BlokkCenter width={ARTICLE_WIDTH.large}>
                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel style={{textAlign: "left"}}>
                            Help with finding jobs
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://www.nav.no/arbeid">
                                What you need to get started when applying for
                                jobs
                            </LenkeboksLinje>
                        </ul>
                        <Undertittel style={{textAlign: "left"}}>
                            Young and lacking work experience
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://veiledearbeidssoker.nav.no/ung-lite-erfaring">
                                How you can complete your education{" "}
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel style={{textAlign: "left"}}>
                            Other economic benefits
                        </Undertittel>

                        <ul>
                            <LenkeboksLinje href="https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/dagpenger">
                                Unemployment benefits
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb/stonader-ved-tiltak">
                                Benefits while attending NAV activities
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/en/home/benefits-and-services/relatert-informasjon/work-assessment-allowance-aap">
                                Work assessment allowance
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/en/home/benefits-and-services/relatert-informasjon/supplementary-benefit-for-persons-who-have-only-lived-a-short-period-in-norway">
                                Supplementary benefit for persons who have only
                                lived a short period in Norway
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/kvalifiseringsprogrammet">
                                Qualification programme
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <HjelpTilBolig>
                    <Undertittel>Housing assistance</Undertittel>
                </HjelpTilBolig>
                <UnderpanelBolig>
                    <LenkepanelBase
                        href={
                            "https://www.husbanken.no/english/what-is-housing-allowance/"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Housing allowance
                        </Undertittel>
                        <Normaltekst>Husbanken</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/en/home/relatert-informasjon/temporary-accommodation-emergency"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Temporary accommodation
                        </Undertittel>
                        <Normaltekst>Emergency</Normaltekst>
                    </LenkepanelBase>
                    <LenkepanelBase
                        href={
                            "https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/leie-eller-eie-bolig"
                        }
                    >
                        <Undertittel className="lenkepanel__heading" tag="h3">
                            Rent or own housing
                        </Undertittel>
                    </LenkepanelBase>
                </UnderpanelBolig>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Undertittel>
                            When you want to talk to someone
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="https://www.nav.no/person/kontakt-oss/en/finnkontor">
                                Your NAV office
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/en/home/benefits-and-services/relatert-informasjon/general-advice-and-guidance">
                                You have the right to information, advice and
                                guidance
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./slik-foregar-et-mote?lang=en">
                                What happens in a meeting with NAV?
                            </LenkeboksLinje>
                        </ul>
                    </div>

                    <div className="lenkeboks">
                        <Undertittel>
                            Rights and duties as a provider
                        </Undertittel>
                        <ul>
                            <LenkeboksLinje href="./hvis-du-har-samboer?lang=en">
                                If you are a cohabitant
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-er-gift?lang=en">
                                If you are married
                            </LenkeboksLinje>
                            <LenkeboksLinje href="./hvis-du-har-barn?lang=en">
                                If you have children
                            </LenkeboksLinje>
                            <LenkeboksLinje href="https://www.nav.no/familie/alene-med-barn">
                                If you are a single parent
                            </LenkeboksLinje>
                        </ul>
                    </div>
                </div>

                <JobblystEnglishPanel />
            </BlokkCenter>
        </>
    );
};

export default AndreMuligheterEnglish;
