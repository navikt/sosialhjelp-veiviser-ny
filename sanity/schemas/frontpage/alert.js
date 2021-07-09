import {defaultLanguage} from "../utils/lang";

export default {
    name: "alert",
    title: "Varsel",
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
            name: "variant",
            title: "Variant",
            type: "string",
            options: {
                list: ["success", "warning", "error", "info"],
            },
        },
        {
            name: "article",
            title: "Artikkel",
            type: "reference",
            to: [
                {
                    type: "article",
                },
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
};
