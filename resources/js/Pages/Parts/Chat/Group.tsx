import React from 'react'
import {GroupWrapper} from "../../../Design/Page/ChatDesign";

interface IChat {
    groupName: string,
    member: number,
    projectName: string,
    teamLeader: string,
    notification: Boolean,
}

const groups:IChat[] = [
    {groupName: "AI Company", member: 15, projectName: "AI World Governance", teamLeader: "Malcom", notification: false},
    {groupName: "Lab Company", member: 9, projectName: "Create bland new App with a strategy", teamLeader: "Mei", notification: true},
    {groupName: "Klaim", member: 10, projectName: "Build mobile application", teamLeader: "Xavier", notification: true},
    {groupName: "T O", member: 30, projectName: "Infrastructure", teamLeader: "Jackson", notification: false},
]

export default function Group () {
    return (
        <div className="space-y-8">
            {groups.map(({groupName, member, projectName, teamLeader, notification}: IChat) => (
                <GroupWrapper>
                    <div className="header">
                        <h2>{groupName}</h2>
                        <p>リーダー: {teamLeader}</p>
                        <p>人数: {member}</p>
                    </div>
                    <div className="content">
                        <h3>{projectName}</h3>
                    </div>
                </GroupWrapper>
            ))}
        </div>
    )
}
