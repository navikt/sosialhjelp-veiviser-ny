import {defaultLanguage} from "../utils/lang";

export default {
    name: "boxContent",
    title: "Lenkeboks innhold",
    type: "object",
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
            name: "boxElements",
            title: "Elementer",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Element",
                    name: "boxElement",
                    preview: {
                        select: {
                            title: `text.${defaultLanguage.id}`,
                        },
                    },
                    fields: [
                        {
                            type: "localeString",
                            title: "Tekst",
                            name: "text",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            type: "localeUrl",
                            title: "Ekstern lenke",
                            name: "externalHref",
                        },
                        {
                            type: "reference",
                            title: "Intern lenke",
                            name: "internalHref",
                            to: {type: "article"},
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
};
