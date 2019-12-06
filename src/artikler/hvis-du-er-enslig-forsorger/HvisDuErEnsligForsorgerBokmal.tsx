import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiBokmal} from "../andre-muligheter/AndreMuligheter";

const HvisDuErEnsligForsorgerBokmal = () => (
    <Artikkel
        tittel="Hvis du er enslig forsørger"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiBokmal}
    >
        <Innholdstittel>Hvis du er enslig forsørger</Innholdstittel>
        <Normaltekst>
            Det er flere stønader og ordninger som kan være aktuelle for deg som
            er enslig mor eller far.
        </Normaltekst>
        <Ekspanderbartpanel tittel="Utvidet barnetrygd" border>
            <Normaltekst>
                Du kan ha rett til barnetrygd for ett barn mer enn du faktisk
                bor sammen med hvis du bor alene med barn. Les mer om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barnetrygd+og+kontantstotte/barnetrygd--156">
                    utvidet barnetrygd
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Overgangsstønad" border>
            <Normaltekst>
                Du kan ha rett til overgangsstønad hvis du ikke har mulighet til
                å forsørge deg selv på grunn av omsorg for barnet. Les mer om
                <Lenke href="https://www.nav.no/no/Person/Familie/Enslig+mor+eller+far/Overgangsst%C3%B8nad.1039.cms">
                    overgangsstønad
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Stønad til barnetilsyn" border>
            <Normaltekst>
                Stønad til barnetilsyn skal dekke deler av kostnadene til
                barnetilsyn på grunn av arbeid. Les mer om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Enslig+mor+eller+far/Nynorsk/barnetilsyn+p%C3%A5+grunn+av+arbeid">
                    stønad til barnetilsyn
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Tilleggsstønader" border>
            <Normaltekst>
                Du kan ha rett til helt eller delvis få dekket utgifter du har
                hvis du gjennomfører nødvendig og hensiktsmessig utdanning, er
                registrert hos NAV som reell arbeidssøker, eller hvis du må
                flytte for å komme i arbeid. Les mer om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Enslig+mor+eller+far/Tilleggsst%C3%B8nader+og+st%C3%B8nad+til+skolepenger">
                    tilleggsstønader og stønad til skolepenger
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Barnebidrag" border>
            <Normaltekst>
                Hvis foreldrene til et barn ikke bor sammen, må den som ikke har
                barnet boende hos seg betale sin andel som barnebidrag til den
                andre. Det kan også være aktuelt å betale barnebidrag når barnet
                har delt bosted. Les mer om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/Barnebidrag/Barnebidrag">
                    barnebidrag
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Bidragsforskudd" border>
            <Normaltekst>
                Bidragsforskudd fra NAV skal sikre at barn får et beløp hver
                måned hvis barnebidraget av ulike årsaker ikke blir betalt. Les
                mer om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/bidragsforskudd">
                    bidragsforskudd
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Særtilskudd" border>
            <Normaltekst>
                Ved spesielle utgifter som tannregulering, konfirmasjon og
                briller, kan forelderen med utgiftene søke om at den andre
                betaler sin del. Les mer om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/s%C3%A6rtilskudd">
                    særtilskudd
                </Lenke>
                .
            </Normaltekst>
        </Ekspanderbartpanel>
    </Artikkel>
);

export default HvisDuErEnsligForsorgerBokmal;
