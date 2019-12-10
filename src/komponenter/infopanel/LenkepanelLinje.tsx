import * as React from "react";
import {onClickLink} from "../../utils/navigasjon";

export const LenkeboksLinje = (props: {href: string; children: any}) => (
    <li className="lenkeboks-linje">
        <a href={props.href} onClick={(event: any) => onClickLink(event, props.href)}>{props.children}</a>
    </li>
);
