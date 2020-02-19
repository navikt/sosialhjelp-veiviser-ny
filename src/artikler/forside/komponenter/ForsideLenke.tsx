import * as React from "react";

import Lenke from "nav-frontend-lenker";

export const ForsideLenke = (props: {href: string; children: any}) => (
    <li>
        <Lenke href={props.href}>{props.children}</Lenke>
    </li>
);
