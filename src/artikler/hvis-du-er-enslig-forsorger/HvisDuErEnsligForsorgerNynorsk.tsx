import * as React from "react";
import {Innholdstittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";
import {andreMuligheterBrodsmulestiNynorsk} from "../andre-muligheter/AndreMuligheter";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const HvisDuErEnsligForsorgerNynorsk = () => (
    <Artikkel
        tittel="Dersom du er einsleg forsørgjar"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiNynorsk}
    >
        <Innholdstittel>Dersom du er einsleg forsørgjar</Innholdstittel>

        <Avsnitt>
            Det er fleire stønadar og ordningar som kan vere aktuelle for deg
            som er einsleg mor eller far.
        </Avsnitt>

        <Ekspanderbartpanel tittel="Utvida barnetrygd" border>
            <Avsnitt>
                Du kan ha rett til barnetrygd for eitt barn meir enn du faktisk
                bur saman med om du bur aleine med barn. Les meir om{" "}
                <Lenke href="https://www.nav.no/no/person/familie/barnetrygd-og-kontantstotte/barnetrygd#chapter-2">
                    utvida barnetrygd
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Overgangsstønad" border>
            <Avsnitt>
                Du kan ha rett til overgangsstønad om du ikkje har moglegheit
                til å forsørgje deg sjølv på grunn av omsorg for barnet. Les
                meir om {" "}
                <Lenke href="https://www.nav.no/familie/alene-med-barn/overgangsstonad">
                    overgangsstønad
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Stønad til barnetilsyn" border>
            <Avsnitt>
                Stønad til barnetilsyn skal dekkje deler av kostnadene til
                barnetilsyn på grunn av arbeid. Les meir om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Enslig+mor+eller+far/Nynorsk/barnetilsyn+p%C3%A5+grunn+av+arbeid">
                    stønad til barnetilsyn
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Tilleggsstønader" border>
            <Avsnitt>
                Du kan ha rett til å heilt eller delvis få dekt utgifter du har
                om du gjennomfører nødvendig og hensiktsmessig utdanning, er
                registrert hos NAV som reell arbeidssøkjar, eller om du må
                flytte for å komme i arbeid. Les meir om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Enslig+mor+eller+far/Tilleggsst%C3%B8nader+og+st%C3%B8nad+til+skolepenger">
                    tilleggsstønader og stønad til skulepengar
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Barnebidrag" border>
            <Avsnitt>
                Dersom foreldra til eit barn ikkje bur saman, må den som ikkje
                har barnet buande hos seg betale sin del som barnebidraget til
                den andre. Det kan òg vere aktuelt å betale barnebidrag når
                barnet har delt bustad. Les meir om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/Barnebidrag/Barnebidrag">
                    barnebidrag
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Bidragsforskot" border>
            <Avsnitt>
                Bidragsforskot frå NAV skal sikre at barn får eit beløp kvar
                månad om barnebidraget av ulike grunnar ikkje blir betalt. Les
                meir om{" "}
                <Lenke href="https://www.nav.no/no/person/familie/barne-og-ektefellebidrag/bidragsforskudd">
                    bidragsforskot
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
        <Ekspanderbartpanel tittel="Særtilskot" border>
            <Avsnitt>
                Ved særskilde utgifter som tannregulering, konfirmasjon og
                briller, kan forelderen med utgiftene søkje om at den andre
                betaler sin del. Les meir om{" "}
                <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/s%C3%A6rtilskudd">
                    særtilskot
                </Lenke>
                .
            </Avsnitt>
        </Ekspanderbartpanel>
    </Artikkel>
);

export default HvisDuErEnsligForsorgerNynorsk;
