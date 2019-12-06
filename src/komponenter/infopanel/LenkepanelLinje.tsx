import * as React from "react";

export const LenkeboksLinje = (props: {href: string; children: any}) => (
    <li className="lenkeboks-linje">
        <a href={props.href}>{props.children}</a>
    </li>
);
