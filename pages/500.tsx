import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import {Content} from "../components/Content";
import {Article} from "../components/article/Article";
import {PageBanner} from "../components/PageBanner";
import {BodyLong, Title, Link as DSLink} from "@navikt/ds-react";

const Custom500 = () => {
    return (
        <DecoratedApp availableLanguages={[]}>
            <>
                <PageBanner title="Økonomisk sosialhjelp" />
                <Content>
                    <Article>
                        <Title level={1} size="l" spacing>
                            Det har oppstått en feil
                        </Title>
                        <BodyLong spacing>
                            Du kan laste siden på nytt,{" "}
                            <DSLink href="https://www.nav.no/">
                                gå til forsiden
                            </DSLink>
                            , eller prøve igjen senere.
                        </BodyLong>

                        <Title level={2} size="m" spacing>
                            In English
                        </Title>
                        <BodyLong spacing>
                            An error occurred. You can try to refresh the page,
                            go to the{" "}
                            <DSLink href="https://www.nav.no/">
                                front page
                            </DSLink>
                            , or try again later.
                        </BodyLong>
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

export default Custom500;
