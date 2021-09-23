import Head from "next/head";
import React from "react";
import {
    metadataSpec,
    SanityFrontpage,
    SanityMetadata,
} from "../src/utils/sanityFetch";

import {Alert} from "../components/frontPage/Alert";
import {useRouter} from "next/router";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import styled from "styled-components";
import {FrontpageBanner} from "../components/FrontpageBanner";
import {useDecorator} from "../src/utils/useNextDecorator";
import {Cell, ContentContainer, Grid, Heading} from "@navikt/ds-react";
import {FrontPageLinkPanel} from "../components/frontPage/FrontPageLinkPanel";
import {ApplyDigitallyPanel} from "../components/frontPage/ApplyDigitallyPanel";
import {groq} from "next-sanity";
import client from "../src/utils/sanityClient";
import {REVALIDATE_IN_SECONDS} from "../src/utils/variables";

const StyledApp = styled.div`
    background-color: var(--navds-color-gray-10);
    padding-bottom: 5.625rem;
`;

const HeadingWithLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-top: 2rem;

    @media screen and (min-width: 480px) {
        .navds-heading {
            margin: 0 2rem;
        }
    }
`;

const Line = styled.span`
    @media screen and (min-width: 480px) {
        flex: 1;
        height: 0px;
        border-bottom: 1px solid #78706a;
    }
`;

const query = groq`
{
    "metadata": ${metadataSpec},
    "frontPage": *[_type == "frontPage"][0]
    {
        "title": coalesce(title[$locale], title.nb),
        "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
        "bannerIconUrl": bannerIcon.asset->url,
        "alert": alert->{
          "title": coalesce(title[$locale], title.nb),
          "slug": article->slug.current,
          variant,
        },
        "applyDigitallyPanel": applyDigitallyPanel{
            "title": coalesce(title[$locale], title.nb),
            "description": coalesce(description[$locale], description.nb),
            "nySoknadButtonText": coalesce(nySoknadButtonText[$locale], nySoknadButtonText.nb),
            "innsynButtonText": coalesce(innsynButtonText[$locale], innsynButtonText.nb),
            "illustrationUrl": illustration.asset->url,
        },
        "featuredArticles": featuredArticles[]{
            "title": coalesce(title[$locale], title.nb),
            "description": coalesce(description[$locale], description.nb),
            "slug": article->slug.current,
            externalLink,
            "iconUrl": icon.asset->url,
        },
        "otherArticlesTitle": coalesce(otherArticlesTitle[$locale], otherArticlesTitle.nb),
        "otherArticles": otherArticles[]{
            "title": coalesce(title[$locale], title.nb),
            "description": coalesce(description[$locale], description.nb),
            "slug": article->slug.current,
            externalLink,
            "iconUrl": icon.asset->url,
        },
    }
}
`;

interface PageProps {
    data: {
        metadata: SanityMetadata;
        frontPage: SanityFrontpage;
    };
}

const Index = (props: PageProps) => {
    const {data} = props;
    const router = useRouter();

    const languages: Language[] = router.locales.map((locale) => {
        return {
            locale,
            url: `${router.basePath}/${locale}`,
        };
    });

    useDecorator(undefined, languages);

    return (
        <>
            <Head>
                <title>{data.metadata.title}</title>
                <meta property="og:title" content={data.metadata.title} />
                {data.frontPage.metaDescription && (
                    <>
                        <meta
                            name="Description"
                            content={data.frontPage.metaDescription}
                        />
                        <meta
                            property="og:description"
                            content={data.frontPage.metaDescription}
                        />
                    </>
                )}
                <meta property="og:locale" content={router.locale} />
                <meta
                    property="og:image"
                    content={data.metadata.bannerIconUrl}
                />
            </Head>
            <StyledApp>
                <FrontpageBanner
                    title={data.frontPage.title}
                    iconUrl={data.frontPage.bannerIconUrl}
                />
                <ContentContainer>
                    <Grid role="main">
                        <Cell xs={12}>
                            <Alert {...data.frontPage.alert} />
                        </Cell>
                        <Cell xs={12}>
                            <ApplyDigitallyPanel
                                {...data.frontPage.applyDigitallyPanel}
                            />
                        </Cell>
                        {data.frontPage.featuredArticles?.map((link) => (
                            <Cell xs={12} md={6} lg={4} key={link.title}>
                                <FrontPageLinkPanel
                                    title={link.title}
                                    slug={link.slug}
                                    externalLink={link.externalLink}
                                    description={link.description}
                                    iconUrl={link.iconUrl}
                                />
                            </Cell>
                        ))}

                        <Cell xs={12}>
                            <HeadingWithLine>
                                <Line />
                                <Heading level="2" size="medium">
                                    {data.frontPage.otherArticlesTitle}
                                </Heading>
                                <Line />
                            </HeadingWithLine>
                        </Cell>

                        {data.frontPage.otherArticles?.map((link) => (
                            <Cell xs={12} md={6} lg={4} key={link.title}>
                                <FrontPageLinkPanel
                                    title={link.title}
                                    slug={link.slug}
                                    externalLink={link.externalLink}
                                    description={link.description}
                                />
                            </Cell>
                        ))}
                    </Grid>
                </ContentContainer>
            </StyledApp>
        </>
    );
};

interface StaticProps {
    props: {
        data: {
            metadata: SanityMetadata;
            frontPage: SanityFrontpage;
        };
    };
    revalidate: number;
}
export const getStaticProps = async ({locale = "nb"}): Promise<StaticProps> => {
    try {
        const params = {locale: locale};
        const data = await client.fetch(query, params);
        return {
            props: {data},
            revalidate: REVALIDATE_IN_SECONDS,
        };
    } catch (e) {
        console.log("error", e);
        throw e;
    }
};

export default Index;
