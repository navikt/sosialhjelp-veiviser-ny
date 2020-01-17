import * as React from "react";
import "./brodsmulesti.less";
import NavFrontendChevron from "nav-frontend-chevron";
import {onClickLink} from "../../utils/navigasjon";
import useWindowSize from "../../utils/useWindowSize";
import {detekterSprak} from "../../utils/sprakUtils";

export type BrodsmulestiForeldreside = {
    tittel: string;
    path: string;
};

interface Props {
    tittel: string;
    className?: string;
    foreldreside?: BrodsmulestiForeldreside;
}

const Brodsmulesti: React.FC<Props> = ({tittel, className, foreldreside}) => {
    const valgtSprak: string = detekterSprak();
    const {width} = useWindowSize();
    const frontpageUrl = `/?lang=${valgtSprak}`;

    const tilbakeUrl =
        (foreldreside && foreldreside.path ? foreldreside.path : frontpageUrl) +
        "?lang=" +
        valgtSprak;

    let crumbs: React.ReactNode = (
        <>
            <div key="tilbake" className="typo-normal breadcrumbs__item">
                <a
                    href=".."
                    onClick={(event: any) => onClickLink(event, frontpageUrl)}
                    title="Gå til forrige side"
                >
                    Økonomisk sosialhjelp
                </a>
            </div>
            {foreldreside && (
                <>
                    <div key="chevron" aria-hidden={true}>
                        <NavFrontendChevron type="høyre" />
                    </div>
                    <a
                        href=".."
                        onClick={(event: any) =>
                            onClickLink(event, foreldreside.path)
                        }
                        title={foreldreside.tittel}
                        className="breadcrumbs__parent"
                    >
                        {foreldreside.tittel}
                    </a>
                </>
            )}

            <div key="chevron" aria-hidden={true}>
                <NavFrontendChevron type="høyre" />
            </div>
            <div
                aria-current="page"
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
                    <NavFrontendChevron type="venstre" />
                </div>
                <p className="typo-normal breadcrumbs__item">
                    <a
                        href=".."
                        title="Gå til forrige side"
                        onClick={(event: any) => onClickLink(event, tilbakeUrl)}
                    >
                        {valgtSprak === "en" ? "Back" : "Tilbake"}
                    </a>
                </p>
            </>
        );
    }

    return (
        <nav
            role="navigation"
            aria-label="Du er her"
            className={"breadcrumbs " + (className ? className : "")}
        >
            {crumbs}
        </nav>
    );
};

export default Brodsmulesti;
