import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SokSosialhjelpNynorsk from "./SokSosialhjelpNynorsk";
import SokSosialhjelpBokmal from "./SokSosialhjelpBokmal";
import SokSosialhjelpEngelsk from "./SokSosialhjelpEngelsk";
import "./sokSosialhjelp.less";
import {Knapp} from "nav-frontend-knapper";
import styled from "styled-components";
import {REST_STATUS} from "../../utils/restUtils";
import {ServiceHookTypes} from "./komponenter/kommunesok/service/ServiceHookTypes";
import {Nedetid} from "./komponenter/kommunesok/service/useNedetidService";

export const ANTALL_KOMMUNER = 356;

const SokSosialhjelp: React.FC = () => {
    const valgtSprak: string = detekterSprak();

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <SokSosialhjelpBokmal />}
            {valgtSprak === Sprak.NYNORSK && <SokSosialhjelpNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <SokSosialhjelpEngelsk />}
        </Oversettelser>
    );
};

export const getDisabledClassname = (
    nedetidService: ServiceHookTypes<Nedetid>
) => {
    return nedetidService.restStatus === REST_STATUS.OK &&
        nedetidService.payload.isNedetid
        ? "knapp--disabled"
        : "";
};

export const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;

    flex-direction: column;

    margin-top: 1.5rem;
    margin-bottom: 2rem;

    a {
        white-space: break-spaces;
    }
`;

export const StyledKnapp = styled.a`
    transform: translateY(-2px);

    margin-top: 1rem;
`;

export default SokSosialhjelp;
