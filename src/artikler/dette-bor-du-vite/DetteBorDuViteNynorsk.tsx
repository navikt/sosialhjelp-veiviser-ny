import * as React from "react";
import Artikkel from "../Artikkel";
import {
    Ingress,
    Innholdstittel,
    Normaltekst,
    Undertittel,
} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import IllustrasjonInfoSirkel from "../../komponenter/bilder/IllustrasjonInfoSirkel";
import Lenke from "nav-frontend-lenker";

const DetteBorDuViteNynorsk: React.FC = () => {
    return (
        <Artikkel
            tittel="Dette bør du vite før du søkjer"
            illustrasjon={<IllustrasjonInfoSirkel className="illustrasjon" />}
        >
            <Innholdstittel>Dette bør du vite</Innholdstittel>
            <Ingress>
                Økonomisk sosialhjelp er en midlertidig inntekt. Før du kan få
                stønad må du vurdere alle andre muligheter til å forsørge deg
                selv. Dette kan for eksempel være gjennom jobb, andre inntekter
                eller egne midler.
            </Ingress>

            <Undertittel>Før du søkjer</Undertittel>
            <Normaltekst>
                NAV må ha tilstrekkeleg dokumentasjon og treng opplysningar om
                inntekter og utgifter. Du må i utgangspunktet dokumentere alle
                opplysningar skriftleg.
            </Normaltekst>

            <Ekspanderbartpanel
                tittel="Døme på kva du må leggje ved søknaden"
                border
            >
                <Normaltekst>
                    <ul>
                        <li>legitimasjon</li>
                        <li>gyldig opphaldsløyve</li>
                        <li>skattemelding (tidligare sjølvmelding)</li>
                        <li>fastsetting (tidligare likning), skatteoppgjer</li>
                        <li>lønnsslipp</li>
                        <li>
                            kontooversikter som viser alle dine konti med saldo
                        </li>
                        <li>
                            kontoutskrifter (om ikkje nødvendige opplysningar
                            kan bli dokumentert på annan måte. Du kan stryke
                            over tekst som ikkje er relevant for saka)
                        </li>
                        <li>dokumentasjon på butilhøve (husleigekontrakt)</li>
                        <li>
                            fakturaer for husleige, bustadlån, straum,
                            barnehage, skulefritidsordning (SFO) og
                            fritidsaktivitetar for barn
                        </li>
                        <li>
                            faste eller høge utgifter til helse og/eller
                            tannbehandling
                        </li>
                    </ul>
                </Normaltekst>
            </Ekspanderbartpanel>

            <br />
            <Normaltekst>
                Du må ha lovleg opphald og ha fast bustad i Noreg for å ha rett
                til økonomisk sosialhjelp. Dersom du oppheld deg i utlandet, har
                du ikkje rett til økonomisk sosialhjelp.
            </Normaltekst>
            <br />
            <Normaltekst>
                Alle har rett til å søkje om økonomisk sosialhjelp, og få ei
                individuell vurdering av saka si.
            </Normaltekst>

            <Undertittel>Etter du har søkt</Undertittel>
            <Normaltekst>
                Saksbehandlingstida varierer frå kommune til kommune. Dersom det
                går meir enn éin månad, skal du få eit førebels svar. Om du
                ikkje har levert all nødvendig dokumentasjon, kan det ta lengre
                tid før du får svar på søknaden din. Om du er i en{" "}
                <Lenke href="./nodsituasjon?lang=nn">nødssituasjon</Lenke>, skal
                du få svaret raskt.
            </Normaltekst>
            <br />
            <Normaltekst>
                Du må <Lenke href="./gi-beskjed?lang=nn">melde frå</Lenke> til
                oss dersom det skjer endringar i situasjonen din.
            </Normaltekst>
            <br />
            <Normaltekst>
                Når vi har behandla søknaden din, får du eit vedtak som du må
                lese nøye. Ofte vil vi stille eitt eller fleire{" "}
                <Lenke href="./krav-til-deg?lang=nn">krav til deg</Lenke> i
                vedtaket som du må oppfylle.
            </Normaltekst>
            <br />
            <Normaltekst>
                Du kan <Lenke href="./klage?lang=nn">klage</Lenke> hvis du
                meiner at vedtaket er feil. Klagefrist er 3 uker frå du har fått
                vedtaket.
            </Normaltekst>
            <Undertittel>Satsar</Undertittel>
            <Normaltekst>
                Stønaden blir utrekna etter ei individuell vurdering.
            </Normaltekst>
            <br />
            <Normaltekst>
                Det finst{" "}
                <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/oversikt-over-satser/statlige-veiledende-retningslinjer-for-okonomisk-stonad_kap">
                    statlege rettleiande satsar og retningslinjer
                </Lenke>{" "}
                for å utrekne økonomisk stønad. Kommunen din kan ha eigne
                rettleiande satsar.
            </Normaltekst>
            <Undertittel>Utbetalingar</Undertittel>
            <Normaltekst>
                I vedtaksbrevet ditt finn du meir informasjon om utbetalingar.
            </Normaltekst>
            <br />
            <Normaltekst>
                Sjå utfyllande informasjon om{" "}
                <Lenke href="https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/Nynorsk/%C3%B8konomisk-sosialhjelp">
                    økonomisk sosialhjelp
                </Lenke>
                .{" "}
            </Normaltekst>
        </Artikkel>
    );
};

export default DetteBorDuViteNynorsk;
