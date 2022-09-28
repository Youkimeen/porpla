import React, {createContext, useState} from 'react'
import Authenticated from "../../Layouts/Authenticated";
import HomeHeader from "./HomeHeader";
import {LoginDeveloperProps, PropsForComponents} from '../../store/type';
import {LeftTimelineWrapper, RightTimelineWrapper, TimelineWrapper } from '../../Design/Page/TimelineDesign';
import { Header, Menu, Post, TopTimeline, Popup } from '../Parts/Timeline/Index';
import { AnimatePresence } from "framer-motion";

export const PopUpContext = createContext({} as {
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
})

export const AuthContext = createContext({} as {user:LoginDeveloperProps})

export default function Timeline({auth}: PropsForComponents) {
    const [modalOpen, setModalOpen] = useState(false)
    return(
        <PopUpContext.Provider value={{ modalOpen, setModalOpen }} >
            <AuthContext.Provider value={ auth }>
                <Authenticated auth={ auth }>
                    <HomeHeader />
                    <TimelineWrapper>
                        <RightTimelineWrapper>
                            <Header />

                            <div className="flex">
                                <Menu />
                                <Post />
                            </div>
                        </RightTimelineWrapper>

                        <LeftTimelineWrapper>
                            <TopTimeline />
                        </LeftTimelineWrapper>

                    </TimelineWrapper>
                    <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                    >
                        {modalOpen && <Popup />}
                    </AnimatePresence>
                </Authenticated>
            </AuthContext.Provider>
        </PopUpContext.Provider>
    )
}
