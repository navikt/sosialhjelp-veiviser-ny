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
            name: "icon",
            title: "Ikon",
            type: "image",
        },
        {
            name: "article",
            title: "Artikkel",
            type: "reference",
            validation: (Rule) =>
                Rule.custom((field, context) =>
                    context.parent.externalLink === undefined &&
                    field === undefined
                        ? "Må enten lenke til en artikkel eller ekstern side"
                        : true
                ),
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
            validation: (Rule) =>
                Rule.custom((field, context) =>
                    context.parent.article === undefined && field === undefined
                        ? "Må enten lenke til en artikkel eller ekstern side"
                        : true
                ),
        },
    ],
};
