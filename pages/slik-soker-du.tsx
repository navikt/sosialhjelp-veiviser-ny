import {Language} from "@navikt/nav-dekoratoren-moduler";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
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

    .typo-undertittel {
        margin-top: 0;
        margin-bottom: 1rem;
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
                </Head>
                <PageBanner title={props.metadata.title} />
                <Content>
                    <Article>
                        <Innholdstittel>{props.page.title}</Innholdstittel>
                        <Normaltekst>{props.page.ingress}</Normaltekst>

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
                                <Undertittel>
                                    {props.page.applyDigitallyPanel.title}
                                </Undertittel>
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
                                <Undertittel>
                                    {props.page.applyOfflinePanel.title}
                                </Undertittel>
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
