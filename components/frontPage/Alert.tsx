import Link from "next/link";
import AlertStripe, {AlertStripeType} from "nav-frontend-alertstriper";
import React from "react";

export const Alert = (props: {
    title: string;
    slug: string;
    type: AlertStripeType;
}) => {
    return (
        <AlertStripe type={props.type}>
            <Link href={`/${props.slug}`}>
                <a className="lenke">{props.title}</a>
            </Link>
        </AlertStripe>
    );
};
