import {defaultLanguage} from "../utils/lang";

export default {
    name: "applyDigitallyPanel",
    title: "Søk digitalt panel",
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
        {
            name: "buttonText",
            title: "Søk digitalt knapp",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "label",
            title: "Label",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "errorText",
            title: "Kommunesøk feilmelding",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "openPanelLink",
            title: "Åpne kommunesøk lenke",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "closePanelLink",
            title: "Lukk kommunesøk lenke",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "soknadOgInnsynTekst",
            title: "Søknad og innsyn tekst",
            type: "localeBlockContent",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "soknadUtenInnsynTekst",
            title: "Søknad uten innsyn tekst",
            type: "localeBlockContent",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "kunPapirTekst",
            title: "Kun papir tekst",
            type: "localeBlockContent",
            validation: (Rule) => Rule.required(),
        },
    ],
};
