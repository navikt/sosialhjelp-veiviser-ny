import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const KlageNynorsk: React.FC = () => (
    <Artikkel
        tittel="Klage på vedtak om sosiale tenester"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Klage på vedtak om sosiale tenester</Innholdstittel>
        <Normaltekst>
            Har du fått eit vedtak frå oss som du meiner er feil, kan du klage.
        </Normaltekst>
        <Undertittel>Slik klager du</Undertittel>
        <Normaltekst>
            Du skal sende klagen til NAV-kontoret som har gjort vedtaket.
            Klagefristen er tre veker frå du har fått vedtaket.
        </Normaltekst>
        <Undertittel>Trenger du hjelp til å klage?</Undertittel>
        <Normaltekst>
            NAV-kontoret ditt kan hjelpe deg dersom du treng hjelp til å skrive
            klagen. Då må du avtale ein time på NAV-kontoret. Du har rett til å
            ha med deg ein person du har tillit til om du ønskjer det.
        </Normaltekst>
        <br />
        <Normaltekst>
            Du kan òg bruke advokat eller gi fullmakt til ein person som klager
            på vegne av deg.
        </Normaltekst>
        <Undertittel>Kva skal klagen innehalde?</Undertittel>
        <Normaltekst>
            <ul>
                <li>
                    Kva vedtak klagen gjeld. Du kan eventuelt legge ved vedtaket
                    du klagar på.
                </li>
                <li>
                    Kva du meiner er feil i vedtaket, og kvifor du meiner det er
                    feil.
                </li>
                <li>Signatur</li>
            </ul>
        </Normaltekst>
        <Normaltekst>
            Du kan legge ved dokumentasjon til klagen din.
        </Normaltekst>
        <Undertittel>Kva skjer når du klagar?</Undertittel>
        <Normaltekst>
            NAV-kontoret som har gjort vedtaket skal vurdere saka di på nytt.
            Saksbehandlingstida varierer frå kommune til kommune. Dersom det går
            meir enn éin måned, skal du få eit foreløpig svar. Dersom du får
            medhald i klagen din, får du eit nytt vedtak.
        </Normaltekst>
        <br />
        <Normaltekst>
            Dersom du ikkje får medhald, blir klagen sendt vidare til
            Fylkesmannen som vurderer saka di på nytt. Du får informasjon om
            saksbehandlingstid hjå Fylkesmannen og kva som skjer vidare.
        </Normaltekst>
        <br />
        <Normaltekst>
            Når Fylkesmannen har behandla saka di, får du eit nytt vedtak.{" "}
        </Normaltekst>
        <Undertittel>Du kan få dekt utgifter</Undertittel>
        <Normaltekst>
            Dersom du får medhald i klagen, kan du ha rett til å få dekt
            utgifter som har vore nødvendige for å få endra vedtaket. Eit
            eksempel er utgifter til advokat. For å få dette vurdert kan du
            sende eit skriftleg krav om å få dekka sakskostnader til
            NAV-kontoret som har gjort om vedtaket.
        </Normaltekst>
    </Artikkel>
);

export default KlageNynorsk;
