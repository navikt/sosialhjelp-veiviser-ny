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
                "Søkemotorer kan bruke denne teksten i søkeresultater. Kan i de fleste tilfeller være tom, da Google etc helst genererer egne tekster basert på innholdet på siden",
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
        {
            name: "body",
            title: "Innhold",
            type: "localeBlockContent",
            validation: (Rule) => Rule.required(),
        },
    ],
};
