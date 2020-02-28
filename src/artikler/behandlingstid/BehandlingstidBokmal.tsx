import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";
import "../artikkel.less";

const BehandlingstidBokmal: React.FC = () => {
    return (
        <Artikkel
            tittel="Hva er status i saken min"
            illustrasjon={
                <IllustrasjonBygningPerson className="illustrasjon" />
            }
        >
            <Innholdstittel>Hva er status i saken min</Innholdstittel>

            <Undertittel>Hvor kan du se status på søknaden? </Undertittel>
            <Normaltekst>
                Hvis du har søkt digitalt, finner du en liste over alle{" "}
                <Lenke href={"./innsyn"}>dine sosialhjelpssøknader</Lenke> på
                ditt NAV. Her kan du se tidspunktet søknaden ble sendt og hvilke
                vedlegg som mangler til søknaden. Den digitale løsningen er
                under utvikling, og etter hvert vil du også kunne se status på
                søknaden din.
            </Normaltekst>
            <br />
            <Normaltekst>
                Stadig flere kommuner tar i bruk de nye digitale mulighetene.
                For øyeblikket er det kun Bergen som kan følge med på status av
                søknaden, men etter hvert vil også resten av Norge bli med!
            </Normaltekst>

            <Undertittel>
                Hvor lang tid tar det å behandle søknaden?r
            </Undertittel>

            <Normaltekst>
                Saksbehandlingstiden varierer fra kommune til kommune. Hvis det
                går mer enn én måned, skal du få brev om forlenget
                saksbehandlingstid. Hvis vi mangler opplysninger, vil du få
                beskjed om å ettersende det vi trenger. Har du ikke levert all
                nødvendig dokumentasjon, bør du levere dette så snart som mulig
                for å få raskest mulig svar på søknaden din. Hvis du er i en
                nødsituasjon, skal du få et raskt svar.
            </Normaltekst>
        </Artikkel>
    );
};

export default BehandlingstidBokmal;
