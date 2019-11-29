import * as React from "react";
import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";

const DetteKanDuSokeOmEnglish: React.FC = () => {

    return (
        <Artikkel
            tittel="What can financial assistance cover?"
            illustrasjon={<IllustrasjonBygningPerson className="illustrasjon"/>}
        >

            <Normaltekst>
                We will work with you to find out what your financial assistance needs are.
                How much financial assistance you qualify for will depend on your family
                situation, the number of people in your household, your living situation, etc.
                We assess each individual case separately. Below are some examples of types
                of assistance you can apply for to NAV.
            </Normaltekst>

            <Undertittel>Costs</Undertittel>

            <Ekspanderbartpanel
                tittel="Living costs"
                border={true}
            >
                Panelet vil da ekspandere og vise innholdet.
            </Ekspanderbartpanel>

            <Ekspanderbartpanel
                tittel="Housing costs"
                border={true}
            >
                Panelet vil da ekspandere og vise innholdet.
            </Ekspanderbartpanel>

            <Ekspanderbartpanel
                tittel="Medical and dental costs"
                border={true}
            >
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

export default DetteKanDuSokeOmEnglish;
