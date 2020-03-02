import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";

const BehandlingstidBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvor lang tid tar det å behandle søknaden?">
            <Innholdstittel>
                Hvor lang tid tar det å behandle søknaden?
            </Innholdstittel>
            <Normaltekst>
                Saksbehandlingstiden varierer fra kommune til kommune. Hvis det
                går mer enn én måned, skal du få brev om forlenget
                saksbehandlingstid. Hvis vi mangler opplysninger, vil du få
                beskjed om å ettersende det vi trenger. Har du ikke levert all
                nødvendig dokumentasjon, bør du levere dette så snart som mulig
                for å få raskest mulig svar på søknaden din. Hvis du er i en{" "}
                <Lenke href={"./nodsituasjon?lang=nb"}>nødsituasjon</Lenke>,
                skal du få et raskt svar.
            </Normaltekst>
        </Artikkel>
    );
};

export default BehandlingstidBokmal;
