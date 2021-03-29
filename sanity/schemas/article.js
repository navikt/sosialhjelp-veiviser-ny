import {defaultLanguage} from "./utils/lang";

export default {
    name: "article",
    title: "Artikkel",
    type: "document",
    preview: {
        select: {
            title: `title.${defaultLanguage.id}`,
        },
    },
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "languages",
            title: "Tilgjengelige språk",
            type: "array",
            of: [{type: "string"}],
            options: {
                list: [
                    {title: "Bokmål", value: "nb"},
                    {title: "Nynorsk", value: "nn"},
                    {title: "Engelsk", value: "en"},
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: `title.${defaultLanguage.id}`,
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "metaDescription",
            title: "Metabeskrivelse",
            type: "localeString",
            description:
                "Dette er teksten som vil vises for søkeresultater på eks. Google",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "icon",
            title: "Ikon",
            type: "image",
        },
        {
            name: "body",
            title: "Innhold",
            type: "localeBlockContent",
            validation: (Rule) => Rule.required(),
        },
    ],
};
