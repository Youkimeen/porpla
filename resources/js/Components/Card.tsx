import React, { useState } from "react";
import {PropsForComponents} from "../store/type";
import { CardStyled } from "../Design/ComponentDesign";
import {SvgIconProps, SvgIconTypeMap} from "@mui/material/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ComponentForCard extends PropsForComponents {
    width?: number,
    height?: number,
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string}
    }

export default function Card ({ width = 400, height = 400, header, children, Icon }: ComponentForCard) {
    return (
        <CardStyled
            width={width}
            height={height}
        >
        {Icon ? <div className="header"><Icon /> { header }</div> : <div>{ header }</div>}
　　　　　　　<div className="children">

            { children }
            </div>　

        </CardStyled>
    );
}
