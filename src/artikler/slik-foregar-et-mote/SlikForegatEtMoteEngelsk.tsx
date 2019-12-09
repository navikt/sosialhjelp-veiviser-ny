import * as React from "react";
import {
    Ingress,
    Innholdstittel,
    Normaltekst,
    Undertittel,
} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import Veiskilt from "../../komponenter/bilder/Veiskilt";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";
import {andreMuligheterBrodsmulestiEngelsk} from "../andre-muligheter/AndreMuligheter";

const SlikForegatEtMoteEngelsk: React.FC = () => {
    return (
        <Artikkel
            tittel="When you need to talk to someone"
            illustrasjon={<Veiskilt className="sentrert_illustrasjon" />}
            foreldreside={andreMuligheterBrodsmulestiEngelsk}
        >
            <Innholdstittel>What happens in a meeting?</Innholdstittel>

            <Ingress>
                If you are applying for financial assistance, you will normally
                be summoned for an interview with an adviser. You may also
                contact NAV and schedule an meeting.
            </Ingress>

            <br />

            <Normaltekst>
                You may be feeling insecure before your first meeting with NAV,
                wondering how much you will be expected to share about your
                situation. If you prefer, you may bring someone along whom you
                trust.
            </Normaltekst>
            <br />
            <Normaltekst>
                During the meeting, we will ask you some questions to find out
                what your needs are.
            </Normaltekst>

            <br />
            <Ekspanderbartpanel tittel="Examples of questions" border>
                <>
                    <div className="typo-normal">
                        <ul>
                            <li>
                                Are you in school? Are you enrolled in an
                                education programme? Do you work?
                            </li>
                            <li>
                                What are your sources of&nbsp;income, and what
                                kinds of expenses do you have?
                            </li>
                            <li>
                                Do you have any savings? Do you have any debt?
                            </li>
                            <li>How do you live, and whom do you live with?</li>
                            <li>
                                How is the overall financial situation in your
                                household? Do you have a spouse or cohabitant or
                                children still living at home? How is your
                                financial situation?
                            </li>
                            <li>
                                Do you have children?&nbsp;What are their needs?
                                Are the children in kindergarten or
                                school?&nbsp;Do the children participate in any
                                activities?
                            </li>
                            <li>
                                Do you have dyslexia or any other learning
                                disability?
                            </li>
                            <li>
                                Are you in touch with any other services, such
                                as the follow-up service (OT), a district
                                psychiatric outpatient service (DPS) or child
                                welfare services?
                            </li>
                            <li>
                                What other potential&nbsp;sources of income have
                                you tried?
                            </li>
                            <li>
                                What do you believe is the solution to the
                                challenges you are facing?
                            </li>
                        </ul>
                    </div>
                    <Undertittel>
                        If you do not have a permanent place to live, we may ask
                        you
                    </Undertittel>
                    <div className="typo-normal">
                        <ul>
                            <li>
                                where you are staying, and how long you have
                                been staying there.
                            </li>
                            <li>
                                if you have been in contact with NAV in another
                                municipality and how they helped you.
                            </li>
                            <li>
                                if you need a temporary place to live. We may
                                ask you about your family and social network to
                                find out what your other options are.
                            </li>
                        </ul>
                    </div>
                </>
            </Ekspanderbartpanel>
            <br />

            <Normaltekst>
                When we have identified what you need help with, we will work
                with you to create a plan for how to proceed.
            </Normaltekst>
            <br />
            <Normaltekst>
                If you are applying for financial assistance, you should bring{" "}
                <Lenke href="./dette-bor-du-vite?lang=en">documentation</Lenke>{" "}
                to the meeting.
            </Normaltekst>
            <br />
            <Normaltekst>
                If you are struggling with something in your life, such as your
                mental health, drugs or alcohol abuse, family problems or other
                things, you should mention it in the meeting. When we know, we
                will be better able to help you.
            </Normaltekst>
            <br />
            <Normaltekst>
                If you are in upper secondary school and you are in conflict
                with your parents, we may recommend that you and your parents
                come to a meeting together.
            </Normaltekst>
            <br />
            <Normaltekst>
                If you do not speak or understand Norwegian, you must let us
                know beforehand, so that we can book an interpreter for the
                meeting.
            </Normaltekst>
            <br />
            <Normaltekst>
                Everyone who works in NAV is bound by a duty of confidentiality.
            </Normaltekst>
        </Artikkel>
    );
};

export default SlikForegatEtMoteEngelsk;
