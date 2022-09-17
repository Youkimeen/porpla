import React, { createContext, useState } from 'react'
import {PropsForComponents} from "../../store/type";
import Authenticated from "../../Layouts/Authenticated";
import HomeHeader from "./HomeHeader";
import {Group, Profile, Menu} from "../Parts/Person/Index";
import ModalForEdit from '../../Components/ModalForEdit';
import { PersonWrapper, PersonRightWrapper } from '../../Design/Page/PersonDesign';

export const ModalContext = createContext({} as {
    show: Boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
})

export default function Person({auth}: PropsForComponents) {
    const [show, setShow] = useState(false);
    const introduction = "Hi! I'M a test for dummy text. It's really weird to speak here for keeping right conversation you know? we'd better copy and paste some sentences\n" +
        "fetched from somewhere, why ...";

    return(
        <ModalContext.Provider value={{ show, setShow }}>
                <Authenticated auth={auth}>
                    <HomeHeader />
                        <PersonWrapper>
                            {/*Person Body*/}
                            <Profile user={auth.user}/>
                            <PersonRightWrapper>
                                <Group />
                                <Menu />
                            </PersonRightWrapper>
                            {/*Person Footer*/}
                        </PersonWrapper>
                </Authenticated>
            {show && <ModalForEdit {...{setShow, auth, introduction}} />}
        </ModalContext.Provider>
    )
}
