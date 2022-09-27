import React from 'react'
import {PropsForComponents} from "../../store/type";
import Authenticated from "../../Layouts/Authenticated";
import HomeHeader from "./HomeHeader";
import {AuthContext} from "./Timeline";
import { Group } from '../Parts/Chat/Index';
import {ChatWrapper} from "../../Design/Page/ChatDesign";

export default function Chat ({auth}: PropsForComponents) {
    return (
        <AuthContext.Provider value={ auth }>
            <Authenticated auth={ auth }>
                <HomeHeader />
                <ChatWrapper>
                    <Group />
                </ChatWrapper>
            </Authenticated>
        </AuthContext.Provider>
    )
}
