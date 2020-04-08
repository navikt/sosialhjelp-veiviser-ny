import * as React from "react";
import Artikkel from "../Artikkel";
import {
    Ingress,
    Innholdstittel,
    Normaltekst,
    Undertittel,
} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import IllustrasjonInfoSirkel from "../../komponenter/bilder/IllustrasjonInfoSirkel";

const DetteBorDuViteBokmal: React.FC = () => {
    return (
        <Artikkel
            tittel="Dette bør du vite før du søker"
            illustrasjon={<IllustrasjonInfoSirkel className="illustrasjon" />}
        >
            <Innholdstittel>Dette bør du vite</Innholdstittel>
            <Ingress>
                Økonomisk sosialhjelp er en midlertidig stønad. Du bør vurdere
                om du har andre muligheter til å forsørge deg selv. Dette kan
                for eksempel være gjennom jobb, andre inntekter eller egne midler.
                Hvis du trenger hjelp til å finne ut hvilke muligheter du har,
                ta kontakt med
                {" "}
                <Lenke  href={"https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"}>
                    ditt NAV-kontor
                </Lenke>
                .
                Du kan også kontakte oss på chat og telefon.
            </Ingress>

            <Undertittel>Før du søker</Undertittel>
            <Normaltekst>
                Når du søker må du gi opplysninger om deg og den
                økonomiske situasjnen din. Du må ha i utgangspunktet
                dokumentere opplysningene.
            </Normaltekst>

            <Ekspanderbartpanel
                tittel="Eksempler på hva du kan bli bedt om å dokumentere"
                border
            >
                <Normaltekst>
                    <ul>
                        <li>legitimasjon</li>
                        <li>gyldig oppholdstillatelse</li>
                        <li>skattemelding (tidligere selvangivelsen)</li>
                        <li>fastsetting (tidligere ligning), skatteoppgjør</li>
                        <li>lønnsslipp</li>
                        <li>
                            kontooversikter som viser alle dine konti med saldo
                        </li>
                        <li>
                            kontoutskrifter (hvis ikke nødvendige opplysninger
                            kan dokumenteres på annen måte. Du kan stryke over
                            tekst som ikke er relevant for saken)
                        </li>
                        <li>dokumentasjon på boforhold (husleiekontrakt)</li>
                        <li>
                            fakturaer for husleie, boliglån, strøm, barnehage,
                            skolefritidsordning (SFO) og fritidsaktiviteter for
                            barn
                        </li>
                        <li>
                            faste eller høye utgifter til helse og/eller
                            tannbehandling
                        </li>
                    </ul>
                </Normaltekst>
            </Ekspanderbartpanel>

            <br />
            <Normaltekst>
                Du må i utgangsspunktet ha lovlig opphold i Norge for
                å ha rett til økonomisk sosialhjelp. Du har ikke rett
                til økonomisk sosialhjelp hvis du oppholder deg i utlandet.
            </Normaltekst>
            <br />
            <Normaltekst>
                Alle har rett til å søke om økonomisk sosialhjelp og få
                en individuell vurdering av søknaden sin. Du har rett til
                {" "}
                <Lenke href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/generelle-rad-og-veiledning">
                    opplysning, råd og veiledning
                </Lenke>
                {" "}
                uavhengig av om du har rett til økonomisk sosialhjelp.
            </Normaltekst>

            <Undertittel>Etter du har søkt</Undertittel>
            <Normaltekst>
                Saksbehandlingstiden varierer fra kommune til kommune. Hvis det
                går mer enn én måned, skal du få et foreløpig svar. Hvis du ikke
                har levert all nødvendig dokumentasjon, kan det ta lengre tid
                før du får svar på søknaden din. Hvis du er i en{" "}
                <Lenke href="./nodsituasjon">nødssituasjon</Lenke>, skal du få
                et raskt svar.
            </Normaltekst>
            <br />
            <Normaltekst>
                Du må <Lenke href="./gi-beskjed">gi beskjed</Lenke> til oss hvis
                situasjonen din endrer seg etter at du har søkt.
            </Normaltekst>
            <br />
            <Normaltekst>
                Når vi har behandlet søknaden din, får du et vedtak som du må
                lese nøye. Ofte vil vi stille ett eller flere{" "}
                <Lenke href="./krav-til-deg">krav til deg</Lenke> i vedtaket som
                du må oppfylle.
            </Normaltekst>
            <br />
            <Normaltekst>
                Du kan <Lenke href="./klage">klage</Lenke> hvis du mener at
                vedtaket er feil. Klagefrist er 3 uker fra du mottar vedtaket.
            </Normaltekst>
            <Undertittel>Satser</Undertittel>
            <Normaltekst>
                Stønaden blir beregnet etter en individuell vurdering.
            </Normaltekst>
            <br />
            <Normaltekst>
                Det finnes{" "}
                <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/oversikt-over-satser/statlige-veiledende-retningslinjer-for-okonomisk-stonad_kap">
                    statlige veiledende satser og retningslinjer
                </Lenke>{" "}
                for å beregne økonomisk stønad. Kommunen din kan ha egne
                veiledende satser.
            </Normaltekst>
            <Undertittel>Utbetalinger</Undertittel>
            <Normaltekst>
                I vedtaksbrevet ditt finner du mer informasjon om utbetalinger.
            </Normaltekst>
            <br />
            <Normaltekst>
                Se utfyllende informasjon om{" "}
                <Lenke href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/okonomisk-sosialhjelp2">
                    økonomisk sosialhjelp
                </Lenke>
                .
            </Normaltekst>
        </Artikkel>
    );
};

export default DetteBorDuViteBokmal;
