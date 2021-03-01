import * as React from "react";
import {Innholdstittel} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {SanityBlockContent} from "../../komponenter/SanityBlockContent";
import {
    fetchArticleWithSlugAndLocale,
    SanityArticle,
} from "../../utils/sanityFetch";

const SanityTestBokmal: React.FC = () => {
    const [article, setArticle] = React.useState<SanityArticle>();
    React.useEffect(() => {
        fetchArticleWithSlugAndLocale("lorem-ipsum-dolor-sit-amet", "nb").then(
            (article) => {
                setArticle(article);
            }
        );
    }, [setArticle]);

    console.log("article", article);
    return (
        <Artikkel tittel={article?.title ?? ""}>
            <Innholdstittel>{article?.title}</Innholdstittel>
            {article && <SanityBlockContent blocks={article.body} />}
        </Artikkel>
    );
};

export default SanityTestBokmal;
