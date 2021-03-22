import {defaultLanguage} from "../utils/lang";

export default {
    name: "housingPanel",
    title: "Hjelp til bolig",
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
            name: "panels",
            title: "Paneler",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Panel",
                    name: "panel",
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
                        },
                        {
                            name: "description",
                            title: "Beskrivelse",
                            type: "localeString",
                        },
                        {
                            name: "href",
                            title: "URL",
                            type: "localeUrl",
                        },
                    ],
                },
            ],
        },
    ],
};
