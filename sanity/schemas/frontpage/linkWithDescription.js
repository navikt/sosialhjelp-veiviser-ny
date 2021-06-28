import {defaultLanguage} from "../utils/lang";

export default {
    name: "linkWithDescription",
    title: "Lenke med beskrivelse",
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
            name: "description",
            title: "Beskrivelse",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "article",
            title: "Artikkel",
            type: "reference",
            to: [
                {
                    type: "article",
                },
                {
                    type: "otherPossibilities",
                },
                {type: "applicationPage"},
            ],
        },
        {
            name: "externalLink",
            title: "Ekstern lenke",
            type: "url",
        },
    ],
};
