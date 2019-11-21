import * as React from "react";
import "../artikkel.less";
import {Normaltekst, Sidetittel, Undertittel} from "nav-frontend-typografi";

import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";
import {detteKanDuSokeOmSprak} from "./DetteKanDuSokeOm";

const DetteKanDuSokeOmNynorsk: React.FC = () => {

    return (
        <Artikkel
            tittel="Dette kan du søkje om"
            illustrasjon={<IllustrasjonBygningPerson className="illustrasjon"/>}
            sprak={detteKanDuSokeOmSprak}
        >

            <Normaltekst>
                Vi vurderer saman med deg kva behovet ditt er for økonomisk sosialhjelp.
                Kor mykje du kan få i stønad er avhengig av din familiesituasjon, talet
                på personar som høyrer til hushaldet, butilhøve, med meir. Vi fastset
                stønaden etter ei individuell vurdering i kvar enkelt sak. Under ser du
                døme på kva du kan søkje NAV-kontoret ditt om.
            </Normaltekst>

            <Undertittel>Utgifter du kan søke om å få hjelp med</Undertittel>

            <Normaltekst>
                Du kan søke om å få hjelp med utgifter til
            </Normaltekst>

            <Ekspanderbartpanel tittel="å leve" border>
                Panelet vil da ekspandere og vise innholdet.
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="å bo" border>
                Panelet vil da ekspandere og vise innholdet.
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="helse og tannbehandling" border>
                Panelet vil da ekspandere og vise innholdet.
            </Ekspanderbartpanel>

            <Undertittel>Har du gjeldsproblemer?</Undertittel>

            <Normaltekst>
                Du kan i utgangspunktet ikke få dekket utgifter til gjeld. Hvis du har gjeld, kan du
                få økonomisk rådgivning og hjelp til å inngå avtale med kreditor.
                Hjelpen kan blant annet bestå i å inngå avtale om en nedbetalingsplan,
                endrede lånevilkår eller betalingsutsettelse.
            </Normaltekst>
            <br/>
            <Normaltekst>
                I enkelte tilfeller kan NAV vurdere å dekke utgifter til gjeld, for eksempel
                når det er fare for å miste strømmen eller boligen og det ikke
                finnes andre muligheter for å forhindre dette.
            </Normaltekst>

            <Undertittel>Hvordan søker du?</Undertittel>
            <Normaltekst>
                Du skal søke til NAV-kontoret der du bor. Stadig flere kommuner kan ta i mot digitale
                søknader. Hvis du ikke skal søke digitalt, kan du søke med kommunens papirskjema.
            </Normaltekst>
            <Normaltekst>
                <Lenke href={"todo"}>Søk her.</Lenke>
                <br/>
                <br/>
                For mer informasjon, se <Lenke href={"todo"}>dette bør du vite før du søker</Lenke>.
            </Normaltekst>
        </Artikkel>
    );
};

export default DetteKanDuSokeOmNynorsk;
