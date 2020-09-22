import * as React from "react";
import "./artikkel.less";
import Dekorator from "../komponenter/dekorator/Dekorator";

import {useEffect} from "react";
import {useDecorator} from "../utils/useDecorator";
import {useHistory} from "react-router";

interface Props {
    children: React.ReactNode;
    className?: string;
    tittel: string;
    illustrasjon?: React.ReactNode;
    foreldreside?: {title: string; slug: string};
}

const Artikkel: React.FC<Props> = ({
    children,
    className,
    tittel,
    illustrasjon,
    foreldreside,
}) => {
    document.title = tittel ? tittel : "ingen tittel";

    const history = useHistory();

    const pathname = window.location.pathname;

    const breadcrumbPages = [{title: tittel, slug: history.location.pathname}];
    if (foreldreside) {
        breadcrumbPages.push(foreldreside);
    }
    useDecorator(breadcrumbPages);

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    }, [pathname]);

    return (
        <Dekorator tittel={tittel ? tittel : "ingen tittel"}>
            <div className={"blokk-center " + className}>
                <article className="artikkel" role="main">
                    <div className="innhold">
                        {illustrasjon && <span>{illustrasjon}</span>}
                        {children}
                    </div>
                </article>
            </div>
        </Dekorator>
    );
};

export default Artikkel;
