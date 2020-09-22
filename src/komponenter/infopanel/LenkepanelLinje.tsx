import Lenke from "nav-frontend-lenker";
import * as React from "react";
import {onClickLink} from "../../utils/navigasjon";

export const LenkeboksLinje = (props: {href: string; children: any}) => {
    let onClickHandler: any = (event: any) => onClickLink(event, props.href);
    if (props.href.match(/^http.:?\/\//) !== null) {
        onClickHandler = undefined;
    }
    return (
        <li className="lenkeboks-linje">
            <Lenke href={props.href} onClick={onClickHandler}>
                {props.children}
            </Lenke>
        </li>
    );
};
