import * as React from "react";
import "./artikkel.less";
import Dekorator from "../komponenter/dekorator/Dekorator";
import {Innholdstittel} from "nav-frontend-typografi";
import SprakVelger from "../komponenter/sprakVelger/SprakVelger";
import {Sprak} from "../utils/sprakUtils";

interface Props {
    children: React.ReactNode;
    className?: string;
    tittel: string;
    illustrasjon?: React.ReactNode;
    sprak?: Sprak[]
}
const Artikkel: React.FC<Props> = ({children, className, tittel, illustrasjon, sprak}) => {

    document.title = (tittel ? tittel : "ingen tittel");

    return (
        <Dekorator tittel={tittel ? tittel : "ingen tittel"}>
            <div className={"blokk-center " + className}>
                <div className="artikkel">
                    {sprak && (<SprakVelger sprak={sprak}/>)}
                    <div className="innhold">
                        {illustrasjon && (<span>{illustrasjon}</span>)}
                        <Innholdstittel>{tittel}</Innholdstittel>
                        {children}
                    </div>
                </div>
            </div>
        </Dekorator>
    );
};

export default Artikkel;
