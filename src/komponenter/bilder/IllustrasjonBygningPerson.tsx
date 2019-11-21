import React from "react";

const IllustrasjonBygningPerson: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="63"
            viewBox="0 0 56 63"
            className={className}
        >
            <g fill="none" fillRule="evenodd" strokeLinejoin="round" strokeWidth="2">
                <path
                    stroke="#3E3832"
                    strokeLinecap="round"
                    d="M8.043 29.174v23.478H22.13V36.217h11.74v16.435h14.087V30.348M1 28L28 1l27 27M37.391 3.348h8.218v8.217"
                />
                <g stroke="#000">
                    <path d="M28 27.04a4.8 4.8 0 004.802-4.803A4.803 4.803 0 1028 27.04z"/>
                    <path
                        fill="#FFF"
                        d="M28 61.617h4.802l1.979-15.368h3.784V31.842l-6.723-1.921L28 37.605l-3.842-7.684-6.723 1.92V46.25h3.782l1.98 15.368z"
                    />
                </g>
            </g>
        </svg>
    );
}

export default IllustrasjonBygningPerson;
