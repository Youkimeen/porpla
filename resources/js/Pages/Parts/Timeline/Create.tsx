import React, {useContext} from 'react'
import {CreateHeader, CreateWrapper, CreateTextArea, CreateButtonZone, dropIn} from '../../../Design/Page/TimelineDesign'
import CustomButton from "../../../Components/CustomButton";
import {PopUpContext} from "../../Home/Timeline";



export default function Create() {
    const {modalOpen, setModalOpen} = useContext(PopUpContext)



    return(
        <CreateWrapper
         onClick={(e) => e.stopPropagation()}
         variants={dropIn}
         initial="hidden"
         animate="visible"
         exit="exit"
        >
            <CreateHeader>
                <div className="title">
                    <input placeholder="タイトルを追加"/>
                </div>
                <div className="info">
                    <div className="channel">
                        チャンネルを選んでください
                    </div>
                    <div className="profile">
                        <img className="avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt=""/>
                    </div>
                </div>
            </CreateHeader>
            <CreateTextArea
                placeholder="何をかく？"
                className="border-transparent focus:border-transparent focus:ring-0">
            </CreateTextArea>
            <CreateButtonZone
              className="space-x-3"
            >
                <CustomButton
                    width={90}
                    height={30}
                    bgColor={"lightgray"}
                    color={"white"}
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    キャンセル
                </CustomButton>
                <CustomButton
                    width={80}
                    height={30}
                    bgColor={"#006DB0"}
                    color={"white"}
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    完了
                </CustomButton>
            </CreateButtonZone>
        </CreateWrapper>
    )
}
