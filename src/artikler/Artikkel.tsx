import * as React from "react";
import "./artikkel.less";
import Dekorator from "../komponenter/dekorator/Dekorator";
import SprakVelger from "../komponenter/sprakVelger/SprakVelger";
import {Sprak} from "../utils/sprakUtils";
import Brodsmulesti from "../komponenter/brodsmulesti/Brodsmulesti";

interface Props {
    children: React.ReactNode;
    className?: string;
    tittel: string;
    illustrasjon?: React.ReactNode;
    sprak: Sprak[]
}
const Artikkel: React.FC<Props> = ({children, className, tittel, illustrasjon, sprak}) => {

    document.title = (tittel ? tittel : "ingen tittel");

    return (

        <Dekorator tittel={tittel ? tittel : "ingen tittel"}>
            <div className={"blokk-center " + className}>

                <Brodsmulesti
                    tittel={tittel ? tittel : "ingen tittel"}
                />

                <div className="artikkel">
                    <SprakVelger sprak={sprak}/>
                    <div className="innhold">
                        {illustrasjon && (<span>{illustrasjon}</span>)}
                        {children}
                    </div>
                </div>
            </div>
        </Dekorator>
    );
};

export default Artikkel;
