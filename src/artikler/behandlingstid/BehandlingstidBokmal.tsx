import * as React from "react";
import {Innholdstittel} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import "../artikkel.less";
import {InternLenke} from "../../komponenter/InternLenke";

const BehandlingstidBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvor lang tid tar det å behandle søknaden?">
            <Innholdstittel>
                Hvor lang tid tar det å behandle søknaden?
            </Innholdstittel>
            <Avsnitt>
                Saksbehandlingstiden varierer fra kommune til kommune. Hvis det
                går mer enn én måned, skal du få brev om forlenget
                saksbehandlingstid. Hvis vi mangler opplysninger, vil du få
                beskjed om å ettersende det vi trenger. Har du ikke levert all
                nødvendig dokumentasjon, bør du levere dette så snart som mulig
                for å få raskest mulig svar på søknaden din. Hvis du er i en{" "}
                <InternLenke href="/nodsituasjon?lang=nb">
                    nødsituasjon
                </InternLenke>
                , skal du få et raskt svar.
            </Avsnitt>
        </Artikkel>
    );
};

export default BehandlingstidBokmal;
