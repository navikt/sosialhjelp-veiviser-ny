import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";

const SoknadPaPapirEnglish: React.FC = () => {
    return (
        <Artikkel tittel="Where to find application form on paper">
            <Innholdstittel>
                Where to find application form on paper
            </Innholdstittel>
            <Normaltekst>
                Unfortunately, there is no common application form when you
                apply on paper. Each municipality has its own application form
                that you should use if you cannot apply digitally.
            </Normaltekst>

            <Undertittel>Download application form online</Undertittel>

            <Normaltekst>
                You can not find the paper form on NAV.no, but many
                municipalities have their form available on their website. You
                can find the municipality's website at:
            </Normaltekst>
            <br />
            <Normaltekst>
                www.[your municipality].kommune.no
                <br />
                for example. www.oslo.kommune.no
            </Normaltekst>

            <Undertittel>Get a paper form at your NAV office</Undertittel>

            <Normaltekst>
                If you cannot find an application form on your municipality's
                website, you can obtain a paper form at your NAV office.
            </Normaltekst>
            <br />
            <Normaltekst>
                You can find the address and telephone number of your nearest
                office under find{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    your NAV office
                </Lenke>
                .
            </Normaltekst>

            <Undertittel>When to submit the application</Undertittel>
            <Normaltekst>
                You can submit the application to{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    your NAV office
                </Lenke>{" "}
                or send it by mail.
            </Normaltekst>

            <Undertittel>If you need help</Undertittel>
            <Normaltekst>
                Contact{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    your NAV office
                </Lenke>{" "}
                if you need help finding an application form or filling out the
                application.
            </Normaltekst>
        </Artikkel>
    );
};

export default SoknadPaPapirEnglish;
