import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiBokmal} from "../andre-muligheter/AndreMuligheter";

const HvisDuHarBarnBokmal = () => (
    <Artikkel
        tittel="Hvis du har barn"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiBokmal}
    >
        <Innholdstittel>Hvis du har barn</Innholdstittel>
        <Normaltekst>
            Hvis du har barn er det egne plikter og ordninger som gjelder.
        </Normaltekst>
        <br />
        <Ekspanderbartpanel tittel="Forsørgelsesplikt" border>
            <Undertittel tag="h3">Når du har barn</Undertittel>
            <br />
            <Normaltekst>
                Du har som forelder plikt til å forsørge dine mindreårige barn,
                selv om de ikke bor sammen med deg. Hvis økonomien tilsier det,
                kan du som forelder bli pålagt å forsørge barn over 18 år som
                følger ordinær skolegang.
            </Normaltekst>
            <br />
            <Normaltekst>
                Barn over 18 år har rett til å bli vurdert selvstendig med
                hensyn til beregning av økonomisk stønad.
            </Normaltekst>
            <br />
            <Normaltekst>
                Barn har ikke plikt til å forsørge foreldre eller søsken.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Når dere er samboere</Undertittel>
            <br />
            <Normaltekst>
                Foreldre i et samboerforhold med felles barn har plikt til å
                forsørge barna etter økonomisk evne. Dette betyr at dere normalt
                ikke kan søke om økonomisk sosialhjelp til å forsørge felles
                barn hvis en av dere har tilstrekkelige inntekter til å forsørge
                barna alene. I familier med særkullsbarn kan situasjonen være
                slik at deler av familien blir vurdert for seg.
            </Normaltekst>
            <br />
            <Normaltekst>
                Hvis du ikke bor sammen med egne barn, skal utgifter til samvær
                inngå i livsoppholdet. Stønad til samvær blir vurdert ut fra
                samværets omfang.
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel
            tittel="Redusert betaling for barnehage og SFO"
            border
        >
            <Normaltekst>
                Hvis du har lav inntekt, kan du søke kommunen om få redusert
                utgiftene til barnehageplass.
            </Normaltekst>
            <br />
            <Normaltekst>
                Hvor mye du kan få redusert betalingen varierer fra kommune til
                kommune. I noen kommuner kan du søke om helt fritak for
                foreldrebetalingen.
            </Normaltekst>
            <br />
            <Normaltekst>
                Du kan også søke om redusert betaling for opphold i
                skolefritidsordning (SFO) eller aktivitetsskole i enkelte
                kommuner.
            </Normaltekst>
            <br />
            <Normaltekst>
                Disse tjenestene er organisert forskjellig i kommunene. Ta
                kontakt med kommunen din, eller snakk med barnehagen om hvor du
                skal henvende deg.
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Ferie og fritidstilbud" border>
            <Normaltekst>
                Har du barn som trenger å være med på fritidsaktiviteter, men
                har ikke råd på grunn av familiens økonomi? Kontakt NAV-kontoret
                og sjekk mulighetene for støtte til ferie og fritidstilbud.
                Under finner du også noen nyttige tips.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Opplevelseskort</Undertittel>
            <br />
            <Normaltekst>
                Opplevelseskortet gir barn og unge gratis adgang til kultur- og
                fritidsaktiviteter. Kontingent til trening, svømmehall, kino og
                lekeland er eksempler på aktiviteter. Tilbudene varierer fra
                kommune til kommune. Finn ut om din kommune tilbyr{" "}
                <Lenke href="https://opplevelseskortet.no/vaare-kommuner/">
                    opplevelseskort
                </Lenke>
                . Du skal vanligvis kontakte NAV-kontoret ditt, slik at de kan
                vurdere situasjonen din. I noen kommuner skal du kontakte
                barneverntjenesten, helsestasjonen eller andre instanser.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Ferie for alle</Undertittel>
            <br />
            <Normaltekst>
                Ferie for alle er et gratis tilbud til familier som trenger en
                aktiv ferieopplevelse for hele familien. Tilbudet foregår i
                skoleferiene og Røde Kors er arrangør. Ta kontakt med
                NAV-kontoret ditt, skolehelsetjenesten eller barneverntjenesten.
                De vurderer situasjonen din og hjelper deg å søke om plass. Se{" "}
                <Lenke href="https://www.rodekors.no/tilbudene/ferie-for-alle/">
                    Røde Kors
                </Lenke>{" "}
                for hvilke tilbud som finnes.
            </Normaltekst>
            <br />
            <Undertittel tag="h3">Feriesentralen</Undertittel>
            <br />
            <Normaltekst>
                Privatpersoner og forskjellige aktører legger inn tips om
                aktiviteter og arrangementer på{" "}
                <Lenke href="http://feriesentralen.no/">
                    feriesentralen.no
                </Lenke>
                . Det kan være utlån av private hytter, gratis billetter til
                arrangementer med mer. Du kan også legge inn dine aktivitets- og
                ferieønsker, for eksempel låne eller leie en hytte eller
                campingvogn.
            </Normaltekst>
        </Ekspanderbartpanel>
    </Artikkel>
);

export default HvisDuHarBarnBokmal;
