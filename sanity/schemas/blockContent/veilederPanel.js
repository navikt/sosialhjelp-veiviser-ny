import React from "react";

const Preview = ({value}) => (
    <>
        <div>
            <strong>{value.title}</strong>
        </div>
        {value.body}
    </>
);

export default {
    name: "veilederPanel",
    title: "Veileder Panel",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
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
        },
    ],
    preview: {
        select: {
            title: "title",
            body: "body",
        },
        component: Preview,
    },
};
