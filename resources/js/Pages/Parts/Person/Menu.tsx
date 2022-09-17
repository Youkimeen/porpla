import React from 'react'
import {IconWrapper, MenuWrapper} from '../../../Design/Page/PersonDesign'
import Card from "../../../Components/Card";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReplyIcon from '@mui/icons-material/Reply';

export default function Menu() {
    return(
        <MenuWrapper>
            <div style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
                <Card
                    width={150}
                    height={80}
                    header={""}>
                    <IconWrapper>
                        <div className="icon_with_notification">
                            <NotificationsIcon className="icon"/>
                            <p className="number_of_notification">3</p>
                        </div>
                    </IconWrapper>
                </Card>
                <Card
                    width={150}
                    height={80}
                    header={""}>
                    <IconWrapper>
                        <div className="icon_with_notification">
                            <ReplyIcon className="icon"/>
                            <p className="number_of_notification">2</p>
                        </div>
                    </IconWrapper>
                </Card>
            </div>
            <br />
            <Card
                width={500}
                height={100}
                header={"コミット率"}
            >
                <h1>100%</h1>
            </Card>
        </MenuWrapper>
    )
}
