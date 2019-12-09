import React from "react";

const Veiskilt = (props: {className?: string}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="128"
        viewBox="0 0 96 128"
        className={props.className}
    >
        <g fill="none" fillRule="evenodd">
            <path
                fill="#3E3821"
                d="M45 0h2a1 1 0 0 1 1 1v120h-4V1a1 1 0 0 1 1-1z"
            />
            <path fill="#3A351F" d="M47 0h1a1 1 0 0 1 1 1v120h-2V0z" />
            <path fill="#3E3821" d="M46 128v-8a8 8 0 0 0-8 8h8z" />
            <path fill="#3A351F" d="M46 128v-8a8 8 0 0 1 8 8h-8z" />
            <path fill="#B7B1A9" d="M13 8v25h71l11-12L82 8z" />
            <path fill="#D4D0CB" d="M82 41v25H11L0 53l13-12z" />
        </g>
    </svg>
);

export default Veiskilt;
