import client from "./sanityClient";

const articleSpec = `
{
    "id": _id,
    "title": coalesce(title[$locale], title.nb),
    "slug": slug.current,
    "description": coalesce(description[$locale], description.nb),
    "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
    "body": coalesce(body[$locale], body.nb)[]{
        ...,
        markDefs[]{
            ...,
            _type == 'internalLink' => {
                "slug": @.reference->slug,
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
    const query = `*[_type == "article" && slug.current == $slug][0]
    ${articleSpec}`;
    const params = {slug: slug, locale: locale};
    return client.fetch(query, params);
};
