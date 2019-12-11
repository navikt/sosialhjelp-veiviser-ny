import * as React from "react";
import "./artikkel.less";
import Dekorator from "../komponenter/dekorator/Dekorator";
import SprakVelger from "../komponenter/sprakVelger/SprakVelger";
import {Sprak} from "../utils/sprakUtils";
import Brodsmulesti, {BrodsmulestiForeldreside} from "../komponenter/brodsmulesti/Brodsmulesti";
import {useContext, useEffect} from "react";
import SprakvelgerContext from "../komponenter/oversettelser/Oversettelser";

interface Props {
    children: React.ReactNode;
    className?: string;
    tittel: string;
    illustrasjon?: React.ReactNode;
    foreldreside?: BrodsmulestiForeldreside;
}

const Artikkel: React.FC<Props> = ({children, className, tittel, illustrasjon, foreldreside}) => {

    document.title = (tittel ? tittel : "ingen tittel");
    const context = useContext(SprakvelgerContext);
    const sprak: Sprak[] = context.sprak;

    const pathname = window.location.pathname;

    useEffect(() => {
        const element: any = document.getElementsByClassName("blokk-center");
        let offsetTop = 0;
        if(element && element.length > 0) {
            offsetTop = element[0].offsetTop-16;
        }
        window.scrollTo({
            behavior: "smooth",
            top: offsetTop
        });
    }, [pathname])

    return (
        <Dekorator tittel={tittel ? tittel : "ingen tittel"}>
            <div className={"blokk-center " + className}>

                <Brodsmulesti
                    className="breadcrumbs__article"
                    tittel={tittel ? tittel : "ingen tittel"}
                    foreldreside={foreldreside}
                />

                <article className="artikkel">
                    {sprak.length > 1 && (<SprakVelger sprak={sprak}/>)}
                    <div className="innhold">
                        {illustrasjon && (<span>{illustrasjon}</span>)}
                        {children}
                    </div>
                </article>
            </div>
        </Dekorator>
    );
};

export default Artikkel;
