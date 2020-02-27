import * as React from "react";

import Lenke from "nav-frontend-lenker";
import {Undertekst, Normaltekst} from "nav-frontend-typografi";

export const ForsideLenke = (props: {
    href: string;
    description?: string;
    children: any;
}) => (
    <li>
        <Lenke href={props.href}>{props.children}</Lenke>
        <Normaltekst>{props.description}</Normaltekst>
    </li>
);
