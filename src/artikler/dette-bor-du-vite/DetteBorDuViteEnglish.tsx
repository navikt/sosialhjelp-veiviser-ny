import * as React from "react";
import Artikkel from "../Artikkel";
import {
    Ingress,
    Innholdstittel,
    Normaltekst,
    Undertittel,
} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import IllustrasjonInfoSirkel from "../../komponenter/bilder/IllustrasjonInfoSirkel";
import Lenke from "nav-frontend-lenker";

const DetteBorDuViteEnglish: React.FC = () => {
    return (
        <Artikkel
            tittel="What you should know"
            illustrasjon={<IllustrasjonInfoSirkel className="illustrasjon" />}
        >
            <Innholdstittel>What you should know</Innholdstittel>
            <Ingress>
                Financial assistance is a temporary benefit. You
                should consider every other possibility for you
                to provide for yourself. This could include
                employment, other means of income or using
                your own savings. Consult with NAV if you need
                help exploring your options, you can contact the
                NAV office in the municipality where you live. You
                can also contact us by chat or phone.
            </Ingress>

            <Undertittel>Before you apply</Undertittel>
            <Normaltekst>
                When you apply, you must provide information about
                yourself and your financial situation. You usually
                have to provide documentation for this information.
            </Normaltekst>

            <Ekspanderbartpanel
                tittel="Examples of documentation you must include in your application"
                border
            >
                <Normaltekst>
                    <ul>
                        <li>Identification</li>
                        <li>Valid residence permit</li>
                        <li>Tax return</li>
                        <li>Tax assessment/tax settlement notice</li>
                        <li>Pay slip</li>
                        <li>
                            Bank account summary, presenting all of your bank
                            accounts, including current balances
                        </li>
                        <li>
                            Bank statements (Provided it is not possible to
                            document necessary information by other means. You
                            may cross out any information that is not relevant
                            to your case.)
                        </li>
                        <li>Documentation of housing (lease agreement)</li>
                        <li>
                            Invoices documenting rent, mortgage payments,
                            electricity, child care, care for school-aged
                            children (SFO) and leisure time activities for
                            children
                        </li>
                        <li>
                            Recurrent or especially high costs related to health
                            and/or dental services
                        </li>
                    </ul>
                </Normaltekst>
            </Ekspanderbartpanel>

            <br />
            <Normaltekst>
                Before you apply for financial aid, you should usually
                have a legal residence i Norway. If you live abroad you
                do not qualify for social assistance.
            </Normaltekst>
            <br />
            <Normaltekst>
                Everyone has the right to submit an application for financial
                assistance and to have NAV conduct an individual assessment of
                their application. You have the rights to
                {" "}
                <Lenke href="https://www.nav.no/en/home/benefits-and-services/relatert-informasjon/general-advice-and-guidance">
                    information, advice and guidance
                </Lenke>
                ,
                {" "}
                regardless of your current financial situation.
            </Normaltekst>

            <Undertittel>After you apply</Undertittel>
            <Normaltekst>
                Processing times vary from municipality to municipality. If more
                than a month goes by, you are entitled to a preliminary
                response. If you fail to submit all the necessary documentation,
                it may take longer for NAV to process your application. If your{" "}
                <Lenke href="./nodsituasjon?lang=en">
                    situation is an emergency
                </Lenke>
                , you are entitled to get a response quickly.
            </Normaltekst>
            <br />
            <Normaltekst>
                You must <Lenke href="./gi-beskjed?lang=en">notify</Lenke> us of
                any changes to your situation.
            </Normaltekst>
            <br />
            <Normaltekst>
                Once we have processed your application, we will make a
                decision, and you must read the decision carefully. Often, there
                will be one or more{" "}
                <Lenke href="./krav-til-deg?lang=en">
                    conditions listed in the decision
                </Lenke>{" "}
                that you have to meet.
            </Normaltekst>
            <br />
            <Normaltekst>
                If you believe the decision is wrong, you have the right to{" "}
                <Lenke href="./klage?lang=en">appeal</Lenke>. The term of appeal
                is 3 weeks from the date on which you receive notice of the
                decision.
            </Normaltekst>
            <Undertittel>Rates</Undertittel>
            <Normaltekst>
                Financial assistance is granted on the basis of an individual
                assessment.
            </Normaltekst>
            <br />
            <Normaltekst>
                There are, however,{" "}
                <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/oversikt-over-satser/statlige-veiledende-retningslinjer-for-okonomisk-stonad_kap">
                    standard government rates and guidelines
                </Lenke>{" "}
                for calculating social assistance. Your municipality may apply
                its own standard rates.
            </Normaltekst>
            <Undertittel>Payments</Undertittel>
            <Normaltekst>
                Your decision notice will include information about payments.
            </Normaltekst>
            <br />
            <Normaltekst>
                Read more about{" "}
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/financial-assistance-social-assistance">
                    financial assistance
                </Lenke>
                .
            </Normaltekst>
        </Artikkel>
    );
};

export default DetteBorDuViteEnglish;
