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
    SanityArticle,
} from "../src/utils/sanityFetch";
import Custom404 from "./404";
import {Lastestriper} from "../src/komponenter/Lastestriper";

interface PageProps {
    article: SanityArticle;
}

const StyledIcon = styled.img`
    width: 100%;
    height: 65px;
`;

const ArticlePage = (props: PageProps) => {
    const router = useRouter();

    const {article} = props;

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
                <PageBanner title={article.title} />
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

export const getStaticPaths = async (): Promise<StaticPathProps> => {
    const articleSlugs = await fetchAllArticleSlugs();

    return {
        paths:
            articleSlugs?.map((article) => ({
                params: {
                    slug: article.slug,
                },
            })) || [],
        fallback: true,
    };
};

interface StaticProps {
    props: {
        article: SanityArticle;
    };
    revalidate: number;
}

export const getStaticProps = async ({
    locale,
    params: {slug},
}): Promise<StaticProps> => {
    const article = await fetchArticleWithSlugAndLocale(slug, locale);
    return {
        props: {article},
        revalidate: 60,
    };
};

export default ArticlePage;
