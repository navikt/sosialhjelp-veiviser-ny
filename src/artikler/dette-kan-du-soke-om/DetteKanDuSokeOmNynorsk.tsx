import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import {InternLenke} from "../../komponenter/InternLenke";

const DetteKanDuSokeOmNynorsk: React.FC = () => {
    return (
        <Artikkel
            tittel="Dette kan du søkje om"
            illustrasjon={
                <IllustrasjonBygningPerson className="illustrasjon" />
            }
        >
            <Innholdstittel>Dette kan du søkje om</Innholdstittel>
            <Avsnitt>
                Vi vurderer saman med deg kva behovet ditt er for økonomisk
                sosialhjelp. Kor mykje du kan få i stønad er avhengig av din
                familiesituasjon, talet på personar som høyrer til hushaldet,
                butilhøve, med meir. Vi fastset stønaden etter ei individuell
                vurdering i kvar enkelt sak. Under ser du døme på kva du kan
                søkje NAV-kontoret ditt om.
            </Avsnitt>

            <Undertittel>Utgifter du kan søkje om å få hjelp med</Undertittel>

            <Avsnitt>Du kan søkje om å få hjelp med utgifter til</Avsnitt>

            <Ekspanderbartpanel tittel="å leve" border>
                <Avsnitt>
                    Dei heilt grunnleggande behova som mat, klede, bustad og
                    oppvarming omtalar vi ofte som livsopphald når vi behandlar
                    ein søknad om sosialhjelp.
                </Avsnitt>

                <Avsnitt>
                    Også utgifter til fritidsaktiviteter, telefoni, tv,
                    internett, transport og helse- og tannbehandling blir av NAV
                    rekna som en del av livsopphaldet. Vi vurderer òg om du har
                    ekstrautgifter som vi bør ta omsyn til. Ekstrautgifter kan
                    til dømes oppstå ved feiring av spesielle hendelsar og
                    høgtider. Vi legg særleg vekt på barn og unge sine behov.
                </Avsnitt>
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="å bo" border>
                <Undertittel tag="h3">Bu- og straumutgifter</Undertittel>

                <Avsnitt>
                    Du kan søkje om å få dekt laupande utgifter til bustad, som
                    husleige, kommunale avgifter, faste utgifter i burettslag,
                    sameige og liknande, og betaling av renter på bustadlån. Har
                    du bustadlån vil vi be deg søkje banken om ein periode der
                    du ikkje betalar avdrag.
                </Avsnitt>

                <Avsnitt>
                    Du kan òg søkje om å få dekt laupande utgifter til straum og
                    oppvarming.
                </Avsnitt>

                <Avsnitt>
                    Dersom buutgiftene dine er så høge at du ikkje er i stand
                    til å betene dei med inntektene du har eller kan forvente å
                    få, kan vi stille krav om at du må redusere buutgiftene
                    dine. Det kan bety at du må flytte til ein rimelegare
                    bustad. I slike situasjonar er det viktig å ta omsyn til det
                    behovet barn og unge har for å halde på nettverket sitt.
                </Avsnitt>

                <Undertittel tag="h3">Flytting</Undertittel>

                <Avsnitt>
                    NAV kan vurdere å gi stønad til nødvendige utgifter til
                    flytting. Særleg aktuelt er dette dersom det er NAV-kontoret
                    som har pålagt deg å flytte for å redusere buutgiftene,
                    eller dersom det er andre særskilde grunnar til at du må
                    flytte.
                </Avsnitt>

                <Undertittel tag="h3">Innbu og utstyr</Undertittel>

                <Avsnitt>
                    Du kan søkje om stønad til det mest nødvendige av innbu og
                    utstyr til å bu i ein bustad, dersom du ikkje har økonomi
                    til å skaffe dette på andre måtar. NAV vurderer kva som er
                    nødvendig utstyr ut frå individuelle behov, livssituasjon,
                    alder og størrelse på husstanden din. Standarden skal vere
                    nøktern og rimeleg.
                </Avsnitt>

                <Undertittel tag="h3">
                    Depositum og garanti for depositum
                </Undertittel>

                <Avsnitt>
                    Ein utleigar av ein leigebustad krev normalt tryggleik for
                    leige som ikkje blir betalt, skadar og andre krav som
                    følgjer av leigeavtalen. Du kan søkje om stønad til
                    depositum når du inngår ein leigekontrakt, dersom du ikkje
                    har høve til å skaffe dette på andre måtar. NAV gir
                    vanlegvis hjelp i form av garanti for depositum, men NAV kan
                    også gi økonomisk stønad til depositum på ein sperra
                    depositumskonto.
                </Avsnitt>

                <Avsnitt>
                    Når NAV gir garanti for depositum blir det ikkje utbetalt
                    pengar. NAV skriv eit garantidokument til utleigar. Kva krav
                    garantien dekkjer kan variere frå kommune til kommune.
                    Dersom heile eller deler av garantien eller depositumet blir
                    utbetalt, vil dette normalt bli eit lån som du må betale
                    tilbake. NAV vil då vurdere din tilbakebetalingsevne.
                </Avsnitt>

                <Avsnitt>
                    Partane i leigeforholdet er utleigar og leigetakar og dette
                    blir ikkje endra sjølv om NAV har gitt hjelp til depositum
                    eller garanti for depositum.
                </Avsnitt>
            </Ekspanderbartpanel>

            <Ekspanderbartpanel tittel="helse og tannbehandling" border>
                <Avsnitt>
                    Utgifter til lege, psykolog, tannlege, viktige legemidlar og
                    syns- og hørselshjelpemidlar kan i nokre tilfelle bli dekt
                    gjennom folketrygdlova ved Helfo. Du har i utgangspunktet
                    ikkje rett til å få dekt utgifter til alternative
                    behandlingstypar, behandlingsformer eller behandlingsstadar
                    som ikkje er innanfor dei offentlege helsetenesta og
                    folketrygdlova. Du kan lese meir om eigenandelar og betaling
                    for helse- og tannlegetenester på{" "}
                    <Lenke href="https://helsenorge.no/betaling-for-helsetjenester/frikort-for-helsetjenester">
                        {" "}
                        helsenorge.no
                    </Lenke>
                    .
                </Avsnitt>

                <Undertittel tag="h3">
                    Om dekning av utgifter til tannbehandling
                </Undertittel>

                <Avsnitt>
                    Som hovudregel må vaksne betale utgiftene til tannbehandling
                    sjølv, men det finst enkelte unntak dersom du har visse
                    sjukdommar, tilstandar eller skadar. Tannlegen skal vurdere
                    om du fell inn under nokre av disse unntaka, og difor kan ha
                    rett på støtte frå Helfo.
                </Avsnitt>

                <Avsnitt>
                    Dersom du har problem med å betale rekninga, kan du høyre
                    med tannlegen din om det er mogleg å lage ein
                    behandlingsplan med nedbetalingsavtale. Dersom du ikkje har
                    krav på støtte frå Helfo til tannbehandling, og du heller
                    ikkje har økonomi til å få lage ein nedbetalingsavtale, kan
                    du søkje NAV om å få dekt desse utgiftene heilt eller
                    delvis.
                </Avsnitt>

                <Avsnitt>
                    For at vi skal kunne vurdere saka di, må du leggje ved
                    nødvendig dokumentasjon. I tillegg til dokumentasjon på
                    inntekter, utgifter og formue, treng NAV eit
                    kostnadsoverslag på kva behandlinga kostar og eventuelt
                    røntgenbilde og ei melding frå tannlegen om behandlinga.{" "}
                    <Lenke href={"https://www.hvakostertannlegen.no/"}>
                        Prisane kan variere
                    </Lenke>{" "}
                    frå tannlege til tannlege, og NAV kan avgrense stønaden til
                    å dekkje eit rimeleg behandlingsalternativ.
                </Avsnitt>

                <Avsnitt>
                    Ved akutt tannbehandling må du legge ved faktura og ei
                    melding frå tannlegen.
                </Avsnitt>
            </Ekspanderbartpanel>

            <Undertittel>Har du gjeldsproblem?</Undertittel>

            <Avsnitt>
                Du kan i utgangspunktet ikkje få dekt utgifter til gjeld. Viss
                du har gjeld, kan du få økonomisk rådgjeving og hjelp til å
                inngå avtale med kreditor. Hjelpa kan blant anna bestå i å inngå
                avtale om ein nedbetalingsplan, endre lånevilkår eller
                betalingsutsetting.
            </Avsnitt>

            <Avsnitt>
                I enkelte tilfelle kan NAV vurdere å dekkje utgifter til gjeld,
                til dømes når det er fare for å miste straumen eller bustaden og
                det ikkje finst andre moglege løysingar for å hindre dette.
            </Avsnitt>

            <Undertittel>Korleis søkjer du?</Undertittel>

            <Avsnitt>
                Du skal søkje til NAV-kontoret der du bor. Stadig fleire
                kommunar kan ta i mot digitale søknader. Dersom du ikkje skal
                søkje digitalt, kan du søkje med kommunens papirskjema.
            </Avsnitt>
            <Avsnitt>
                <InternLenke href="/slik-soker-du?lang=nn">
                    Søk her.
                </InternLenke>
            </Avsnitt>
            <Avsnitt>
                For meir informasjon, sjå{" "}
                <InternLenke href="/dette-bor-du-vite?lang=nn">
                    dette bør du vite før du søkjer
                </InternLenke>
                .
            </Avsnitt>
        </Artikkel>
    );
};

export default DetteKanDuSokeOmNynorsk;
