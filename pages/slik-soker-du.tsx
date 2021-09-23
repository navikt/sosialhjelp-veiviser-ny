import {Ingress, Heading} from "@navikt/ds-react";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import {groq} from "next-sanity";
import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";
import styled from "styled-components/macro";
import {Article} from "../components/article/Article";
import {ReimplementedGuidePanel} from "../components/article/ReimplementedGuidePanel";
import {SokDigitalt} from "../components/article/SokDigitalt";
import {Content} from "../components/Content";
import {DecoratedApp} from "../components/DecoratedApp";
import {PageBanner} from "../components/PageBanner";
import {SanityBlockContent} from "../components/SanityBlockContentNext";
import client from "../src/utils/sanityClient";
import {
    SanityMetadata,
    SanityApplicationPage,
    metadataSpec,
    blockContentSpec,
} from "../src/utils/sanityFetch";
import {REVALIDATE_IN_SECONDS} from "../src/utils/variables";
import {fetchKommuner, KommunerResponse} from "./api/kommuner";
import {fetchNedetid, NedetidResponse} from "./api/nedetid";

const StyledVeilederPanel = styled.div`
    margin: 5em 0 2em 0;
`;

const query = groq`
{
    "metadata": ${metadataSpec},
    "page": *[_type == "applicationPage"][0]
    {
        "title": coalesce(title[$locale], title.nb),
        "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
        "ingress": coalesce(ingress[$locale], ingress.nb),
        "applyDigitallyPanel": applyDigitallyPanel{
            "title": coalesce(title[$locale], title.nb),
            "iconUrl": icon.asset->url,
            "buttonText": coalesce(buttonText[$locale], buttonText.nb),
            "innsynButtonText": coalesce(innsynButtonText[$locale], innsynButtonText.nb),
            "label": coalesce(label[$locale], label.nb),
            "errorText": coalesce(errorText[$locale], errorText.nb),
            "openPanelLink": coalesce(openPanelLink[$locale], openPanelLink.nb),
            "closePanelLink": coalesce(closePanelLink[$locale], closePanelLink.nb),
            "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
            "soknadOgInnsynTekst": coalesce(soknadOgInnsynTekst[$locale], soknadOgInnsynTekst.nb)[]${blockContentSpec},
            "soknadUtenInnsynTekst": coalesce(soknadUtenInnsynTekst[$locale], soknadUtenInnsynTekst.nb)[]${blockContentSpec},
            "kunPapirTekst": coalesce(kunPapirTekst[$locale], kunPapirTekst.nb)[]${blockContentSpec},
        },
        "applyOfflinePanel": applyOfflinePanel{
            "title": coalesce(title[$locale], title.nb),
            "iconUrl": icon.asset->url,
            "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
        },
        "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
    }
}`;

interface PageProps {
    data: {
        page: SanityApplicationPage;
        metadata: SanityMetadata;
    };
    kommuner: KommunerResponse;
    nedetid: NedetidResponse;
}

const SlikSokerDu = (props: PageProps) => {
    const {data} = props;
    const router = useRouter();

    const breadcrumbPage = {
        title: data.page.title,
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
                        {data.metadata.title} - {data.page.title}
                    </title>
                    <meta
                        property="og:title"
                        content={`${data.metadata.title} - ${data.page.title}`}
                    />
                    {data.page.metaDescription && (
                        <>
                            <meta
                                name="Description"
                                content={data.page.metaDescription}
                            />
                            <meta
                                property="og:description"
                                content={data.page.metaDescription}
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
                        href={`${process.env.NEXT_PUBLIC_APP_URL}/slik-soker-du`}
                    />
                </Head>
                <PageBanner title={data.metadata.title} />
                <Content>
                    <Article>
                        <Heading level="1" size="2xlarge" spacing>
                            {data.page.title}
                        </Heading>
                        <Ingress spacing>{data.page.ingress}</Ingress>

                        <StyledVeilederPanel>
                            <ReimplementedGuidePanel
                                svg={
                                    <img
                                        src={
                                            data.page.applyDigitallyPanel
                                                .iconUrl
                                        }
                                        alt=""
                                    />
                                }
                            >
                                <Heading level="2" size="medium" spacing>
                                    {data.page.applyDigitallyPanel.title}
                                </Heading>
                                <SokDigitalt
                                    nedetid={props.nedetid}
                                    kommuner={props.kommuner}
                                    applyDigitallyPanel={
                                        data.page.applyDigitallyPanel
                                    }
                                />
                            </ReimplementedGuidePanel>
                        </StyledVeilederPanel>

                        <StyledVeilederPanel>
                            <ReimplementedGuidePanel
                                svg={
                                    <img
                                        src={
                                            data.page.applyOfflinePanel.iconUrl
                                        }
                                        alt=""
                                    />
                                }
                            >
                                <Heading level="2" size="medium" spacing>
                                    {data.page.applyOfflinePanel.title}
                                </Heading>
                                <SanityBlockContent
                                    blocks={data.page.applyOfflinePanel.body}
                                />
                            </ReimplementedGuidePanel>
                        </StyledVeilederPanel>
                        <SanityBlockContent blocks={data.page.body} />
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

interface StaticProps {
    props: {
        data: {
            page: SanityApplicationPage;
            metadata: SanityMetadata;
        };
        kommuner: KommunerResponse;
        nedetid: NedetidResponse;
    };
    revalidate: number;
}

export const getStaticProps = async ({locale}): Promise<StaticProps> => {
    try {
        const params = {locale: locale};
        const data = await client.fetch(query, params);
        const kommuner = await fetchKommuner();
        const nedetid = await fetchNedetid();
        return {
            props: {data, kommuner, nedetid},
            revalidate: REVALIDATE_IN_SECONDS,
        };
    } catch (e) {
        console.log("error", e);
        throw e;
    }
};

export default SlikSokerDu;
