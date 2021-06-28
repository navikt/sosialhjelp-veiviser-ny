import {BodyShort, Button, Panel, Title} from "@navikt/ds-react";

export const ApplyDigitallyPanel = () => {
    return (
        <Panel>
            <Title level={2} size="m" spacing>
                Søk om økonomisk sosialhjelp
            </Title>
            <BodyShort spacing>
                Du kan søke om flere ting under økonomisk sosialhjelp, men det
                er kun ett søknadsskjema og du beskriver selv hva du vil søke
                om. Har du sendt en søknad og ønsker å ettersende dokumentasjon,
                kan du gjøre dette under Dine søknader
            </BodyShort>
            <Button variant="action">Ny søknad</Button>
            <Button variant="secondary">Dine søknader</Button>
        </Panel>
    );
};
