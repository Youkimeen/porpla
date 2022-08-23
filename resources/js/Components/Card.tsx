import React, { useState } from "react";
import {PropsForComponents} from "../store/type";
import { CardStyled } from "../Design/ComponentDesign";

interface ComponentForCard extends PropsForComponents {
    width?: number,
    height?: number
}

export default function Card ({ width = 400, height = 400, header, children }: ComponentForCard) {
    return (
        <CardStyled
            width={width}
            height={height}
        >
            {header && <div className="header">{header}</div>}
　　　　　　　　{ children }
        </CardStyled>
    );
}
