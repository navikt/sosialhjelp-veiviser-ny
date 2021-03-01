import client from "./sanityClient";

const articleSpec = `
{
    "id": _id,
    title,
    "slug": slug.current,
    description,
    metaDescription,
    language,
    body[]{
        ...,
        markDefs[]{
            ...,
            _type == 'internalLink' => {
                "slug": @.reference->slug,
                "type": @.reference->_type,
            },
        },
    },
    "iconUrl": icon.asset->url,
}`;

export interface SanityArticle {
    body: any;
    title: string;
}

export const fetchArticleWithSlugAndLocale = async (
    slug = "",
    locale = "nb"
): Promise<SanityArticle> => {
    const query = `*[_type == "article" && slug.current == $slug && language == $locale][0]
    ${articleSpec}`;
    const params = {slug: slug, locale: locale};
    return client.fetch(query, params);
};
