import * as React from "react";
import {Normaltekst, Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";

const DetteKanDuSokeOmEnglish: React.FC = () => {
    return (
        <Artikkel
            tittel="What can financial assistance cover?"
            illustrasjon={
                <IllustrasjonBygningPerson className="illustrasjon" />
            }
        >
            <Innholdstittel>What can financial assistance cover?</Innholdstittel>
            <Normaltekst>
                We will work with you to find out what your financial assistance
                needs are. How much financial assistance you qualify for will
                depend on your family situation, the number of people in your
                household, your living situation, etc. We assess each individual
                case separately. Below are some examples of types of assistance
                you can apply for to NAV.
            </Normaltekst>

            <Undertittel>Costs</Undertittel>

            <Ekspanderbartpanel tittel="Living costs" border={true}>
                <Normaltekst>
                    Basic needs, such as food, clothing, housing and heating,
                    are often referred to as subsistence needs when we make
                    decisions concerning financial assistance.
                </Normaltekst>
                <br />
                <Normaltekst>
                    NAV also includes costs related to certain hobbies or
                    sports, telephone, TV or Internet costs, transport costs and
                    medical or dental costs when assessing your subsistence
                    needs. We will also consider whether you have any special
                    added expenses we should take into account. We will
                    emphasize the needs of children and youths.
                </Normaltekst>
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="Housing costs" border={true}>
                <Undertittel tag="h3">
                    Housing costs and electricity
                </Undertittel>
                <br />
                <Normaltekst>
                    You may apply for assistance in paying recurrent housing
                    costs, such as rent, municipal charges, fixed costs in a
                    housing cooperative, estate in common, etc., and payment of
                    interest on your mortgage. If you have a mortgage, we will
                    ask you to contact your bank and apply for a grace period
                    where you don’t have to pay instalments.
                </Normaltekst>
                <br />
                <Normaltekst>
                    You may also apply for assistance in paying for heating and
                    electricity.
                </Normaltekst>
                <br />
                <Normaltekst>
                    If your housing costs are so high that you are unable to pay
                    them with your current or expected income, we may require
                    you to reduce your housing costs. This may entail moving to
                    a more affordable home. In such situations, it is important
                    to consider the needs of children and youths in terms of
                    disrupting their social network as little as possible.
                </Normaltekst>
                <br />
                <Undertittel tag="h3">Moving</Undertittel>
                <br />
                <Normaltekst>
                    NAV may consider providing assistance in helping you pay for
                    necessary moving costs. This is particularly relevant if NAV
                    has required you to move to reduce your housing costs, or if
                    there are other special reasons that require you to move.
                </Normaltekst>
                <br />
                <Undertittel tag="h3">Household effects</Undertittel>
                <br />
                <Normaltekst>
                    You may apply for assistance in acquiring the necessities in
                    terms of household effects if you do not have the means to
                    pay for these yourself. NAV will determine what is
                    considered a necessity based on an assessment of individual
                    needs, living situation, age and the number of people in
                    your household. The standard of effects is expected to be
                    modest and reasonable.
                </Normaltekst>
                <br />
                <Undertittel tag="h3">
                    Deposit and deposit guarantee
                </Undertittel>
                <br />
                <Normaltekst>
                    A landlord normally requires a security deposit intended to
                    cover any unpaid rent, damage and other claims under the
                    terms of the lease. You may apply for assistance in covering
                    this security deposit when you sign a lease if you do not
                    have the means to cover it yourself. NAV normally provides
                    this type of assistance in the form of a deposit guarantee,
                    but NAV may also offer financial assistance in the form of a
                    deposit to an escrow account.
                </Normaltekst>
                <br />
                <Normaltekst>
                    When NAV puts up a deposit guarantee, no money is paid.
                    Instead, NAV will issue a guarantee certificate to the
                    landlord. What this guarantee covers will vary from
                    municipality to municipality. If all or part of the
                    guarantee amount or deposit is paid, this will normally be
                    converted to a loan, for which you are liable. NAV will
                    therefore assess your ability to repay such a loan.
                </Normaltekst>
                <br />
                <Normaltekst>
                    The parties to the lease are the landlord and the lessee,
                    and this does not change even if NAV has provided assistance
                    to cover the deposit or issued a deposit guarantee.
                </Normaltekst>
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="Medical and dental costs" border={true}>
                <Normaltekst>
                    Costs incurred in connection with appointments with a
                    physician, psychologist or dentist and acquiring necessary
                    medication or visual or hearing impairment aids may
                    sometimes be covered by the Norwegian Health Economics
                    Administration (Helfo) under the terms of the National
                    Insurance Act. As a norm, costs incurred in connection with
                    alternative types, forms or places of treatment that are not
                    part of the public health service or covered by the National
                    Insurance Act are not eligible for assistance. Read more
                    about user fees and payment for health and dental services
                    at{" "}
                    <Lenke
                        href={
                            "https://helsenorge.no/betaling-for-helsetjenester/frikort-for-helsetjenester"
                        }
                    >
                        helsenorge.no
                    </Lenke>
                    .
                </Normaltekst>
                <br />
                <Undertittel tag="h3">
                    About assistance with dental costs
                </Undertittel>
                <br />
                <Normaltekst>
                    As a norm, adults are expected to cover their own dental
                    costs, but there are certain exceptions if you have certain
                    diseases, conditions or injuries. Your dentist will consider
                    whether any of these exceptions apply to you, and if they
                    do, you may qualify for assistance from Helfo.
                </Normaltekst>
                <br />
                <Normaltekst>
                    If you have a hard time covering the bill, contact your
                    dentist to see if it is possible to devise some sort of
                    payment plan for your treatment. If you do not qualify for
                    assistance from Helfo, and your financial situation makes it
                    impossible to come up with a payment plan, you may apply to
                    NAV for assistance in covering some or all of these costs.
                </Normaltekst>
                <br />
                <Normaltekst>
                    For NAV to be able to assess your case, you must submit all
                    necessary documentation. In addition to documentation of
                    your income, expenses and assets, NAV requires a cost
                    estimate for the treatment, as well as X-ray images, if
                    relevant, and a statement from your dentist about the
                    treatment.{" "}
                    <Lenke href={"https://www.hvakostertannlegen.no/"}>
                        Prices may vary
                    </Lenke>
                    from dentist to dentist, and NAV may limit your application
                    to a reasonable treatment option.
                </Normaltekst>
                <br />
                <Normaltekst>
                    If you had to have emergency dental treatment, you must
                    include the bill and a statement from your dentist.
                </Normaltekst>
            </Ekspanderbartpanel>

            <Undertittel>Do you have trouble paying your debt?</Undertittel>

            <Normaltekst>
                As a norm, social assistance cannot be used to pay debts. If you
                have debts, we can offer financial counselling and help you
                reach an agreement with your creditors. This help may include
                assistance in establishing a payment plan, changing the terms of
                your loan or applying for a grace period.
            </Normaltekst>
            <br />
            <Normaltekst>
                Under special circumstances NAV may consider covering debt
                payment costs, for example when you are at risk of having your
                electricity cut off or losing your home, and there are no other
                ways to prevent this from happening.
            </Normaltekst>

            <Undertittel>How to apply</Undertittel>
            <Normaltekst>
                You must submit your application to the NAV office in the
                municipality where you live. A growing number of municipalities
                support online applications. If your municipality does not
                support online applications, you can contact your local NAV
                office to obtains the paper form.
            </Normaltekst>
            <Normaltekst>
                <Lenke href={"/sosialhjelp/slik-soker-du"}>Apply here</Lenke>.
                <br />
                <br />
                For more information, see{" "}
                <Lenke href={"/sosialhjelp/dette-bor-du-vite?lang=en"}>
                    what you should know before applying
                </Lenke>
                .
            </Normaltekst>
        </Artikkel>
    );
};

export default DetteKanDuSokeOmEnglish;
