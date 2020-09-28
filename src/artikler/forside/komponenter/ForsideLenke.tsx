import * as React from "react";
import {Normaltekst} from "nav-frontend-typografi";

import {InternLenke} from "../../../komponenter/InternLenke";

export const ForsideLenke = (props: {
    href: string;
    description?: string;
    children: any;
}) => (
    <li>
        <InternLenke href={props.href}>{props.children}</InternLenke>
        <Normaltekst>{props.description}</Normaltekst>
    </li>
);
