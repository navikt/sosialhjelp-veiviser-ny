import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const KlageBokmal: React.FC = () => (
    <Artikkel
        tittel="Klage på vedtak om sosiale tjenester"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Klage på vedtak om sosiale tjenester</Innholdstittel>
        <Normaltekst>
            Hvis du har fått et vedtak fra oss som du mener er feil, kan du
            klage.
        </Normaltekst>
        <Undertittel>Slik klager du</Undertittel>
        <Normaltekst>
            Du skal sende klagen til NAV-kontoret som har gjort vedtaket.
            Klagefristen er tre uker fra du mottar vedtaket.
        </Normaltekst>
        <Undertittel>Trenger du hjelp til å klage?</Undertittel>
        <Normaltekst>
            NAV-kontoret ditt kan hjelpe deg hvis du trenger hjelp til å skrive
            klagen. Da må du avtale en time på NAV-kontoret. Hvis du ønsker å ha
            med deg en person du har tillit til, har du rett til det.
        </Normaltekst>
        <br />
        <Normaltekst>
            Du kan også bruke advokat eller gi fullmakt til en person som klager
            på dine vegne.
        </Normaltekst>
        <Undertittel>Hva skal klagen inneholde?</Undertittel>
        <Normaltekst>
            <ul>
                <li>
                    Hvilket vedtak klagen gjelder. Du kan eventuelt legge ved
                    vedtaket du klager på.
                </li>
                <li>
                    Hva du mener er feil ved avgjørelsen, og hvorfor du mener
                    den er feil.
                </li>
                <li>Signatur</li>
            </ul>
        </Normaltekst>
        <Normaltekst>
            Du kan legge ved dokumentasjon til klagen din.
        </Normaltekst>
        <Undertittel>Hva skjer når du klager?</Undertittel>
        <Normaltekst>
            Når du klager vil NAV-kontoret som har gjort vedtaket vurdere saken
            din på nytt. Saksbehandlingstiden varierer fra kommune til kommune.
            Hvis det går mer enn én måned, skal du få et foreløpig svar. Hvis du
            får medhold i klagen din, får du et nytt vedtak.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvis du ikke får medhold, blir klagen sendt videre til Fylkesmannen
            som vurderer saken din på nytt. Du får informasjon om
            saksbehandlingstid hos Fylkesmannen og hva som skjer videre.
        </Normaltekst>
        <br />
        <Normaltekst>
            Når Fylkesmannen har avgjort saken din, får du et nytt vedtak.
        </Normaltekst>
        <Undertittel>Du kan få dekket utgifter</Undertittel>
        <Normaltekst>
            Hvis du får medhold i klagen, kan du ha rett til å få dekket
            utgifter som har vært nødvendige for å få endret vedtaket. Et
            eksempel er utgifter til advokat. Da kan du sende krav om å få
            dekket sakskostnader til NAV-kontoret som har omgjort vedtaket.
        </Normaltekst>
    </Artikkel>
);

export default KlageBokmal;
