import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import {
    fetchFrontPageWithLocale,
    SanityFrontpage,
} from "../src/utils/sanityFetch";

import {PageBanner} from "../components/PageBanner";
import styled from "styled-components/macro";
import {Alert} from "../components/frontPage/Alert";
import {SokOmSosialhjelpPanel} from "../components/frontPage/SokSosialhjelpPanel";
import {LenkeboksContainer} from "../components/frontPage/LenkeboksContainer";
import {Lenkeboks} from "../components/frontPage/Lenkeboks";

interface PageProps {
    frontPage: SanityFrontpage;
}

const Content = styled.div`
    max-width: 49.5rem;
    margin-left: auto;
    margin-right: auto;

    @media all and (max-width: 803px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    @media all and (min-width: 804px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const Index = (props: PageProps) => {
    return (
        <DecoratedApp breadcrumbs={[]} availableLanguages={[]}>
            <>
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
export const getStaticProps = async (): Promise<StaticProps> => {
    const frontPage = await fetchFrontPageWithLocale("nb");
    return {
        props: {frontPage},
        revalidate: 60,
    };
};

export default Index;
