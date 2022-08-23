import React, {useState} from 'react';
import { HomeHeaderWrapper } from "../../Design/Page/HomeDesign";
import IonIcon from '@reacticons/ionicons';
import Input from '../../Components/Input';

export default function HomeHeader () {
    const [value, setValue] = useState("test");
    return (
        <HomeHeaderWrapper>
            <IonIcon className="icon" name="menu-outline"/>
            <Input
                type="text"
                className="search"
                name="search"
                value={value}
                handleChange={(e) => setValue(e.target.value)}/>
            <img className="avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
        </HomeHeaderWrapper>
    );
}
