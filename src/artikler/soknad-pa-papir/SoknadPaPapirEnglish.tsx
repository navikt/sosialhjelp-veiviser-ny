import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const SoknadPaPapirEnglish: React.FC = () => {
    return (
        <Artikkel tittel="Where to find application form on paper">
            <Innholdstittel>
                Where to find application form on paper
            </Innholdstittel>
            <Avsnitt>
                Unfortunately, there is no common application form when you
                apply on paper. Each municipality has its own application form
                that you should use if you cannot apply digitally.
            </Avsnitt>

            <Undertittel>Download application form online</Undertittel>

            <Avsnitt>
                You can not find the paper form on NAV.no, but many
                municipalities have their form available on their website. You
                can find the municipality's website at:
            </Avsnitt>
            <Avsnitt>
                www.[your municipality].kommune.no
                <br />
                for example. www.oslo.kommune.no
            </Avsnitt>

            <Undertittel>Get a paper form at your NAV office</Undertittel>

            <Avsnitt>
                If you cannot find an application form on your municipality's
                website, you can obtain a paper form at your NAV office.
            </Avsnitt>
            <Avsnitt>
                You can find the address and telephone number of your nearest
                office under find{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/kontakt-oss/en/finnkontor"
                    }
                >
                    your NAV office
                </Lenke>
                .
            </Avsnitt>

            <Undertittel>When to submit the application</Undertittel>
            <Avsnitt>
                You can submit the application to{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/kontakt-oss/en/finnkontor"
                    }
                >
                    your NAV office
                </Lenke>{" "}
                or send it by mail.
            </Avsnitt>

            <Undertittel>If you need help</Undertittel>
            <Avsnitt>
                Contact{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/kontakt-oss/en/finnkontor"
                    }
                >
                    your NAV office
                </Lenke>{" "}
                if you need help finding an application form or filling out the
                application.
            </Avsnitt>
        </Artikkel>
    );
};

export default SoknadPaPapirEnglish;
