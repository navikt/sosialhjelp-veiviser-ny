import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiNynorsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuHarBarnNynorsk = () => (
    <Artikkel
        tittel="Dersom du har barn"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiNynorsk}
    >
        <Innholdstittel>Dersom du har barn</Innholdstittel>
        <Normaltekst>
            Dersom du har barn er det eigne plikter og ordningar som gjelder.
        </Normaltekst>
        <br />
        <Ekspanderbartpanel tittel="Forsørgingsplikt" border>
            <Undertittel tag="h3">Når du har barn</Undertittel>
            <br />
            <Normaltekst>
                Du har som forelder plikt til å forsørgje dine mindreårige barn,
                sjølv om dei ikkje bur saman med deg. Dersom økonomien tilseier
                det, kan du som forelder bli pålagd å forsørgje barn over 18 år
                som følgjer ordinær skulegang.
            </Normaltekst>
            <br />
            <Normaltekst>
                Barn over 18 år har rett til å bli vurdert sjølvstendig med
                omsyn til utrekning av økonomisk stønad.
            </Normaltekst>
            <br />
            <Normaltekst>
                Barn har ikkje plikt til å forsørgje foreldre eller søsken.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Når de er sambuarar</Undertittel>
            <br />
            <Normaltekst>
                Foreldre i eit sambuarforhold med felles barn har plikt til å
                forsørgje barn etter økonomisk evne. Dette betyr at de normalt
                ikkje kan søkje om økonomisk sosialhjelp til å forsørgje felles
                barn om ein av dykk har tilstrekkelege inntekter til å forsørgje
                barna alene. I familiar med særkullsbarn kan situasjonen vere
                slik at deler av familien blir vurdert for seg.
            </Normaltekst>
            <br />
            <Normaltekst>
                Dersom du ikkje bur saman med eigne barn, skal utgifter til
                samvær inngå i livsopphaldet. Stønad til samvær blir vurdert ut
                frå omfanget på samværet.
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel
            tittel="Redusert betaling for barnehage og SFO"
            border
        >
            <Normaltekst>
                Dersom du har låg inntekt, kan du søkje kommunen om få redusert
                utgiftene til barnehageplass.
            </Normaltekst>
            <br />
            <Normaltekst>
                Kor mykje du kan få redusert betalinga varierer frå kommune til
                kommune. I nokre kommunar kan du søkje om heilt fritak for
                foreldrebetalinga.
            </Normaltekst>
            <br />
            <Normaltekst>
                Du kan òg søkje om redusert betaling for opphald i
                skulefritidsordning (SFO) eller aktivitetsskule i enkelte
                kommunar.
            </Normaltekst>
            <br />
            <Normaltekst>
                Tenestene er organisert forskjellig i kommunane. Ta kontakt med
                kommunen din, eller snakk med barnehagen om kor du skal ta
                kontakt.
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Ferie og fritidstilbod" border>
            <Normaltekst>
                Har du barn som treng å vere med på fritidsaktivitetar, men
                ikkje råd på grunn av familiens økonomi? Kontakt NAV-kontoret og
                sjekk moglegheitene for støtte til ferie og fritidstilbod. Under
                finn du òg nokre nyttige tips.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Opplevingskort</Undertittel>
            <br />
            <Normaltekst>
                Opplevingskortet gir barn og unge gratis tilgang til kultur- og
                fritidsaktivitetar. Kontingent til trening, symjehall, kino og
                leikeland er døme på aktivitetar. Tilboda varierer frå kommune
                til kommune. Finn ut om kommunen din tilbyr{" "}
                <Lenke href="https://opplevelseskortet.no/kommune/">
                    opplevingskort
                </Lenke>
                . Du skal vanlegvis kontakte NAV-kontoret ditt, slik at de kan
                vurdere situasjonen din. I nokre kommunar skal du kontakte
                barnevernstenesta, helsestasjonen eller andre instansar.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Ferie for alle</Undertittel>
            <br />
            <Normaltekst>
                Ferie for alle er eit gratis tilbod til familiar som treng ein
                aktiv ferieoppleving for heile familien. Tilbodet føregår i
                skuleferiane og Røde Kors er arrangør. Ta kontakt med
                NAV-kontoret ditt, skulehelsetenesta eller barnevernstenesta.
                Dei vurderer situasjonen din og hjelper deg med å søkje om
                plass. Sjå{" "}
                <Lenke href="https://www.rodekors.no/tilbudene/ferie-for-alle/">
                    Røde Kors
                </Lenke>{" "}
                for kva tilbod som finst.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Feriesentralen</Undertittel>
            <br />
            <Normaltekst>
                Privatpersonar og forskjellige aktørar legg inn tips om
                aktivitetar og arrangement på{" "}
                <Lenke href="http://feriesentralen.no/">
                    feriesentralen.no
                </Lenke>
                . Det kan vere utlån av private hytter, gratis billettar til
                arrangement med meir. Du kan òg leggje inn dine aktivitets- og
                ferieønskje, til dømes låne eller leie en hytte eller
                campingvogn.
            </Normaltekst>
        </Ekspanderbartpanel>
    </Artikkel>
);

export default HvisDuHarBarnNynorsk;
