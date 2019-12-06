import * as React from "react";
import "./brodsmulesti.less";
import NavFrontendChevron from 'nav-frontend-chevron';
import {onClickLink} from "../../utils/navigasjon";
import useWindowSize from "../../utils/useWindowSize";

const Brodsmulesti: React.FC<{ tittel: string, className?: string }> = ({tittel, className}) => {
    const {width} = useWindowSize();
    const frontpageUrl = `/`;

    let crumbs: React.ReactNode = (
        <>
            <div key="tilbake" className="typo-normal breadcrumbs__item">
                <a href=".."
                   onClick={(event: any) => onClickLink(event, frontpageUrl)}
                   title="Gå til forrige side"
                >
                    Økonomisk sosialhjelp
                </a>
            </div>
            <div key="chevron" aria-hidden={true}>
                <NavFrontendChevron type="høyre"/>
            </div>
            <div aria-current="page"
               key="currentPage"
               className="typo-normal breadcrumbs__item breadcrumbs__current"
            >
                {tittel}
            </div>

        </>
    );

    if (width && width < 576) {
        crumbs = (
            <>
                <div key="chevron" aria-hidden={true}>
                    <NavFrontendChevron type="venstre"/>
                </div>
                <p className="typo-normal breadcrumbs__item">
                    <a
                        href=".."
                        title="Gå til forrige side"
                        onClick={(event: any) => onClickLink(event, frontpageUrl)}
                    >
                        Tilbake
                    </a>
                </p>
            </>
        )
    }

    return (
        <nav aria-label="Du er her" className={"breadcrumbs " + (className ? className : "")}>
            {crumbs}
        </nav>
    );
};

export default Brodsmulesti;
