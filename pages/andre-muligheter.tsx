import Head from "next/head";
import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import {
    metadataSpec,
    SanityMetadata,
    SanityOtherPossibilitiesPage,
} from "../src/utils/sanityFetch";

import {PageBanner} from "../components/PageBanner";
import {useRouter} from "next/router";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import styled from "styled-components/macro";
import {LenkeboksAndreMuligheter} from "../components/otherPossibilties/LenkeboksAndreMuligheter";
import {JobblystPanel} from "../components/otherPossibilties/JobblystPanel";
import {HjelpTilBolig} from "../components/otherPossibilties//HjelpTilBolig";
import {UnderpanelBolig} from "../components/otherPossibilties/UnderpanelBolig";
import {
    BodyShort,
    Cell,
    ContentContainer,
    Grid,
    Ingress,
    LinkPanel,
    Heading,
} from "@navikt/ds-react";
import groq from "groq";
import client from "../src/utils/sanityClient";
import {REVALIDATE_IN_SECONDS} from "../src/utils/variables";

const panelSpec = `
{
    "innhold": innhold[]{
        "title": coalesce(title[$locale], title.nb),
        "boxElements": boxElements[]{
            "text": coalesce(text[$locale], text.nb),
            "externalHref": coalesce(externalHref[$locale], externalHref.nb),
            "internalHref": internalHref->slug.current,
        },
    }
}`;

const query = groq`
{
    "metadata": ${metadataSpec},
    "otherPossibilities": *[_type == "otherPossibilities"][0]
    {
        "title": coalesce(title[$locale], title.nb),
        "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
        "iconUrl": icon.asset->url,
        "ingress": coalesce(ingress[$locale], ingress.nb),
        "panelTopLeft": panelTopLeft${panelSpec},
        "panelTopRight": panelTopRight${panelSpec},
        "housing": housing{
            "title": coalesce(title[$locale], title.nb),
            "panels": panels[]{
                "title": coalesce(title[$locale], title.nb),
                "description": coalesce(description[$locale], description.nb),
                "href": coalesce(href[$locale], href.nb),
            }
        },
        "panelBottomLeft": panelBottomLeft${panelSpec},
        "panelBottomRight": panelBottomRight${panelSpec},
        "jobblyst": jobblyst{
            "title": coalesce(title[$locale], title.nb),
            "description": coalesce(description[$locale], description.nb),
            "illustrationUrl": illustration.asset->url,
            href
        },
    }
}`;

interface PageProps {
    data: {
        otherPossibilities: SanityOtherPossibilitiesPage;
        metadata: SanityMetadata;
    };
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
    const {data} = props;
    const router = useRouter();

    const breadcrumbPage = {
        title: data.otherPossibilities.title,
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
                        {data.metadata.title} - {data.otherPossibilities.title}
                    </title>
                    <meta
                        property="og:title"
                        content={`${data.metadata.title} - ${data.otherPossibilities.title}`}
                    />
                    {data.otherPossibilities.metaDescription && (
                        <>
                            <meta
                                name="Description"
                                content={
                                    data.otherPossibilities.metaDescription
                                }
                            />
                            <meta
                                property="og:description"
                                content={
                                    data.otherPossibilities.metaDescription
                                }
                            />
                        </>
                    )}
                    <meta property="og:locale" content={router.locale} />
                    <meta
                        property="og:image"
                        content={data.metadata.bannerIconUrl}
                    />
                    <link
                        rel="canonical"
                        href={`${process.env.NEXT_PUBLIC_APP_URL}/andre-muligheter`}
                    />
                </Head>
                <PageBanner title={data.metadata.title} />

                <ContentContainer>
                    <Grid role="main">
                        <Cell xs={12}>
                            <OtherPossibilitiesArticle>
                                {data.otherPossibilities?.iconUrl && (
                                    <StyledIcon
                                        src={data.otherPossibilities?.iconUrl}
                                        alt=""
                                    />
                                )}

                                <Ingress>
                                    {data.otherPossibilities.ingress}
                                </Ingress>
                            </OtherPossibilitiesArticle>
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    data.otherPossibilities.panelTopLeft.innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    data.otherPossibilities.panelTopRight
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12}>
                            <HjelpTilBolig>
                                <Heading level="2" size="medium">
                                    {data.otherPossibilities.housing.title}
                                </Heading>
                            </HjelpTilBolig>
                            <UnderpanelBolig>
                                {data.otherPossibilities.housing.panels.map(
                                    (panel) => {
                                        return (
                                            <LinkPanel
                                                key={panel.title}
                                                href={panel.href}
                                                border={false}
                                            >
                                                <LinkPanel.Title>
                                                    {panel.title}
                                                </LinkPanel.Title>
                                                {panel.description && (
                                                    <LinkPanel.Description>
                                                        {panel.description}
                                                    </LinkPanel.Description>
                                                )}
                                            </LinkPanel>
                                        );
                                    }
                                )}
                            </UnderpanelBolig>
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    data.otherPossibilities.panelBottomLeft
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12} lg={6}>
                            <LenkeboksAndreMuligheter
                                innhold={
                                    data.otherPossibilities.panelBottomRight
                                        .innhold
                                }
                            />
                        </Cell>
                        <Cell xs={12}>
                            <JobblystPanel
                                {...data.otherPossibilities.jobblyst}
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
        data: {
            otherPossibilities: SanityOtherPossibilitiesPage;
            metadata: SanityMetadata;
        };
    };
    revalidate: number;
}
export const getStaticProps = async ({locale = "nb"}): Promise<StaticProps> => {
    const params = {locale: locale};
    const data = await client.fetch(query, params);
    return {
        props: {data},
        revalidate: REVALIDATE_IN_SECONDS,
    };
};

export default AndreMuligheter;
