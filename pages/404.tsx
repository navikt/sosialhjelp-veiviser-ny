import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import Panel from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";
import Link from "next/link";
import {Content} from "../components/Content";
import {Article} from "../components/article/Article";
import {PageBanner} from "../components/PageBanner";

const Custom404 = () => {
    return (
        <DecoratedApp availableLanguages={[]}>
            <>
                <PageBanner title="Økonomisk sosialhjelp" />
                <Content>
                    <Article>
                        <Innholdstittel>Fant ikke siden</Innholdstittel>
                        <Normaltekst>
                            Beklager, siden kan være slettet eller flyttet,
                            eller det var en feil i lenken som førte deg hit.
                        </Normaltekst>
                        <Normaltekst>
                            Du kan{" "}
                            <Lenke href="https://www.nav.no/">
                                gå til forsiden
                            </Lenke>
                            , eller lese mer om{" "}
                            <Link href="/">
                                <a className="lenke">økonomisk sosialhjelp</a>
                            </Link>
                            .
                        </Normaltekst>

                        <Undertittel>In English</Undertittel>
                        <Normaltekst>
                            The page you requested cannot be found.
                        </Normaltekst>
                        <Normaltekst>
                            Go to the{" "}
                            <Lenke href="https://www.nav.no/">front page</Lenke>
                            , or read more about{" "}
                            <Link href="/en">
                                <a className="lenke">financial assistance</a>
                            </Link>
                            .
                        </Normaltekst>
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

export default Custom404;
