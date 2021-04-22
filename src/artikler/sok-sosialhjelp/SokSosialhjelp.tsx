import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SokSosialhjelpNynorsk from "./SokSosialhjelpNynorsk";
import SokSosialhjelpBokmal from "./SokSosialhjelpBokmal";
import SokSosialhjelpEngelsk from "./SokSosialhjelpEngelsk";
import "./sokSosialhjelp.less";
import {Knapp} from "nav-frontend-knapper";
import styled from "styled-components";

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

export const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;

    flex-direction: column;

    margin-top: 1.5rem;
    margin-bottom: 2rem;

    justify-content: space-evenly;

    @media all and (min-width: 804px) {
        flex-direction: row;
    }
`;

export const StyledKnapp = styled(Knapp)`
    transform: translateY(-2px);

    margin-top: 1rem;

    @media all and (min-width: 804px) {
        margin-top: 0rem;
    }
`;

export default SokSosialhjelp;
