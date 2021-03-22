import * as React from "react";
import Artikkel from "../Artikkel";
import {
    Ingress,
    Innholdstittel,
    Normaltekst,
    Undertittel,
} from "nav-frontend-typografi";
import "./komponenter/andreMuligheter.less";
import {HjelpTilBolig} from "./komponenter/HjelpTilBolig";
import {UnderpanelBolig} from "./komponenter/UnderpanelBolig";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {JobblystPanel} from "./JobblystPanel";
import {LenkeboksLinje} from "../../komponenter/infopanel/LenkepanelLinje";
import LysPaere from "../../komponenter/bilder/LysPaere";
import {BlokkCenter} from "../../komponenter/BlokkCenter";
import {ARTICLE_WIDTH} from "../../utils/variables";
import {
    fetchOtherPossibilitiesWithLocale,
    SanityOtherPossibilitiesPage,
    SanityPanelSpec,
} from "../../utils/sanityFetch";
import {detekterSprak} from "../../utils/sprakUtils";
import {Lastestriper} from "../../komponenter/Lastestriper";

const AndreMuligheterSanity: React.FC = () => {
    const [page, setPage] = React.useState<SanityOtherPossibilitiesPage>();
    const [hasErros, setHasErrors] = React.useState(false);

    React.useEffect(() => {
        fetchOtherPossibilitiesWithLocale(detekterSprak())
            .then((response) => {
                setPage(response);
            })
            .catch((e) => {
                setHasErrors(true);
            });
    }, [setPage]);

    if (hasErros) {
        return (
            <Artikkel tittel="Det har oppstått en feil">
                <Innholdstittel>Det har oppstått en feil</Innholdstittel>
                Du kan laste siden på nytt, eller prøve igjen senere.
            </Artikkel>
        );
    }

    if (!page) {
        return (
            <Artikkel tittel=" ">
                <Lastestriper />
            </Artikkel>
        );
    }
    return (
        <>
            <Artikkel
                className="artikkel--andre_mulighter"
                tittel={page.title}
                illustrasjon={
                    <LysPaere className="illustrasjon_andre_muligheter" />
                }
                extraWide
            >
                <Ingress>{page.ingress}</Ingress>
            </Artikkel>

            <BlokkCenter width={ARTICLE_WIDTH.large}>
                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <BoxPanel innhold={page.panelTopLeft.innhold} />
                    <BoxPanel innhold={page.panelTopRight.innhold} />
                </div>

                <HjelpTilBolig>
                    <Undertittel>{page.housing.title}</Undertittel>
                </HjelpTilBolig>
                <UnderpanelBolig>
                    {page.housing.panels.map((panel) => {
                        return (
                            <LenkepanelBase href={panel.href}>
                                <Undertittel
                                    className="lenkepanel__heading"
                                    tag="h3"
                                >
                                    {panel.title}
                                </Undertittel>
                                {panel.description && (
                                    <Normaltekst>
                                        {panel.description}
                                    </Normaltekst>
                                )}
                            </LenkepanelBase>
                        );
                    })}
                </UnderpanelBolig>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <BoxPanel innhold={page.panelBottomLeft.innhold} />
                    <BoxPanel innhold={page.panelBottomRight.innhold} />
                </div>

                <JobblystPanel {...page.jobblyst} />
            </BlokkCenter>
        </>
    );
};

const BoxPanel = (props: SanityPanelSpec) => {
    return (
        <div className="lenkeboks">
            {props.innhold?.map((panel) => {
                return (
                    <>
                        <Undertittel style={{textAlign: "left"}}>
                            {panel.title}
                        </Undertittel>
                        <ul>
                            {panel.boxElements?.map((element) => {
                                if (element.internalHref) {
                                    return (
                                        <LenkeboksLinje
                                            href={`./${
                                                element.internalHref
                                            }?lang=${detekterSprak()}`}
                                        >
                                            {element.text}
                                        </LenkeboksLinje>
                                    );
                                }
                                if (element.externalHref)
                                    return (
                                        <LenkeboksLinje
                                            href={element.externalHref}
                                        >
                                            {element.text}
                                        </LenkeboksLinje>
                                    );
                            })}
                        </ul>
                    </>
                );
            })}
        </div>
    );
};

export default AndreMuligheterSanity;
