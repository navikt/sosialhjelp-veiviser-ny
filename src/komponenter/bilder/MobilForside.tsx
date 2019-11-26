import React from "react";

function MobilForside() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="80"
            height="80"
            viewBox="0 0 80 80"
        >
            <defs>
                <circle id="a" cx="40" cy="40" r="40"></circle>
            </defs>
            <g fill="none" fillRule="evenodd">
                <circle
                    cx="40"
                    cy="40"
                    r="40"
                    fill="#9BD0B0"
                    fillRule="nonzero"
                ></circle>
                <mask id="b" fill="#fff">
                    <use xlinkHref="#a"></use>
                </mask>
                <g fillRule="nonzero" mask="url(#b)">
                    <path
                        fill="#59514B"
                        d="M51.814 65H29.186C27.426 65 26 63.59 26 61.85v-43.7c0-1.74 1.425-3.15 3.186-3.15h22.628C53.574 15 55 16.41 55 18.15v43.7c0 1.74-1.425 3.15-3.186 3.15z"
                    ></path>
                    <g transform="translate(28 17)">
                        <rect width="25" height="40" fill="#FFF" rx="1"></rect>
                        <path fill="#6AB889" d="M1 1h23v13H1z"></path>
                        <path
                            fill="#B7B1A9"
                            d="M2 18h21v2H2zm0 5h21v2H2zm0 5h21v2H2z"
                        ></path>
                    </g>
                    <path fill="#627282" d="M43 61a2 2 0 11-4 0 2 2 0 014 0"></path>
                    <path
                        fill="#E7E6E2"
                        d="M55 40v10.977s-.111.671-.26 1.64l-3.112-4.374a2.924 2.924 0 00-4.125-.673l-.28.204c-1.322.972-1.619 2.85-.662 4.193l8.472 11.908c.152.413.312.815.474 1.2.776 1.844 3.912 5.531 4.135 6.71A95.23 95.23 0 0060.089 74L74 69.129l-4.578-15.63a1.67 1.67 0 00-.37-.658c-1.608-1.757-10.574-11.042-12.093-12.615a.74.74 0 00-.537-.226H55z"
                    ></path>
                    <path fill="#BDD1D0" d="M76.728 69L59 75.394 63.707 89H84z"></path>
                    <path
                        fill="#6E9DAA"
                        d="M76.976 68L58 74.47 60.024 80 79 73.53z"
                    ></path>
                    <path
                        fill="#37363A"
                        d="M75.943 71.667a1 1 0 10-1.885.666 1 1 0 001.885-.666"
                    ></path>
                </g>
            </g>
        </svg>
    );
}

export default MobilForside;
