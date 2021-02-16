import * as React from "react";
import {Innholdstittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const StatusSoknadBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvor kan du se status på søknaden?">
            <Innholdstittel>Hvor kan du se status på søknaden?</Innholdstittel>
            <Avsnitt>
                Hvis du har søkt digitalt, finner du en liste over alle{" "}
                <Lenke href={"./innsyn"}>dine sosialhjelpssøknader</Lenke> på
                ditt NAV. Her kan du se tidspunktet søknaden ble sendt og hvilke
                vedlegg som mangler til søknaden. Den digitale løsningen er
                under utvikling, og etter hvert vil du også kunne se status på
                søknaden din.
            </Avsnitt>
            <Avsnitt>
                Stadig flere kommuner tar i bruk de nye digitale mulighetene.
                For øyeblikket er det bare innbyggere i enkelte kommuner som kan
                følge med på status på søknaden, men etter hvert vil også resten
                av Norge bli med!
            </Avsnitt>
        </Artikkel>
    );
};

export default StatusSoknadBokmal;
