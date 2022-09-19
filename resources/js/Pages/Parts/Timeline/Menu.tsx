import React from 'react'
import { MenuWrapper } from '../../../Design/Page/TimelineDesign'

interface IMenu {
    name: string,
    url: string
}

export default function Menu () {
    const menus: IMenu[] = [
        {name: "All Posts", url: "/posts"},
        {name: "My Participation", url: "/participation"},
        {name: "My Question", url: "/question"},
        {name: "Group Sharing", url: "/group"},
        {name: "Company", url: "/company"},
    ]

    return(
        <MenuWrapper>
                {menus.map(({name, url}) => (
                   <div></div>
                ))}
        </MenuWrapper>
    )
}
