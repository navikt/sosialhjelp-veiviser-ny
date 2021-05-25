import {Language} from "@navikt/nav-dekoratoren-moduler";
import {Innholdstittel} from "nav-frontend-typografi";
import {useRouter} from "next/router";
import React from "react";
import styled from "styled-components/macro";
import {Article} from "../components/article/Article";
import {Content} from "../components/Content";
import {DecoratedApp} from "../components/DecoratedApp";
import {PageBanner} from "../components/PageBanner";
import {SanityBlockContent} from "../components/SanityBlockContentNext";
import {
    fetchAllArticleSlugs,
    fetchArticleWithSlugAndLocale,
    fetchMetadataWithLocale,
    SanityArticle,
    SanityMetadata,
} from "../src/utils/sanityFetch";
import Custom404 from "./404";
import {Lastestriper} from "../components/Lastestriper";
import Head from "next/head";

interface PageProps {
    article: SanityArticle;
    metadata: SanityMetadata;
}

const StyledIcon = styled.img`
    width: 100%;
    height: 65px;
`;

const ArticlePage = (props: PageProps) => {
    const router = useRouter();

    const {article, metadata} = props;

    if (router.isFallback) {
        return (
            <DecoratedApp availableLanguages={[]}>
                <>
                    <PageBanner title={""} />
                    <Content>
                        <Article>
                            <Lastestriper />
                        </Article>
                    </Content>
                </>
            </DecoratedApp>
        );
    }

    if (!router.isFallback && !article) {
        return <Custom404 />;
    }

    const breadcrumbPage = {
        title: article.title,
        url: `${router.basePath}/${router.locale}/${article.slug}`,
    };

    const languages: Language[] = article.languages.map((locale) => {
        return {
            locale,
            url: `${router.basePath}/${locale}/${article.slug}`,
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
                        {props.metadata.title} - {props.article.title}
                    </title>
                    <meta
                        property="og:title"
                        content={`${props.metadata.title} - ${props.article.title}`}
                    />
                    {props.article.metaDescription && (
                        <>
                            <meta
                                name="Description"
                                content={props.article.metaDescription}
                            />
                            <meta
                                property="og:description"
                                content={props.article.metaDescription}
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
                        href={`${process.env.NEXT_PUBLIC_APP_URL}/${props.article.slug}`}
                    />
                </Head>
                <PageBanner title={metadata.title} />
                <Content>
                    <Article>
                        {article?.iconUrl && (
                            <StyledIcon src={article.iconUrl} alt="" />
                        )}
                        <Innholdstittel>{article?.title}</Innholdstittel>
                        <SanityBlockContent blocks={article.body} />
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

export interface StaticPathProps {
    paths: {params: {slug: string}}[];
    fallback: boolean;
}

export const getStaticPaths = async ({locales}): Promise<StaticPathProps> => {
    const articleSlugs = await fetchAllArticleSlugs();

    return {
        paths: locales
            .map((locale: string) => {
                return articleSlugs?.map((page) => {
                    return {params: {slug: page.slug}, locale};
                });
            })
            .flat(),
        fallback: false,
    };
};

interface StaticProps {
    props: {
        article: SanityArticle;
        metadata: SanityMetadata;
    };
    revalidate: number;
}

export const getStaticProps = async ({
    locale,
    params: {slug},
}): Promise<StaticProps> => {
    const metadata = await fetchMetadataWithLocale(locale);
    const article = await fetchArticleWithSlugAndLocale(slug, locale);
    return {
        props: {article, metadata},
        revalidate: 60,
    };
};

export default ArticlePage;
