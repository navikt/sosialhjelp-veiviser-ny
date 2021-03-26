import * as React from "react";
import * as Sentry from "@sentry/browser";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Artikkel from "./Artikkel";
import {SanityBlockContent} from "../komponenter/SanityBlockContent";
import {
    fetchArticleWithSlugAndLocale,
    SanityArticle,
} from "../utils/sanityFetch";
import {Lastestriper} from "../komponenter/Lastestriper";
import Lenke from "nav-frontend-lenker";
import {Link} from "react-router-dom";

const SanityArtikkel = (props: {slug: string; locale: "nb" | "nn" | "en"}) => {
    const [article, setArticle] = React.useState<SanityArticle>();
    const [hasErros, setHasErrors] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);

    React.useEffect(() => {
        fetchArticleWithSlugAndLocale(props.slug, props.locale)
            .then((article) => {
                if (Object.keys(article).length === 0) {
                    setNotFound(true);
                }
                console.log("article", article);
                setArticle(article);
            })
            .catch((e) => {
                setHasErrors(true);
                Sentry.captureException(e);
            });
    }, [props.slug, props.locale, setArticle]);

    if (hasErros) {
        return (
            <Artikkel tittel="Det har oppstått en feil">
                <Innholdstittel>Det har oppstått en feil</Innholdstittel>
                <Normaltekst>
                    Du kan laste siden på nytt,{" "}
                    <Lenke href="https://www.nav.no/">gå til forsiden</Lenke>,
                    eller prøve igjen senere .
                </Normaltekst>

                <Undertittel>In English</Undertittel>
                <Normaltekst>
                    An error occured. You can try to refresh the page, Go to the{" "}
                    <Lenke href="https://www.nav.no/">front page</Lenke>, or try
                    again later.
                </Normaltekst>
            </Artikkel>
        );
    }

    if (notFound) {
        return (
            <Artikkel tittel="Fant ikke siden">
                <Innholdstittel>Fant ikke siden</Innholdstittel>
                <Normaltekst>
                    Beklager, siden kan være slettet eller flyttet, eller det
                    var en feil i lenken som førte deg hit.
                </Normaltekst>
                <Normaltekst>
                    Du kan{" "}
                    <Lenke href="https://www.nav.no/">gå til forsiden</Lenke>,
                    eller lese mer om{" "}
                    <Link to="/" className="lenke">
                        økonomisk sosialhjelp
                    </Link>
                    .
                </Normaltekst>

                <Undertittel>In English</Undertittel>
                <Normaltekst>
                    The page you requested cannot be found.
                </Normaltekst>
                <Normaltekst>
                    Go to the{" "}
                    <Lenke href="https://www.nav.no/">front page</Lenke>, or
                    read more about{" "}
                    <Link to="/?lang=en" className="lenke">
                        financial assistance
                    </Link>
                    .
                </Normaltekst>
            </Artikkel>
        );
    }

    if (!article) {
        return (
            <Artikkel tittel=" ">
                <Lastestriper />
            </Artikkel>
        );
    }

    return (
        <Artikkel tittel={article.title}>
            <Innholdstittel>{article.title}</Innholdstittel>
            <SanityBlockContent blocks={article.body} />
        </Artikkel>
    );
};

export default SanityArtikkel;
