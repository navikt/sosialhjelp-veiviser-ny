import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiEngelsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuHarBarnEnglish = () => (
    <Artikkel
        tittel="If you have children"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiEngelsk}
    >
        <Innholdstittel>If you have children</Innholdstittel>
        <Normaltekst>
            If you have children, other obligations and arrangements apply.
        </Normaltekst>
        <br />
        <Ekspanderbartpanel tittel="Obligation to provide" border>
            <Undertittel tag="h3">When you have children</Undertittel>
            <br />
            <Normaltekst>
                As a parent, you have an obligation to provide for your children
                as long as they are minors, even when they do not live with you.
                If your financial situation permits it, you may, as a parent,
                also be ordered to provide for children older than 18, provided
                they are still enrolled in an ordinary education programme.
            </Normaltekst>
            <br />
            <Normaltekst>
                Children older than 18 have the right to have their situation
                assessed on an individual basis in terms of social assistance.
            </Normaltekst>
            <br />
            <Normaltekst>
                Children do not have an obligation to provide for their parents
                or siblings.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">When you live together</Undertittel>
            <br />
            <Normaltekst>
                Parents who are cohabitants with joint children have an
                obligation to provide for their children within the framework of
                their financial situation. This means that you will normally not
                qualify for financial assistance in providing for your joint
                child or children if one of you has sufficient income to provide
                for the children on their own. In families where one or both
                parents have children from previous relationships, parts of the
                family may be assessed separately.
            </Normaltekst>
            <br />
            <Normaltekst>
                If you do not live with your children, expenses you incur in
                connection with contact will be included in your subsistence
                needs. Assistance for contact will be assessed on the basis of
                the scope of the contact.
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel
            tittel="Reduction in kindergarten and SFO costs"
            border
        >
            <Normaltekst>
                If your income is low, you may apply to the municipality to
                reduce your kindergarten payments.
            </Normaltekst>
            <br />
            <Normaltekst>
                How much your payment can be reduced will vary from municipality
                to municipality. Some municipalities will accept applications to
                be exempt from kindergarten payments.
            </Normaltekst>
            <br />
            <Normaltekst>
                You may also apply for a reduction in payments for day care for
                school-aged children (SFO) or after school care programmes (AKS)
                in certain municipalities.
            </Normaltekst>
            <br />
            <Normaltekst>
                These services vary from municipality to municipality. Contact
                your municipality or talk to your kindergarten about whom to
                contact.
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Holiday and laisure time activities" border>
            <Normaltekst>
                Do you have children who need to participate in leisure time
                activieis, but you cannot afford it given your family’s
                financial situation? Contact your NAV office to learn more about
                support for holiday and leisure time activities. There are also
                some useful tips below.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Experience Card</Undertittel>
            <br />
            <Normaltekst>
                The Experience Card gives children and youths free access to
                cultural and leisure time activities. Training fees and swimming
                pool, cinema and activity centre entrance are examples of
                activities the card covers. Services vary from municipality to
                municipality. Find out if your municipality offers{" "}
                <Lenke href="https://opplevelseskortet.no/kommune/">
                    an Experience Card
                </Lenke>
                . Normally, you will be asked to contact your NAV office, so
                that they can assess your situation. In some municipalities, you
                will instead be asked to contact child welfare services, the
                health clinic or other bodies.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Holidays for all</Undertittel>
            <br />
            <Normaltekst>
                Holidays for all is a free service for families who need an
                active holiday experience for the whole family. The service is
                available in school holidays and is organized by the Red Cross.
                Contact your local NAV office, school health services or child
                welfare services. They will assess your situation and help you
                apply. Go to{" "}
                <Lenke href="https://www.rodekors.no/tilbudene/ferie-for-alle/">
                    the Red Cross website
                </Lenke>{" "}
                to read more about the services offered.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">
                Feriesentralen - a holiday central
            </Undertittel>
            <br />
            <Normaltekst>
                Private individuals and various organizations post tips about
                activities and events at{" "}
                <Lenke href="http://feriesentralen.no/">
                    feriesentralen.no
                </Lenke>
                . This may include people lending out their private cabins, free
                tickets to events, etc. You can also go there to post your
                requests for activities or holiday wishes, such as wanting to
                borrow or rent a cabin or caravan, etc.
            </Normaltekst>
        </Ekspanderbartpanel>
    </Artikkel>
);

export default HvisDuHarBarnEnglish;
