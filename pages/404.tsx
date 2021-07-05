import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import Lenke from "nav-frontend-lenker";
import Link from "next/link";
import {Content} from "../components/Content";
import {Article} from "../components/article/Article";
import {PageBanner} from "../components/PageBanner";
import {BodyLong, Title} from "@navikt/ds-react";

const Custom404 = () => {
    return (
        <DecoratedApp availableLanguages={[]}>
            <>
                <PageBanner title="Økonomisk sosialhjelp" />
                <Content>
                    <Article>
                        <Title level={1} size="l" spacing>
                            Fant ikke siden
                        </Title>
                        <BodyLong spacing>
                            Beklager, siden kan være slettet eller flyttet,
                            eller det var en feil i lenken som førte deg hit.
                        </BodyLong>
                        <BodyLong spacing>
                            Du kan{" "}
                            <Lenke href="https://www.nav.no/">
                                gå til forsiden
                            </Lenke>
                            , eller lese mer om{" "}
                            <Link href="/">
                                <a className="lenke">økonomisk sosialhjelp</a>
                            </Link>
                            .
                        </BodyLong>

                        <Title level={2} size="m" spacing>
                            In English
                        </Title>
                        <BodyLong spacing>
                            The page you requested cannot be found.
                        </BodyLong>
                        <BodyLong spacing>
                            Go to the{" "}
                            <Lenke href="https://www.nav.no/">front page</Lenke>
                            , or read more about{" "}
                            <Link href="/en">
                                <a className="lenke">financial assistance</a>
                            </Link>
                            .
                        </BodyLong>
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

export default Custom404;
