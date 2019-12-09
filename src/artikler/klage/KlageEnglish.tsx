import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const KlageEnglish: React.FC = () => (
    <Artikkel
        tittel="Appeal for decisions on social services"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Appeal for decisions on social services</Innholdstittel>
        <Normaltekst>
            You may lodge an appeal if you have received a decision from us that
            you believe is wrong.
        </Normaltekst>
        <Undertittel>How to appeal?</Undertittel>
        <Normaltekst>
            Send the appeal to the NAV office that made the decision. The term
            of appeal is 3 weeks from the date on which you receive notice of
            the decision.
        </Normaltekst>
        <Undertittel>Who can help you lodge an appeal?</Undertittel>
        <Normaltekst>
            Your NAV office can assist you if you need help writing your appeal.
            In that case, you will have to make an appointment with the NAV
            office. You are entitled to be accompanied by a person you trust.
        </Normaltekst>
        <br />
        <Normaltekst>
            You can also enlist a lawyer or authorise someone to handle the
            appeals process on your behalf.
        </Normaltekst>
        <Undertittel>What should the appeal contain?</Undertittel>
        <Normaltekst>
            <ul>
                <li>
                    Which decision the appeal applies to. You can optionally
                    attach the decision you are appealing to.
                </li>
                <li>
                    What you think is wrong with the decision and why you think
                    it is wrong.
                </li>
                <li>Signature</li>
            </ul>
        </Normaltekst>
        <Normaltekst>You may submit necessary documentation.</Normaltekst>
        <Undertittel>What happens when you appeal?</Undertittel>
        <Normaltekst>
            When you appeal, the NAV unit that wrote the original decision will
            reassess your case. Processing times vary from municipality to
            municipality. If more than a month goes by, you are entitled to a
            preliminary response. If your appeal is successful, NAV will issue a
            new decision that you will receive in the post.
        </Normaltekst>
        <br />
        <Normaltekst>
            If the decision remains unchanged, your appeal is forwarded to
            Fylkemannen who will make a final decision. You will receive a
            letter when the case is sent to Fylkesmannen. The letter will
            explain the further process.
        </Normaltekst>
        <br />
        <Normaltekst>
            You will receive a new decision when Fylkesmannen decides your case.
        </Normaltekst>
        <Undertittel>You can get your expenses covered</Undertittel>
        <Normaltekst>
            If your appeal is successful, you may be entitled to reimbursement
            of expenses that were necessary to have the decision overturned,
            such as legal fees. Submit your claim for reimbursement of costs to
            the NAV office that set aside the original decision.
        </Normaltekst>
    </Artikkel>
);

export default KlageEnglish;
