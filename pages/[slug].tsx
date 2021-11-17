import {Language} from "@navikt/nav-dekoratoren-moduler";
import {useRouter} from "next/router";
import React from "react";
import styled from "styled-components";
import {Article} from "../components/article/Article";
import {Content} from "../components/Content";
import {DecoratedApp} from "../components/DecoratedApp";
import {PageBanner} from "../components/PageBanner";
import {SanityBlockContent} from "../components/SanityBlockContentNext";
import {
    blockContentSpec,
    fetchAllArticleSlugs,
    metadataSpec,
    SanityArticle,
    SanityMetadata,
} from "../src/utils/sanityFetch";
import Custom404 from "./404";
import {Lastestriper} from "../components/Lastestriper";
import Head from "next/head";
import {Heading} from "@navikt/ds-react";
import {groq} from "next-sanity";
import client from "../src/utils/sanityClient";
import {REVALIDATE_IN_SECONDS} from "../src/utils/variables";

const query = groq`
{
    "metadata": ${metadataSpec},
    "article": *[_type == "article" && slug.current == $slug][0]
    {
        "id": _id,
        "title": coalesce(title[$locale], title.nb),
        "slug": slug.current,
        "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
        "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
        "iconUrl": icon.asset->url,
        languages
    }
}`;

interface PageProps {
    data: {
        article: SanityArticle;
        metadata: SanityMetadata;
    };
}

const StyledIcon = styled.img`
    width: 100%;
    height: 65px;
`;

const ArticlePage = (props: PageProps) => {
    const {data} = props;

    const router = useRouter();

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

    if (!router.isFallback && !data.article) {
        return <Custom404 />;
    }

    const breadcrumbPage = {
        title: data.article.title,
        url: `${router.basePath}/${router.locale}/${data.article.slug}`,
    };

    const languages: Language[] = data.article.languages.map((locale) => {
        return {
            locale,
            url: `${router.basePath}/${locale}/${data.article.slug}`,
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
                        {data.metadata.title} - {data.article.title}
                    </title>
                    <meta
                        property="og:title"
                        content={`${data.metadata.title} - ${data.article.title}`}
                    />
                    {data.article.metaDescription && (
                        <>
                            <meta
                                name="Description"
                                content={data.article.metaDescription}
                            />
                            <meta
                                property="og:description"
                                content={data.article.metaDescription}
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
                        href={`${process.env.NEXT_PUBLIC_APP_URL}/${data.article.slug}`}
                    />
                </Head>
                <PageBanner title={data.metadata.title} />
                <Content>
                    <Article>
                        {data.article?.iconUrl && (
                            <StyledIcon src={data.article.iconUrl} alt="" />
                        )}
                        <Heading level="1" size="2xlarge" spacing>
                            {data.article?.title}
                        </Heading>
                        <SanityBlockContent blocks={data.article.body} />
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
        fallback: true,
    };
};

interface StaticProps {
    props: {
        data: {
            article: SanityArticle;
            metadata: SanityMetadata;
        };
    };
    revalidate: number;
}

export const getStaticProps = async ({
    locale,
    params: {slug},
}): Promise<StaticProps> => {
    const params = {slug: slug, locale: locale};
    const data = await client.fetch(query, params);
    return {
        props: {data},
        revalidate: REVALIDATE_IN_SECONDS,
    };
};

export default ArticlePage;
