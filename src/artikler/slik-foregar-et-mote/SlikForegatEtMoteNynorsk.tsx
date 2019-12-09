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
import {andreMuligheterBrodsmulestiNynorsk} from "../andre-muligheter/AndreMuligheter";

const SlikForegatEtMoteNynorsk: React.FC = () => {
    return (
        <Artikkel
            tittel="Når du må snakkke med nokon"
            illustrasjon={<Veiskilt className="sentrert_illustrasjon" />}
            foreldreside={andreMuligheterBrodsmulestiNynorsk}
        >
            <Innholdstittel>Korleis føregår eit møte?</Innholdstittel>
            <Ingress>
                Dersom du søkjer om økonomisk sosialhjelp, blir du vanlegvis
                innkalla til ein samtale med ein rettleiar. Du kan òg kontakte
                NAV-kontoret ditt og avtale eit møte.
            </Ingress>
            <br />
            <Normaltekst>
                Det kan hende du er usikker før det første møtet hjå NAV, og
                lurer på kor mykje du må fortelle om situasjonen din. Dersom du
                ønskjer det, kan du ta med deg ein person du har tillit til.
            </Normaltekst>
            <br />
            <Normaltekst>
                I møtet vil vi stille deg nokre spørsmål for å finne ut kva
                behov du har.
            </Normaltekst>
            <br />

            <Ekspanderbartpanel tittel="Døme på spørsmål" border>
                <>
                    <div className="typo-normal">
                        <ul>
                            <li>
                                Går du på skule? Er du under utdanning? Jobbar
                                du?
                            </li>
                            <li>Kva inntekter og utgifter har du?</li>
                            <li>Har du pengar i banken? Har du gjeld?</li>
                            <li>Korleis bur du og kven bur du saman med?</li>
                            <li>
                                Korleis ser den samla økonomiske situasjonen i
                                hushaldet ditt ut? Har du ektefelle, sambuar
                                eller heimebuande barn? Korleis er deira
                                økonomiske situasjon?
                            </li>
                            <li>
                                Har du barn? Kva behov har dei? Går dei i
                                barnehage eller skule? Deltek barna i
                                aktivitetar?
                            </li>
                            <li>Har du lese- og skrivevanskar?</li>
                            <li>
                                Har du har kontakt med andre hjelpeinstansar,
                                til dømes oppfølgingstenesta (OT),
                                distriktspsykiatrisk senter (DPS) eller
                                barnevernet?
                            </li>
                            <li>
                                Kva andre inntektsmoglegheiter har du forsøkt?
                            </li>
                            <li>
                                Kva løysingar ser du sjølv føre deg på dei
                                utfordringane du har?
                            </li>
                        </ul>
                    </div>
                    <Undertittel>
                        Dersom du ikkje har ein fast stad å bu, kan du få
                        spørsmål om
                    </Undertittel>
                    <div className="typo-normal">
                        <ul>
                            <li>
                                kor du oppheld deg og kor lenge du har oppheldt
                                deg der
                            </li>
                            <li>
                                du har vore i kontakt med eit NAV-kontor i ein
                                annan kommune og kva hjelp du har fått derifrå
                            </li>
                            <li>
                                du treng eit midlertidig butilbod. Då vil du
                                kunne få spørsmål om familie og nettverk for å
                                finne ut kva andre moglegheiter du har.
                            </li>
                        </ul>
                    </div>
                </>
            </Ekspanderbartpanel>

            <br />
            <Normaltekst>
                Når vi veit kva du treng hjelp til, lagar vi ein plan saman med
                deg som vil hjelpe deg vidare.
            </Normaltekst>
            <br />
            <Normaltekst>
                Dersom du skal søkje økonomisk sosialhjelp, bør du ha med deg{" "}
                <Lenke href="./dette-bor-du-vite?lang=nn">dokumentasjon</Lenke>{" "}
                til møtet.
            </Normaltekst>
            <br />
            <Normaltekst>
                Dersom du slit med noko i livet ditt, psykisk helse, rus,
                familiesituasjon eller andre ting, bør du seie noko om det. Då
                kan vi gi deg betre hjelp.
            </Normaltekst>
            <br />
            <Normaltekst>
                Dersom du går på vidaregåande skule og er i konflikt med
                foreldra dine, kan det vere vi tilbyr ein samtale med deg og
                foreldra dine.
            </Normaltekst>
            <br />
            <Normaltekst>
                Om du ikkje snakkar eller forstår norsk må du gi oss beskjed,
                slik at vi kan bestille språktolk til samtalen.
            </Normaltekst>
            <br />
            <Normaltekst>Alle som jobbar i NAV har teieplikt.</Normaltekst>
        </Artikkel>
    );
};

export default SlikForegatEtMoteNynorsk;
