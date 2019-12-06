import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiEngelsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuErEnsligForsorgerEnglish = () => (
    <Artikkel
        tittel="If you are a single parent"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiEngelsk}
    >
        <Innholdstittel>If you are a single parent</Innholdstittel>
        <Normaltekst>
            You may qualify for several different benefits and programmes as a
            single mother or father.
        </Normaltekst>
        <Ekspanderbartpanel tittel="Extended child benefit" border>
            <Normaltekst>
                You may qualify for child benefits for one child more than the
                number of children in your household if you live alone with
                children. Read more about{" "}
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/child-benefit">
                    extended child benefits
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Transitional benefit" border>
            <Normaltekst>
                You may qualify for transitional benefits if you are unable to
                provide for yourself as a result of caring for the child. Read
                more about{" "}
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/transitional-benefit">
                    transitional benefits
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Child care benefit" border>
            <Normaltekst>
                Child care benefits are intended to cover part of the cost of
                child care as a result of employment. Read more about{" "}
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/child-care-benefit">
                    child care benefit
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Supplemental benefits" border>
            <Normaltekst>
                You may qualify to have some or all of your expenses covered by
                NAV if these expenses are incurred as a result of necessary and
                relevant education, your registration with NAV as a genuine job
                seeker, or having to move in order to find employment. Read more
                about{" "}
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/Supplemental+benefits+and+support+for+tuition+for+education">
                    supplemental benefits and allowances to cover tuition fees
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Child support" border>
            <Normaltekst>
                If the parents of a child do not live together, the person with
                whom the child does not live must pay his or her share of the
                costs as child support to the other parent. Child support
                payments may also be ordered in cases where the parents have a
                divided-residence arrangement for the child. Read more about
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/child-support-child-maintenance">
                    child support
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Advance payments of child support" border>
            <Normaltekst>
                Advance payments of child support from NAV serve to ensure that
                children receive payment every month, even if the child support
                is not paid for whatever reason. Read more about{" "}
                <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/advance-payments-of-child-support">
                    advance payments of child support
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Extraordinary child support" border>
            <Normaltekst>
                In connection with extraordinary expenses, such as orthodontics,
                the child’s confirmation or new glasses, the parent bearing the
                expense can apply for the other parent to cover his or her
                share. Read more about{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/s%C3%A6rtilskudd">
                    extraordinary child support (text in Norwegian)
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
    </Artikkel>
);

export default HvisDuErEnsligForsorgerEnglish;
