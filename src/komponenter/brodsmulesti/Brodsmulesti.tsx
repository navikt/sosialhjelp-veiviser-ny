import * as React from "react";
import "./brodsmulesti.less";
import {onClickLink} from "../../utils/navigasjon";

const Brodsmulesti: React.FC<{tittel: string}> = ({tittel}) => {
    return (
        <div className="brodsmulesti">
            <a href=".."
               onClick={(event: any) => onClickLink(event, "/")}
            >
                Økonomisk sosialhjelp
            </a> / {tittel}
        </div>
    )
};

export default Brodsmulesti;
