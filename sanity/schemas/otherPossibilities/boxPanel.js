export default {
    name: "boxPanel",
    title: "Lenkeboks",
    type: "object",
    fields: [
        {
            type: "array",
            name: "innhold",
            of: [{type: "boxContent"}],
            validation: (Rule) => Rule.required(),
        },
    ],
};
