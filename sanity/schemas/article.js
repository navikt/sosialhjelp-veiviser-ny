export default {
    name: "article",
    title: "Artikkel",
    type: "document",
    fields: [
        {
            name: "language",
            title: "Språk",
            type: "string",
            options: {
                list: [
                    {title: "Bokmål", value: "nb"},
                    {title: "Nynorsk", value: "nn"},
                    {title: "Engelsk", value: "en"},
                ],
            },
        },
        {
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Beskrivelse",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "metaDescription",
            title: "Metabeskrivelse",
            type: "string",
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
            title: "Body",
            type: "blockContent",
            validation: (Rule) => Rule.required(),
        },
    ],
};
