import * as React from "react";
import Artikkel from "../Artikkel";
import {Ingress, Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";

import IllustrasjonInfoSirkel from "../../komponenter/bilder/IllustrasjonInfoSirkel";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import {InternLenke} from "../../komponenter/InternLenke";

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
                for eksempel være gjennom jobb, andre inntekter eller egne
                midler. Hvis du trenger hjelp til å finne ut hvilke muligheter
                du har, så kan du ta kontakt med{" "}
                <Lenke
                    href={
                        "https://www.nav.no/finnkontor"
                    }
                >
                    NAV-kontoret
                </Lenke>{" "}
                ditt. Du kan også kontakte oss på chat og telefon.
            </Ingress>

            <Undertittel>Før du søker</Undertittel>
            <Avsnitt>
                Når du søker må du gi opplysninger om deg selv og den økonomiske
                situasjonen din. Du må i utgangspunktet dokumentere
                opplysningene.
            </Avsnitt>

            <Ekspanderbartpanel
                tittel="Eksempler på hva du kan bli bedt om å dokumentere"
                border
            >
                <div className="typo-normal">
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
                </div>
            </Ekspanderbartpanel>

            <Avsnitt>
                Du må i utgangspunktet ha lovlig opphold i Norge for å ha rett
                til økonomisk sosialhjelp. Du har ikke rett til økonomisk
                sosialhjelp hvis du oppholder deg i utlandet.
            </Avsnitt>

            <Avsnitt>
                Alle har rett til å søke om økonomisk sosialhjelp og få en
                individuell vurdering av søknaden sin. Du har rett til{" "}
                <Lenke href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/generelle-rad-og-veiledning">
                    opplysning, råd og veiledning
                </Lenke>{" "}
                uavhengig av om du har rett til økonomisk sosialhjelp.
            </Avsnitt>

            <Undertittel>Etter du har søkt</Undertittel>
            <Avsnitt>
                Saksbehandlingstiden varierer fra kommune til kommune. Hvis det
                går mer enn én måned, skal du få et foreløpig svar. Hvis du ikke
                har levert all nødvendig dokumentasjon, kan det ta lengre tid
                før du får svar på søknaden din. Hvis du er i en{" "}
                <InternLenke href="/nodsituasjon">nødssituasjon</InternLenke>,
                skal du få et raskt svar.
            </Avsnitt>

            <Avsnitt>
                Du må <InternLenke href="/gi-beskjed">gi beskjed</InternLenke>{" "}
                til oss hvis situasjonen din endrer seg etter at du har søkt.
            </Avsnitt>

            <Avsnitt>
                Når vi har behandlet søknaden din, får du et vedtak som du må
                lese nøye. Ofte vil vi stille ett eller flere{" "}
                <InternLenke href="/krav-til-deg">krav til deg</InternLenke> i
                vedtaket som du må oppfylle.
            </Avsnitt>

            <Avsnitt>
                Du kan <InternLenke href="/klage">klage</InternLenke> hvis du
                mener at vedtaket er feil. Klagefrist er 3 uker fra du mottar
                vedtaket.
            </Avsnitt>

            <Undertittel>Satser</Undertittel>

            <Avsnitt>
                Stønaden blir beregnet etter en individuell vurdering.
            </Avsnitt>

            <Avsnitt>
                Det finnes{" "}
                <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/oversikt-over-satser/statlige-veiledende-retningslinjer-for-okonomisk-stonad_kap">
                    statlige veiledende satser og retningslinjer
                </Lenke>{" "}
                for å beregne økonomisk stønad. Kommunen din kan ha egne
                veiledende satser.
            </Avsnitt>

            <Undertittel>Utbetalinger</Undertittel>

            <Avsnitt>
                I vedtaksbrevet ditt finner du mer informasjon om utbetalinger.
            </Avsnitt>

            <Undertittel>Regelverk</Undertittel>

            <Avsnitt>
                Se utfyllende informasjon om{" "}
                <Lenke href="https://www.nav.no/no/person/flere-tema/sosiale-tjenester/relatert-innhold/lov-om-sosiale-tjenester-i-nav">
                    Lov om sosiale tjenester i NAV
                </Lenke>
                .
            </Avsnitt>
        </Artikkel>
    );
};

export default DetteBorDuViteBokmal;
