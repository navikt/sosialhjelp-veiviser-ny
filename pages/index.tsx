import Head from "next/head";
import React from "react";
import {
    fetchFrontPageWithLocale,
    fetchMetadataWithLocale,
    SanityFrontpage,
    SanityMetadata,
} from "../src/utils/sanityFetch";

import {Alert} from "../components/frontPage/Alert";
import {useRouter} from "next/router";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import styled from "styled-components";
import {FrontpageBanner} from "../components/FrontpageBanner";
import {useDecorator} from "../src/utils/useNextDecorator";
import {Cell, ContentContainer, Grid, Title} from "@navikt/ds-react";
import {FrontPageLinkPanel} from "../components/frontPage/FrontPageLinkPanel";
import {ApplyDigitallyPanel} from "../components/frontPage/ApplyDigitallyPanel";

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
        .navds-title {
            margin: 0 2rem;
        }
    }
`;

const Line = styled.span`
    @media screen and (min-width: 480px) {
        flex: 1;
        height: 0px;
        border: 1px solid #78706a;
    }
`;
interface PageProps {
    metadata: SanityMetadata;
    frontPage: SanityFrontpage;
}

const Index = (props: PageProps) => {
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
                <title>{props.metadata.title}</title>
                <meta property="og:title" content={props.metadata.title} />
                {props.frontPage.metaDescription && (
                    <>
                        <meta
                            name="Description"
                            content={props.frontPage.metaDescription}
                        />
                        <meta
                            property="og:description"
                            content={props.frontPage.metaDescription}
                        />
                    </>
                )}
                <meta property="og:locale" content={router.locale} />
                <meta
                    property="og:image"
                    content={props.metadata.bannerIconUrl}
                />
            </Head>
            <StyledApp>
                <FrontpageBanner
                    title={props.frontPage.title}
                    iconUrl={props.frontPage.bannerIconUrl}
                />
                <ContentContainer>
                    <Grid role="main">
                        <Cell xs={12}>
                            <Alert {...props.frontPage.alert} />
                        </Cell>
                        <Cell xs={12}>
                            <ApplyDigitallyPanel
                                {...props.frontPage.applyDigitallyPanel}
                            />
                        </Cell>
                        {props.frontPage.featuredArticles?.map((link) => (
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
                                <Title level={2} size="m">
                                    {props.frontPage.otherArticlesTitle}
                                </Title>
                                <Line />
                            </HeadingWithLine>
                        </Cell>

                        {props.frontPage.otherArticles?.map((link) => (
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
        metadata: SanityMetadata;
        frontPage: SanityFrontpage;
    };
    revalidate: number;
}
export const getStaticProps = async ({locale = "nb"}): Promise<StaticProps> => {
    const metadata = await fetchMetadataWithLocale(locale);
    const frontPage = await fetchFrontPageWithLocale(locale);
    return {
        props: {metadata, frontPage},
        revalidate: 60,
    };
};

export default Index;
