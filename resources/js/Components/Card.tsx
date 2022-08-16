import React, { useState } from "react";
import {PropsForComponents} from "../store/type";

export default function Card ({ children }: PropsForComponents) {


    return (
        <div className="w-1/3 px-5 ">
　　　　　　　　{ children }
        </div>
    );
}
