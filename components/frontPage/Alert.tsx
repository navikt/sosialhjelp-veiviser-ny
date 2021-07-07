import Link from "next/link";
import {Alert as DsAlert, Link as DsLink} from "@navikt/ds-react";
import React from "react";

export const Alert = (props: {
    title: string;
    slug: string;
    variant: "error" | "warning" | "info" | "success";
}) => {
    return (
        <DsAlert variant={props.variant}>
            <Link href={`/${props.slug}`} passHref>
                <DsLink href={`/sosialhjelp/${props.slug}`}>
                    {props.title}
                </DsLink>
            </Link>
        </DsAlert>
    );
};
