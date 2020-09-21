import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const KlageEnglish: React.FC = () => (
    <Artikkel
        tittel="Appeal for decisions on social services"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Appeal for decisions on social services</Innholdstittel>
        <Avsnitt>
            You may lodge an appeal if you have received a decision from us that
            you believe is wrong.
        </Avsnitt>
        <Undertittel>How to appeal?</Undertittel>
        <Avsnitt>
            Send the appeal to the NAV office that made the decision. The term
            of appeal is 3 weeks from the date on which you receive notice of
            the decision.
        </Avsnitt>
        <Undertittel>Who can help you lodge an appeal?</Undertittel>
        <Avsnitt>
            Your NAV office can assist you if you need help writing your appeal.
            In that case, you will have to make an appointment with the NAV
            office. You are entitled to be accompanied by a person you trust.
        </Avsnitt>

        <Avsnitt>
            You can also enlist a lawyer or authorise someone to handle the
            appeals process on your behalf.
        </Avsnitt>
        <Undertittel>What should the appeal contain?</Undertittel>
        <div className="typo-normal">
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
        </div>
        <Avsnitt>You may submit necessary documentation. </Avsnitt>
        <Undertittel>What happens when you appeal?</Undertittel>
        <Avsnitt>
            When you appeal, the NAV unit that wrote the original decision will
            reassess your case. Processing times vary from municipality to
            municipality. If more than a month goes by, you are entitled to a
            preliminary response. If your appeal is successful, NAV will issue a
            new decision that you will receive in the post.
        </Avsnitt>

        <Avsnitt>
            If the decision remains unchanged, your appeal is forwarded to
            Fylkemannen who will make a final decision. You will receive a
            letter when the case is sent to Fylkesmannen. The letter will
            explain the further process.
        </Avsnitt>

        <Avsnitt>
            You will receive a new decision when Fylkesmannen decides your case.
        </Avsnitt>
        <Undertittel>You can get your expenses covered</Undertittel>
        <Avsnitt>
            If your appeal is successful, you may be entitled to reimbursement
            of expenses that were necessary to have the decision overturned,
            such as legal fees. Submit your claim for reimbursement of costs to
            the NAV office that set aside the original decision.
        </Avsnitt>
    </Artikkel>
);

export default KlageEnglish;
