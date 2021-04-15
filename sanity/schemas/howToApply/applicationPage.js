import {defaultLanguage} from "../utils/lang";

export default {
    name: "applicationPage",
    title: "Slik søker du",
    type: "document",
    preview: {
        select: {
            title: `title.${defaultLanguage.id}`,
        },
    },
    initialValue: {
        slug: "slik-soker-du",
    },
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            readOnly: true,
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
            name: "metaDescription",
            title: "Metabeskrivelse",
            type: "localeString",
            description:
                "Dette er teksten som vil vises for søkeresultater på eks. Google",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "ingress",
            title: "Ingress",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "applyDigitallyPanel",
            title: "Søk digitalt panel",
            type: "applyDigitallyPanel",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "applyOfflinePanel",
            title: "Søk på papir panel",
            type: "applyOfflinePanel",
            validation: (Rule) => Rule.required(),
        },
    ],
};
