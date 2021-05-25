import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import React from "react";
import {DecoratedApp} from "../components/DecoratedApp";
import Lenke from "nav-frontend-lenker";
import {Content} from "../components/Content";
import {Article} from "../components/article/Article";
import {PageBanner} from "../components/PageBanner";

const Custom500 = () => {
    return (
        <DecoratedApp availableLanguages={[]}>
            <>
                <PageBanner title="Økonomisk sosialhjelp" />
                <Content>
                    <Article>
                        <Innholdstittel>
                            Det har oppstått en feil
                        </Innholdstittel>
                        <Normaltekst>
                            Du kan laste siden på nytt,{" "}
                            <Lenke href="https://www.nav.no/">
                                gå til forsiden
                            </Lenke>
                            , eller prøve igjen senere.
                        </Normaltekst>

                        <Undertittel>In English</Undertittel>
                        <Normaltekst>
                            An error occurred. You can try to refresh the page,
                            go to the{" "}
                            <Lenke href="https://www.nav.no/">front page</Lenke>
                            , or try again later.
                        </Normaltekst>
                    </Article>
                </Content>
            </>
        </DecoratedApp>
    );
};

export default Custom500;
