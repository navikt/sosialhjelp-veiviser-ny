import Head from "next/head";
import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import {
    fetchMetadataWithLocale,
    fetchOtherPossibilitiesWithLocale,
    SanityMetadata,
    SanityOtherPossibilitiesPage,
} from "../src/utils/sanityFetch";

import {PageBanner} from "../components/PageBanner";
import {useRouter} from "next/router";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import styled from "styled-components/macro";
import {LenkeboksAndreMuligheter} from "../components/otherPossibilties/LenkeboksAndreMuligheter";
import {JobblystPanel} from "../components/otherPossibilties/JobblystPanel";
import {LenkepanelBase} from "nav-frontend-lenkepanel";
import {HjelpTilBolig} from "../components/otherPossibilties//HjelpTilBolig";
import {UnderpanelBolig} from "../components/otherPossibilties/UnderpanelBolig";
import {
    BodyShort,
    Cell,
    ContentContainer,
    Grid,
    Ingress,
    Title,
} from "@navikt/ds-react";

interface PageProps {
    otherPossibilities: SanityOtherPossibilitiesPage;
    metadata: SanityMetadata;
}

const OtherPossibilitiesArticle = styled.div`
    background-color: white;
    margin-bottom: 4rem;

    @media (min-width: 601px) {
        padding: 2rem 6rem 4rem;
    }

    @media (max-width: 600px) {
        padding: 2rem 1rem 2rem;
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
                    <link
                        rel="canonical"
                        href={`${process.env.NEXT_PUBLIC_APP_URL}/andre-muligheter`}
                    />
                </Head>
                <PageBanner title={props.metadata.title} />

                <ContentContainer>
                    <Grid>
                        <Cell xs={12}>
                            <OtherPossibilitiesArticle>
                                {props.otherPossibilities?.iconUrl && (
                                    <StyledIcon
                                        src={props.otherPossibilities?.iconUrl}
                                        alt=""
                                    />
                                )}

                                <Ingress>
                                    {props.otherPossibilities.ingress}
                                </Ingress>
                            </OtherPossibilitiesArticle>
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    props.otherPossibilities.panelTopLeft
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    props.otherPossibilities.panelTopRight
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12}>
                            <HjelpTilBolig>
                                <Title level={2} size="m">
                                    {props.otherPossibilities.housing.title}
                                </Title>
                            </HjelpTilBolig>
                            <UnderpanelBolig>
                                {props.otherPossibilities.housing.panels.map(
                                    (panel) => {
                                        return (
                                            <LenkepanelBase
                                                key={panel.title}
                                                href={panel.href}
                                            >
                                                <Title
                                                    level={3}
                                                    size="m"
                                                    className="lenkepanel__heading"
                                                >
                                                    {panel.title}
                                                </Title>
                                                {panel.description && (
                                                    <BodyShort>
                                                        {panel.description}
                                                    </BodyShort>
                                                )}
                                            </LenkepanelBase>
                                        );
                                    }
                                )}
                            </UnderpanelBolig>
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    props.otherPossibilities.panelBottomLeft
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    props.otherPossibilities.panelBottomRight
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12}>
                            <JobblystPanel
                                {...props.otherPossibilities.jobblyst}
                            />
                        </Cell>
                    </Grid>
                </ContentContainer>
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
