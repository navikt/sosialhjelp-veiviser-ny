import * as React from "react";
import * as Sentry from "@sentry/browser";
import {Innholdstittel} from "nav-frontend-typografi";
import Artikkel from "./Artikkel";
import {SanityBlockContent} from "../komponenter/SanityBlockContent";
import {
    fetchArticleWithSlugAndLocale,
    SanityArticle,
} from "../utils/sanityFetch";
import {Lastestriper} from "../komponenter/Lastestriper";

const SanityArtikkel = (props: {slug: string; locale: "nb" | "nn" | "en"}) => {
    const [article, setArticle] = React.useState<SanityArticle>();
    const [hasErros, setHasErrors] = React.useState(false);
    React.useEffect(() => {
        fetchArticleWithSlugAndLocale(props.slug, props.locale)
            .then((article) => {
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
                Du kan laste siden på nytt, eller prøve igjen senere.
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
