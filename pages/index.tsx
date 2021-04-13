import Head from "next/head";
import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import {
    fetchFrontPageWithLocale,
    SanityFrontpage,
} from "../src/utils/sanityFetch";

import {PageBanner} from "../components/PageBanner";
import {Alert} from "../components/frontPage/Alert";
import {SokOmSosialhjelpPanel} from "../components/frontPage/SokSosialhjelpPanel";
import {LenkeboksContainer} from "../components/frontPage/LenkeboksContainer";
import {Lenkeboks} from "../components/frontPage/Lenkeboks";
import {useRouter} from "next/router";
import {Language} from "@navikt/nav-dekoratoren-moduler";
import {Content} from "../components/Content";

interface PageProps {
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

    return (
        <DecoratedApp availableLanguages={languages}>
            <>
                <Head>
                    <title>{props.frontPage.title}</title>
                    <meta property="og:title" content={props.frontPage.title} />
                    <meta
                        name="Description"
                        content={props.frontPage.metaDescription}
                    />
                    <meta
                        property="og:description"
                        content={props.frontPage.metaDescription}
                    />
                    <meta property="og:locale" content={router.locale} />
                    {/*<meta
                        property="og:image"
                        content={props.frontPage.bannerIconUrl}
                    /> TODO: Legge til delebilde i Sanity */}
                </Head>
                <PageBanner
                    isFrontPage
                    title={props.frontPage.title}
                    iconUrl={props.frontPage.bannerIconUrl}
                />
                <Content>
                    {props.frontPage.alert && (
                        <Alert {...props.frontPage.alert} />
                    )}
                    {props.frontPage.soknadPanel && (
                        <SokOmSosialhjelpPanel
                            {...props.frontPage.soknadPanel}
                        />
                    )}
                    <LenkeboksContainer>
                        {props.frontPage.linkBoxes.map((linkBox) => {
                            return (
                                <Lenkeboks key={linkBox.title} {...linkBox} />
                            );
                        })}
                    </LenkeboksContainer>
                </Content>
            </>
        </DecoratedApp>
    );
};

interface StaticProps {
    props: {
        frontPage: SanityFrontpage;
    };
    revalidate: number;
}
export const getStaticProps = async ({locale = "nb"}): Promise<StaticProps> => {
    const frontPage = await fetchFrontPageWithLocale(locale);
    return {
        props: {frontPage},
        revalidate: 60,
    };
};

export default Index;
