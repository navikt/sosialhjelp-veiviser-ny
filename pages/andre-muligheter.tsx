import Head from "next/head";
import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import {
    fetchFrontPageWithLocale,
    fetchMetadataWithLocale,
    fetchOtherPossibilitiesWithLocale,
    SanityFrontpage,
    SanityMetadata,
    SanityOtherPossibilitiesPage,
    SanityPanelSpec,
} from "../src/utils/sanityFetch";

import {PageBanner} from "../components/PageBanner";
import {Alert} from "../components/frontPage/Alert";
import {SokOmSosialhjelpPanel} from "../components/frontPage/SokSosialhjelpPanel";
import {LenkeboksContainer} from "../components/frontPage/LenkeboksContainer";
import {Lenkeboks} from "../components/frontPage/Lenkeboks";
import {useRouter} from "next/router";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import {Content} from "../components/Content";
import styled from "styled-components/macro";
import {Article} from "../components/article/Article";
import {Ingress, Normaltekst, Undertittel} from "nav-frontend-typografi";
import {detekterSprak} from "../src/utils/sprakUtils";
import Lenke from "nav-frontend-lenker";
import Link from "next/link";
import {LenkeboksAndreMuligheter} from "../components/otherPossibilties/LenkeboksAndreMuligheter";
import {JobblystPanel} from "../components/otherPossibilties/JobblystPanel";
import {LenkepanelBase} from "nav-frontend-lenkepanel";
import {HjelpTilBolig} from "../src/artikler/andre-muligheter/komponenter/HjelpTilBolig";
import {UnderpanelBolig} from "../src/artikler/andre-muligheter/komponenter/UnderpanelBolig";

interface PageProps {
    otherPossibilities: SanityOtherPossibilitiesPage;
    metadata: SanityMetadata;
}

const OtherPossibilitiesContent = styled.div`
    max-width: 55rem;
    margin-left: auto;
    margin-right: auto;

    @media all and (max-width: 803px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    @media all and (min-width: 804px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const OtherPossibilitiesArticle = styled.div`
    background-color: white;
    margin-bottom: 4rem;

    @media (min-width: 601px) {
        padding: 2rem 6rem 4rem;
    }

    @media (max-width: 600px) {
        padding: 2rem 0.5rem 2rem;
    }
`;

const StyledIcon = styled.img`
    width: 100%;
    height: 65px;
    margin-bottom: 2rem;
`;

const AndreMuligheter = (props: PageProps) => {
    const router = useRouter();

    const breadcrumbPage = {
        title: props.otherPossibilities.title,
        url: `${router.basePath}/${router.locale}/andre-muligheter`,
    };

    const languages: Language[] = router.locales.map((locale) => {
        return {
            locale,
            url: `${router.basePath}/${locale}/andre-muligheter`,
        };
    });

    return (
        <DecoratedApp
            breadcrumbPage={breadcrumbPage}
            availableLanguages={languages}
        >
            <>
                <Head>
                    <title>
                        {props.metadata.title} -{" "}
                        {props.otherPossibilities.title}
                    </title>
                    <meta
                        property="og:title"
                        content={`${props.metadata.title} - ${props.otherPossibilities.title}`}
                    />
                    {props.otherPossibilities.metaDescription && (
                        <>
                            <meta
                                name="Description"
                                content={
                                    props.otherPossibilities.metaDescription
                                }
                            />
                            <meta
                                property="og:description"
                                content={
                                    props.otherPossibilities.metaDescription
                                }
                            />
                        </>
                    )}
                    <meta property="og:locale" content={router.locale} />
                    <meta
                        property="og:image"
                        content={props.metadata.bannerIconUrl}
                    />
                </Head>
                <PageBanner title={props.metadata.title} />

                <OtherPossibilitiesContent>
                    <OtherPossibilitiesArticle>
                        {props.otherPossibilities?.iconUrl && (
                            <StyledIcon
                                src={props.otherPossibilities?.iconUrl}
                                alt=""
                            />
                        )}

                        <Ingress>{props.otherPossibilities.ingress}</Ingress>
                    </OtherPossibilitiesArticle>
                    <LenkeboksContainer>
                        <LenkeboksAndreMuligheter
                            innhold={
                                props.otherPossibilities.panelTopLeft.innhold
                            }
                        />
                        <LenkeboksAndreMuligheter
                            innhold={
                                props.otherPossibilities.panelTopRight.innhold
                            }
                        />
                    </LenkeboksContainer>

                    <HjelpTilBolig>
                        <Undertittel>
                            {props.otherPossibilities.housing.title}
                        </Undertittel>
                    </HjelpTilBolig>
                    <UnderpanelBolig>
                        {props.otherPossibilities.housing.panels.map(
                            (panel) => {
                                return (
                                    <LenkepanelBase
                                        key={panel.title}
                                        href={panel.href}
                                    >
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
                            }
                        )}
                    </UnderpanelBolig>

                    <LenkeboksContainer>
                        <LenkeboksAndreMuligheter
                            innhold={
                                props.otherPossibilities.panelBottomLeft.innhold
                            }
                        />
                        <LenkeboksAndreMuligheter
                            innhold={
                                props.otherPossibilities.panelBottomRight
                                    .innhold
                            }
                        />
                    </LenkeboksContainer>

                    <JobblystPanel {...props.otherPossibilities.jobblyst} />
                </OtherPossibilitiesContent>
            </>
        </DecoratedApp>
    );
};

interface StaticProps {
    props: {
        otherPossibilities: SanityOtherPossibilitiesPage;
        metadata: SanityMetadata;
    };
    revalidate: number;
}
export const getStaticProps = async ({locale = "nb"}): Promise<StaticProps> => {
    const metadata = await fetchMetadataWithLocale(locale);
    const otherPossibilities = await fetchOtherPossibilitiesWithLocale(locale);
    return {
        props: {otherPossibilities, metadata},
        revalidate: 60,
    };
};

export default AndreMuligheter;
