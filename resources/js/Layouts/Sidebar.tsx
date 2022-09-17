import React, {useState} from 'react'
import IonIcon from '@reacticons/ionicons'
import Menu from '../Layouts/Menu';
import {SidebarContainer, Option, OptionContainer, IonIconStyled} from "../Design/Layout";

interface LiCollection {
    id: number,
    name: string,
    title: string,
    route?: string,
    method?: string,
}

export default function Sidebar () {
    const [ionIcon, setIonIcon] = useState(false);

    const lists:LiCollection[] = [
        {id:0, name: "home-outline", title: "Home", route: "home.index", method: "get"},
        {id:1, name: "code-working-outline", title: "Timeline", route: "home.timeline", method: "get"},
        {id:2, name: "person-outline", title: "Person", route: "home.person", method: "get"},
        {id:3, name: "settings-outline", title: "Setting", route: "logout", method: "post"},
        {id:4, name: "chatbubble-outline", title: "Chat", route: "logout", method: "post"},
        {id:5, name: "notifications-outline", title: "Notification", route: "logout", method: "post"},
        {id:6, name: "analytics-outline", title: "Analytic", route: "logout", method: "post"},
        {id:7, name: "log-out-outline", title: "Logout", route: "logout", method: "post"}
    ]
    return(
        <SidebarContainer>
            <h1> Logo </h1>
            <OptionContainer>
                {lists.map(list => (
                    <Option
                       href={route(list.route)}
                       method={list.method}
                    >
                        <IonIconStyled name={list.name} className="icon"/>
                        <p>{list.title}</p>
                    </Option>
                ))}
            </OptionContainer>
        </SidebarContainer>
    );
}
