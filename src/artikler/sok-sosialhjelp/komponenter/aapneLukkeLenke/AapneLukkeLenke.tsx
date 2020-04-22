import * as React from "react";
import {NedChevron, OppChevron} from "nav-frontend-chevron";

interface AapneLukkeLenkeProps {
    aapneTekst: string;
    lukkeTekst: string;
    aapen: boolean;
    onClick: () => void;
}

const AapneLukkeLenke: React.FC<AapneLukkeLenkeProps> = ({
    aapneTekst,
    lukkeTekst,
    aapen,
    onClick,
}) => {
    return (
        <a
            href={".?aapne=" + (aapen ? "true" : "false")}
            className="lenke"
            onClick={(event) => {
                onClick();
                event.preventDefault();
            }}
        >
            {!aapen && (
                <>
                    {aapneTekst} <NedChevron />
                </>
            )}
            {aapen && (
                <>
                    {lukkeTekst} <OppChevron />
                </>
            )}
        </a>
    );
};

export default AapneLukkeLenke;
