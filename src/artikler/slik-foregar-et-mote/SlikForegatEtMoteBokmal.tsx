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
import {andreMuligheterBrodsmulestiBokmal} from "../andre-muligheter/AndreMuligheter";

const SlikForegatEtMoteBokmal: React.FC = () => {
    return (
        <Artikkel
            tittel="Slik foregår et møte med oss"
            illustrasjon={<Veiskilt className="sentrert_illustrasjon" />}
            foreldreside={andreMuligheterBrodsmulestiBokmal}
        >
            <Innholdstittel>Slik foregår et møte med oss</Innholdstittel>
            <Ingress>
                Hvis du søker om økonomisk sosialhjelp, blir du vanligvis
                innkalt til en samtale med en veileder. Du kan også kontakte
                NAV-kontoret ditt og avtale et møte.
            </Ingress>

            <br />

            <Normaltekst>
                Det kan hende du er usikker før det første møtet hos NAV, og
                lurer på hvor mye du må fortelle om situasjonen din. Hvis du
                ønsker det, kan du ta med deg en person du har tillit til.
            </Normaltekst>

            <br />

            <Normaltekst>
                I møtet vil vi stille deg noen spørsmål for å finne ut hvilke
                behov du har.
            </Normaltekst>

            <br />

            <Ekspanderbartpanel tittel="Eksempler på spørsmål" border>
                <div className="typo-normal">
                    <ul>
                        <li>
                            Går du på skole? Er du under utdanning? Jobber du?
                        </li>
                        <li>Hvilke inntekter og utgifter har du?</li>
                        <li>Har du penger i banken? Har du gjeld?</li>
                        <li>Hvordan bor du og hvem bor du sammen med?</li>
                        <li>
                            Hvordan ser den samlede økonomiske situasjonen i
                            husholdningen din ut? Har du ektefelle, samboer
                            eller hjemmeboende barn? Hvordan er deres økonomiske
                            situasjon?
                        </li>
                        <li>
                            Har du barn? Hvilke behov har de? Går de i barnehage
                            eller skole? Deltar barna i aktiviteter?
                        </li>
                        <li>Har du lese- og skrivevansker?</li>
                        <li>
                            Har du har kontakt med andre hjelpeinstanser, for
                            eksempel oppfølgingstjenesten (OT),
                            distriktspsykiatrisk senter (DPS) eller barnevernet?
                        </li>
                        <li>Hvilke andre inntektsmuligheter har du forsøkt?</li>
                        <li>
                            Hvilke løsninger ser du selv for deg på de
                            utfordringene du har?
                        </li>
                    </ul>
                </div>
                <Undertittel>
                    Hvis du ikke har et fast sted å bo, kan du få spørsmål om
                </Undertittel>
                <div className="typo-normal">
                    <ul>
                        <li>
                            hvor du oppholder deg og hvor lenge du har oppholdt
                            deg der
                        </li>
                        <li>
                            du har vært i kontakt med et NAV-kontor i annen
                            kommune og hvilken hjelp du har fått derfra
                        </li>
                        <li>
                            du trenger et midlertidig botilbud. Da vil du kunne
                            få spørsmål om familie og nettverk for å finne ut
                            hvilke andre muligheter du har.
                        </li>
                    </ul>
                </div>
            </Ekspanderbartpanel>

            <br />

            <Normaltekst>
                Når vi vet hva du trenger hjelp til, lager vi en plan sammen med
                deg som vil hjelpe deg videre.
            </Normaltekst>

            <br />

            <Normaltekst>
                Hvis du skal søke økonomisk sosialhjelp, så bør du ha med deg{" "}
                <Lenke href="./dette-bor-du-vite">dokumentasjon</Lenke> til
                møtet.
            </Normaltekst>

            <br />

            <Normaltekst>
                Hvis du sliter med noe i livet ditt, psykisk helse, rus,
                familiesituasjon eller andre ting, bør du si noe om det. Da kan
                vi gi deg bedre hjelp.
            </Normaltekst>

            <br />

            <Normaltekst>
                Hvis du går på videregående skole og er i konflikt med
                foreldrene dine, kan det være vi tilbyr en samtale med deg og
                foreldrene dine.
            </Normaltekst>

            <br />

            <Normaltekst>
                Hvis du ikke snakker eller forstår norsk må du gi oss beskjed,
                slik at vi kan bestille språktolk til samtalen.
            </Normaltekst>

            <br />

            <Normaltekst>Alle som jobber i NAV har taushetsplikt.</Normaltekst>
        </Artikkel>
    );
};

export default SlikForegatEtMoteBokmal;
