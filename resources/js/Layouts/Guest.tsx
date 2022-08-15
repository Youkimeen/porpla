import React from 'react';
import { GuestScreen, GuestForm } from "../Design/AuthDesign";

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    return (
        <GuestScreen>
            <div className="background_color">
                <div className="deepskyblue"></div>
                <div className="royalblue"></div>
                <div className="lime"></div>
            </div>
            <GuestForm>
                {children}
            </GuestForm>
        </GuestScreen>
    );
}
