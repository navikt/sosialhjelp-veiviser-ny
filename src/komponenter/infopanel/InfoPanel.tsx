import React from "react";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import "./infoPanel.less";
import {onClickLink} from "../../utils/navigasjon";

const InfoPanelContainer: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
    return (
        <div className={"infopanel_container " + className}>
            {children}
        </div>
    );
};

type Props = {
    children: React.ReactNode;
    href: string;
    onClick?: (event: any) => void;
    className?: string;
};

const InfoPanel: React.FC<Props> = ({children, href, onClick, className}) => {
    let onClickHandler = onClick ? onClick : (event: any) => onClickLink(event, href);
    if (href.match(/^http/) !== null) {
        onClickHandler = (event: any) => {};
    }
    return (
        <LenkepanelBase href={href} className={"infopanel " + className} onClick={onClickHandler}>
            <div className="infopanel__content">
                {children}
            </div>
        </LenkepanelBase>
    );
};

export {InfoPanelContainer, InfoPanel};
