import {Cell, ContentContainer, Grid} from "@navikt/ds-react";
import React from "react";

export const Content = (props: {children}) => {
    return (
        <ContentContainer>
            <Grid>
                <Cell xs={12} lg={2}></Cell>
                <Cell xs={12} lg={8}>
                    {props.children}
                </Cell>
                <Cell xs={12} lg={2}></Cell>
            </Grid>
        </ContentContainer>
    );
};
