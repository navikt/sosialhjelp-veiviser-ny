import * as React from "react";
import {Link} from "react-router-dom";

export const InternLenke = (props: {href: string; children: any}) => (
    <Link to={props.href} className="lenke">
        {props.children}
    </Link>
);
