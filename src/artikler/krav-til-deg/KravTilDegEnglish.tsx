import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const KravTilDegEnglishl: React.FC = () => (
    <Artikkel
        tittel="Activity conditions"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Activity conditions</Innholdstittel>
        <Avsnitt>
            NAV may require you to reduce your expenses, increase your income
            and participate in activities in order to qualify for social
            assistance.
        </Avsnitt>

        <Avsnitt>
            The goal is for you to become able to provide for yourself.
        </Avsnitt>

        <Avsnitt>NAV may also require that you</Avsnitt>
        <div className="typo-normal">
            <ul>
                <li>attend counselling interviews</li>
                <li>apply to relevant jobs</li>
                <li>participate in employment seminars and schemes</li>
                <li>
                    participate in work training or other employment activities
                </li>
                <li>participate in education and training programmes</li>
            </ul>
        </div>
        <Undertittel>For applicants under the age of 30</Undertittel>
        <Avsnitt>
            If you are under 30 years old, NAV will require you to participate
            in certain activities in order to qualify for social assistance. The
            goal is to help you find employment or start an education, so that
            you will be able to provide for yourself with your own income.
        </Avsnitt>
        <Undertittel>If you fail to meet the requirements</Undertittel>
        <Avsnitt>
            If you fail to meet the requirements you agreed to with NAV, it may
            affect your payments.
        </Avsnitt>
    </Artikkel>
);

export default KravTilDegEnglishl;
