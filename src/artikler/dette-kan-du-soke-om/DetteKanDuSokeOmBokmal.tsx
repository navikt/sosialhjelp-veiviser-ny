import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";
import "../artikkel.less";

const DetteKanDuSokeOmBokmal: React.FC = () => {
    return (
        <Artikkel
            tittel="Dette kan du søke om"
            illustrasjon={
                <IllustrasjonBygningPerson className="illustrasjon" />
            }
        >
            <Innholdstittel>Dette kan du søke om</Innholdstittel>
            <Normaltekst>
                Vi vurderer sammen med deg behovet ditt for økonomisk
                sosialhjelp. Hvor mye du kan få i stønad er avhengig av din
                familiesituasjon, antall personer som hører til husholdningen,
                bosituasjonen med mer. Vi fastsetter stønaden etter en
                individuell vurdering i hver enkelt sak.
            </Normaltekst>

            <Undertittel>Utgifter du kan søke om å få hjelp med</Undertittel>

            <Normaltekst>
                Du kan søke om å få hjelp med utgifter til
            </Normaltekst>

            <Ekspanderbartpanel tittel="å leve" border>
                <Normaltekst>
                    De helt grunnleggende behovene som mat, klær, bolig og
                    oppvarming omtaler vi ofte som livsopphold når vi gjør et
                    vedtak om sosialhjelp.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Også utgifter til fritidsaktiviteter, telefoni, tv,
                    internett, transport og helse- og tannbehandling regner NAV
                    som en del av livsoppholdet. Vi ser også på om du har
                    særlige ekstrautgifter som vi bør ta hensyn til. Vi legger
                    særlig vekt på barn og unges behov.
                </Normaltekst>
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="å bo" border>
                <Undertittel tag="h3">Boutgifter og strømutgifter</Undertittel>
                <br />
                <Normaltekst>
                    Du kan søke om å få dekket løpende utgifter til bolig, som
                    husleie, kommunale avgifter, faste utgifter i borettslag,
                    sameie og lignende, og betaling av renter på boliglån. Har
                    du boliglån vil vi be deg søke banken om en periode der du
                    ikke betaler avdrag.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Du kan også søke om å få dekket løpende utgifter til strøm
                    og oppvarming.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Hvis boutgiftene dine er så høye at du ikke er i stand til å
                    betjene dem med de inntektene du har eller kan forvente å
                    få, kan vi stille krav om at du må redusere boutgiftene
                    dine. Det kan bety at du må flytte til en rimeligere bolig.
                    I slike situasjoner er det viktig å ta hensyn til det
                    behovet barn og unge har for å holde på nettverket sitt.
                </Normaltekst>
                <br />
                <Undertittel tag="h3">Flytting</Undertittel>
                <br />
                <Normaltekst>
                    NAV kan vurdere å gi stønad til nødvendige utgifter til
                    flytting. Særlig aktuelt er dette hvis det er NAV-kontoret
                    som har pålagt deg å flytte for å redusere boutgiftene,
                    eller hvis det er andre særskilte grunner til at du må
                    flytte.
                </Normaltekst>
                <br />
                <Undertittel tag="h3">Innbo og utstyr</Undertittel>
                <br />
                <Normaltekst>
                    Du kan søke om stønad til det mest nødvendige av innbo og
                    utstyr til å bo i en bolig, hvis du ikke har økonomi til å
                    skaffe dette på andre måter. NAV vurderer hva som er
                    nødvendig utstyr ut fra individuelle behov, livssituasjon,
                    alder og størrelsen på husstanden din. Standarden skal være
                    nøktern og rimelig.
                </Normaltekst>
                <br />
                <Undertittel tag="h3">
                    Depositum og garanti for depositum
                </Undertittel>
                <br />
                <Normaltekst>
                    En utleier av en leiebolig krever normalt sikkerhet for ikke
                    betalt leie, skader og andre krav som følger av leieavtalen.
                    Du kan søke om stønad til depositum når du inngår en
                    leiekontrakt hvis du ikke har mulighet til å skaffe dette på
                    andre måter. NAV gir vanligvis hjelp i form av garanti for
                    depositum, men NAV kan også gi økonomisk stønad til
                    depositum på en sperret depositumskonto.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Når NAV gir garanti for depositum blir det ikke utbetalt
                    penger. NAV skriver et garantidokument til utleier. Hvilke
                    krav garantien dekker kan variere fra kommune til kommune.
                    Hvis hele eller deler av garantien eller depositumet blir
                    utbetalt, vil dette normalt bli et lån som du må
                    tilbakebetale. NAV vil da vurdere din tilbakebetalingsevne.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Partene i leieforholdet er utleier og leietager og dette
                    blir ikke endret selv om NAV har gitt hjelp til depositum
                    eller garanti for depositum.
                </Normaltekst>
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="helse og tannbehandling" border>
                <Normaltekst>
                    Utgifter til lege, psykolog, tannlege, viktige legemidler og
                    syns- og hørselshjelpemidler kan i noen tilfeller bli dekket
                    gjennom folketrygdloven ved Helfo. Du har i utgangspunktet
                    ikke rett til å få dekket utgifter til alternative
                    behandlingstyper, behandlingsformer eller behandlingssteder
                    som ikke er innenfor den offentlige helsetjenesten og
                    folketrygdloven. Du kan lese mer om egenandeler og betaling
                    for helse- og tannlegetjenester på
                    <Lenke href="https://helsenorge.no/betaling-for-helsetjenester/frikort-for-helsetjenester">
                        helsenorge.no
                    </Lenke>
                    .
                </Normaltekst>
                <br />
                <Undertittel tag="h3">
                    Om dekning av utgifter til tannbehandling
                </Undertittel>
                <br />
                <Normaltekst>
                    Som hovedregel må voksne betale utgiftene til tannbehandling
                    selv, men det finnes enkelte unntak hvis du har visse
                    sykdommer, tilstander eller skader. Tannlegen skal vurdere
                    om du faller inn under noen av disse unntakene, og derfor
                    kan ha rett på støtte fra Helfo.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Hvis du har problemer med å betale regningen, kan du høre
                    med tannlegen din om det er mulig å lage en behandlingsplan
                    med nedbetalingsavtale. Hvis du ikke har krav på støtte fra
                    Helfo til tannbehandling, og du heller ikke har økonomi til
                    å få laget en nedbetalingsavtale, kan du søke NAV om å få
                    dekket disse utgiftene helt eller delvis.
                </Normaltekst>
                <br />
                <Normaltekst>
                    For at vi skal kunne vurdere saken din, må du legge ved
                    nødvendig dokumentasjon. I tillegg til dokumentasjon på
                    inntekter, utgifter og formue, trenger NAV et
                    kostnadsoverslag på hva behandlingen koster og eventuelt
                    røntgenbilder og en uttalelse fra tannlegen om behandlingen.{" "}
                    <Lenke href="https://www.hvakostertannlegen.no/">
                        Prisene kan variere
                    </Lenke>{" "}
                    fra tannlege til tannlege, og NAV kan begrense stønaden til
                    å dekke et rimelig behandlingsalternativ.
                </Normaltekst>
                <br />
                <Normaltekst>
                    Ved akutt tannbehandling må du legge ved faktura og en
                    uttalelse fra tannlegen.
                </Normaltekst>
            </Ekspanderbartpanel>

            <Undertittel>Har du gjeldsproblemer?</Undertittel>

            <Normaltekst>
                Du kan i utgangspunktet ikke få dekket utgifter til gjeld. Hvis
                du har gjeld, kan du få økonomisk rådgivning og hjelp til å
                inngå avtale med kreditor. Hjelpen kan blant annet bestå i å
                inngå avtale om en nedbetalingsplan, endrede lånevilkår eller
                betalingsutsettelse.
            </Normaltekst>
            <br />
            <Normaltekst>
                I enkelte tilfeller kan NAV vurdere å dekke utgifter til gjeld,
                for eksempel når det er fare for å miste strømmen eller boligen
                og det ikke finnes andre muligheter for å forhindre dette.
            </Normaltekst>

            <Undertittel>Hvordan søker du?</Undertittel>
            <Normaltekst>
                Du skal søke til NAV-kontoret der du bor. Stadig flere kommuner
                kan ta i mot digitale søknader. Hvis du ikke skal søke digitalt,
                kan du søke med kommunens papirskjema.
            </Normaltekst>
            <Normaltekst>
                <Lenke href={"/sosialhjelp/slik-soker-du"}>Søk her.</Lenke>
                <br />
                <br />
                For mer informasjon, se{" "}
                <Lenke href={"/sosialhjelp/dette-bor-du-vite"}>
                    dette bør du vite før du søker
                </Lenke>
                .
            </Normaltekst>
        </Artikkel>
    );
};

export default DetteKanDuSokeOmBokmal;
