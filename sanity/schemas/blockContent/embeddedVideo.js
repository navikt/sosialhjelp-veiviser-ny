import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const Preview = ({value}) => (
    <iframe
        title={value.title}
        src={value.url}
        allowFullScreen={true}
        frameBorder="0"
        style={{border: "none"}}
        className="sok_sosialhjelp_video_player"
    ></iframe>
);

export default {
    name: "embeddedVideo",
    title: "Embdedded Video",
    type: "object",
    fields: [
        {name: "title", title: "Tittel", type: "string"},
        {
            name: "url",
            title: "URL",
            type: "url",
        },
    ],
    preview: {
        select: {
            url: "url",
            title: "title",
        },
        component: Preview,
    },
};
