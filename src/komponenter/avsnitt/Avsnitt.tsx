import {Normaltekst} from "nav-frontend-typografi";
import React from "react";

export const Avsnitt = (props: {children: any}) => (
    <Normaltekst className="avsnitt">{props.children}</Normaltekst>
);
