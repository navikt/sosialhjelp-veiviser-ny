import Link from "next/link";
import AlertStripe, {AlertStripeType} from "nav-frontend-alertstriper";
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
                <DsLink href="#">{props.title}</DsLink>
            </Link>
        </DsAlert>
    );
};
