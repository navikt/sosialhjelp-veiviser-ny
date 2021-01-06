import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const KlageNynorsk: React.FC = () => (
    <Artikkel
        tittel="Klage på vedtak om sosiale tenester"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Klage på vedtak om sosiale tenester</Innholdstittel>
        <Avsnitt>
            Har du fått eit vedtak frå oss som du meiner er feil, kan du klage.
        </Avsnitt>
        <Undertittel>Slik klager du</Undertittel>
        <Avsnitt>
            Du skal sende klagen til NAV-kontoret som har gjort vedtaket.
            Klagefristen er tre veker frå du har fått vedtaket.
            Her finn du <Lenke href="https://www.nav.no/finnkontor">kontaktinformasjon til NAV-kontoret</Lenke>.
        </Avsnitt>
        <Undertittel>Trenger du hjelp til å klage?</Undertittel>
        <Avsnitt>
            NAV-kontoret ditt kan hjelpe deg dersom du treng hjelp til å skrive
            klagen. Då må du avtale ein time på NAV-kontoret. Du har rett til å
            ha med deg ein person du har tillit til om du ønskjer det.
        </Avsnitt>

        <Avsnitt>
            Du kan òg bruke advokat eller gi fullmakt til ein person som klager
            på vegne av deg.
        </Avsnitt>
        <Undertittel>Kva skal klagen innehalde?</Undertittel>
        <div className="typo-normal">
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
        </div>
        <Avsnitt>Du kan legge ved dokumentasjon til klagen din.</Avsnitt>
        <Undertittel>Kva skjer når du klagar?</Undertittel>
        <Avsnitt>
            NAV-kontoret som har gjort vedtaket skal vurdere saka di på nytt.
            Saksbehandlingstida varierer frå kommune til kommune. Dersom det går
            meir enn éin måned, skal du få eit foreløpig svar. Dersom du får
            medhald i klagen din, får du eit nytt vedtak.
        </Avsnitt>

        <Avsnitt>
            Dersom du ikkje får medhald, blir klagen sendt vidare til
            Statsforvalteren som vurderer saka di på nytt. Du får informasjon om
            saksbehandlingstid hjå Statsforvalteren og kva som skjer vidare.
        </Avsnitt>

        <Avsnitt>
            Når Statsforvalteren har behandla saka di, får du eit nytt vedtak.{" "}
        </Avsnitt>
        <Undertittel>Du kan få dekt utgifter</Undertittel>
        <Avsnitt>
            Dersom du får medhald i klagen, kan du ha rett til å få dekt
            utgifter som har vore nødvendige for å få endra vedtaket. Eit
            eksempel er utgifter til advokat. For å få dette vurdert kan du
            sende eit skriftleg krav om å få dekka sakskostnader til
            NAV-kontoret som har gjort om vedtaket.
        </Avsnitt>
    </Artikkel>
);

export default KlageNynorsk;
