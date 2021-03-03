import * as React from "react";
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
    React.useEffect(() => {
        fetchArticleWithSlugAndLocale(props.slug, props.locale).then(
            (article) => {
                setArticle(article);
            }
        );
    }, [props.slug, props.locale, setArticle]);

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
