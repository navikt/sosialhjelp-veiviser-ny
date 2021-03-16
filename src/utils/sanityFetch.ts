import {AlertStripeType} from "nav-frontend-alertstriper";
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

const frontPageSpec = `
{
    "title": coalesce(title[$locale], title.nb),
    "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
    "bannerIconUrl": bannerIcon.asset->url,
    "alert": alert->{
      "title": coalesce(title[$locale], title.nb),
      "slug": article->slug.current,
      type,
    },
  	"soknadPanel": soknadPanel->{
      "title": coalesce(title[$locale], title.nb),
      "slug": article->slug.current,
      "iconUrl": icon.asset->url,
    },
    "linkBoxes": linkBoxes[]->{
        "title": coalesce(title[$locale], title.nb),
        "articles": articles[]{
           "title": coalesce(title[$locale], title.nb),
           "description": coalesce(description[$locale], description.nb),
            "slug": article->slug.current,
        },
    }
}
`;

export interface SanityArticle {
    body: any;
    title: string;
}

export interface SanityFrontpage {
    title: string;
    metaDescription: string;
    bannerIconUrl: string;
    alert?: {
        title: string;
        slug: string;
        type: AlertStripeType;
    };
    soknadPanel: {
        title: string;
        slug: string;
        iconUrl: string;
    };
    linkBoxes: [
        {
            title: string;
            articles: [
                {
                    title: string;
                    description: string;
                    slug: string;
                }
            ];
        }
    ];
}

export interface SanityAlert {
    type: "info" | "suksess" | "advarsel" | "feil";
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

export const fetchFrontPageWithLocale = async (
    locale = "nb"
): Promise<SanityFrontpage> => {
    const query = `*[_type == "frontPage"][0]${frontPageSpec}`;
    const params = {locale: locale};
    return client.fetch(query, params);
};
