import React from "react";

const IllustrasjonInfoSirkel: React.FC<{className?: string}> = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            className={className}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    d="M45.528 23.264c0 12.296-9.97 22.264-22.264 22.264C10.966 45.528 1 35.56 1 23.264S10.966 1 23.264 1c12.294 0 22.264 9.968 22.264 22.264zM17.192 37.432h12.144"
                />
                <path strokeLinecap="round" d="M19.216 19.216h4.048V36.42"/>
                <path d="M22.252 10.108a1.012 1.012 0 100 2.025 1.012 1.012 0 000-2.025z"/>
            </g>
        </svg>
    );
}

export default IllustrasjonInfoSirkel;
