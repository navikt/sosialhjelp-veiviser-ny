import {Ingress, Title} from "@navikt/ds-react";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import Veilederpanel from "nav-frontend-veilederpanel";
import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";
import styled from "styled-components/macro";
import {Article} from "../components/article/Article";
import {SokDigitalt} from "../components/article/SokDigitalt";
import {Content} from "../components/Content";
import {DecoratedApp} from "../components/DecoratedApp";
import {PageBanner} from "../components/PageBanner";
import {SanityBlockContent} from "../components/SanityBlockContentNext";
import {
    fetchMetadataWithLocale,
    SanityMetadata,
    fetchApplicationPageWithLocale,
    SanityApplicationPage,
} from "../src/utils/sanityFetch";
import {fetchKommuner, KommunerResponse} from "./api/kommuner";
import {fetchNedetid, NedetidResponse} from "./api/nedetid";

const StyledVeilederPanel = styled.div`
    margin: 5em 0 2em 0;

    .navds-title {
        display: block;
        width: 100%;
        text-align: center;
    }
`;

interface PageProps {
    page: SanityApplicationPage;
    metadata: SanityMetadata;
    kommuner: KommunerResponse;
    nedetid: NedetidResponse;
}

const SlikSokerDu = (props: PageProps) => {
    const router = useRouter();

    const breadcrumbPage = {
        title: props.page.title,
        url: `${router.basePath}/${router.locale}/slik-soker-du`,
    };

    const languages: Language[] = router.locales.map((locale) => {
        return {
            locale,
            url: `${router.basePath}/${locale}/slik-soker-du`,
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
                        {props.metadata.title} - {props.page.title}
                    </title>
                    <meta
                        property="og:title"
                        content={`${props.metadata.title} - ${props.page.title}`}
                    />
                    {props.page.metaDescription && (
                        <>
                            <meta
                                name="Description"
                                content={props.page.metaDescription}
                            />
                            <meta
                                property="og:description"
                                content={props.page.metaDescription}
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
                        href={`${process.env.NEXT_PUBLIC_APP_URL}/slik-soker-du`}
                    />
                </Head>
                <PageBanner title={props.metadata.title} />
                <Content>
                    <Article>
                        <Title level={1} size="2xl" spacing>
                            {props.page.title}
                        </Title>
                        <Ingress spacing>{props.page.ingress}</Ingress>

                        <StyledVeilederPanel>
                            <Veilederpanel
                                type="plakat"
                                kompakt
                                fargetema="suksess"
                                svg={
                                    <img
                                        src={
                                            props.page.applyDigitallyPanel
                                                .iconUrl
                                        }
                                        alt=""
                                    />
                                }
                            >
                                <Title level={2} size="m" spacing>
                                    {props.page.applyDigitallyPanel.title}
                                </Title>
                                <SokDigitalt
                                    nedetid={props.nedetid}
                                    kommuner={props.kommuner}
                                    applyDigitallyPanel={
                                        props.page.applyDigitallyPanel
                                    }
                                />
                            </Veilederpanel>
                        </StyledVeilederPanel>

                        <StyledVeilederPanel>
                            <Veilederpanel
                                type="plakat"
                                kompakt
                                fargetema="suksess"
                                svg={
                                    <img
                                        src={
                                            props.page.applyOfflinePanel.iconUrl
                                        }
                                        alt=""
                                    />
                                }
                            >
                                <Title level={2} size="m" spacing>
                                    {props.page.applyOfflinePanel.title}
                                </Title>
                                <SanityBlockContent
                                    blocks={props.page.applyOfflinePanel.body}
                                />
                            </Veilederpanel>
                        </StyledVeilederPanel>
                        <SanityBlockContent blocks={props.page.body} />
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

interface StaticProps {
    props: {
        page: SanityApplicationPage;
        metadata: SanityMetadata;
        kommuner: KommunerResponse;
        nedetid: NedetidResponse;
    };
    revalidate: number;
}

export const getStaticProps = async ({locale}): Promise<StaticProps> => {
    const metadata = await fetchMetadataWithLocale(locale);
    const page = await fetchApplicationPageWithLocale(locale);
    const kommuner = await fetchKommuner();
    const nedetid = await fetchNedetid();
    return {
        props: {page, metadata, kommuner, nedetid},
        revalidate: 60,
    };
};

export default SlikSokerDu;
