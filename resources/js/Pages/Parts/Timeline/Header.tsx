import React, { useState, useContext } from 'react'
import { HeaderWrapper, LeftHeader, RightHeader } from '../../../Design/Page/TimelineDesign'
import CustomButton from "../../../Components/CustomButton";
import {PopUpContext} from "../../Home/Timeline";
import Dropdown from "../../../Components/Dropdown";
import SelectOption from "../../../Components/SelectOption";

const option = [
    {key: 1, value: "a"},
    {key: 2, value: "b"},
    {key: 3, value: "c"},
    {key: 4, value: "d"},
    {key: 5, value: "e"},
]

export default function Header () {
    const {modalOpen, setModalOpen} = useContext(PopUpContext)

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return(
        <HeaderWrapper>
            <LeftHeader>
               <CustomButton
               height={50}
               bgColor={"skyblue"}
               color={"white"}
               onClick={() => (modalOpen ? close() : open())}
               >{modalOpen ? <p>やめる</p>: <p>投稿する</p>}</CustomButton>
            </LeftHeader>
            <RightHeader className="space-x-2">
                <SelectOption
                    height={40}
                    width={120}
                    color={"#fff"}
                    borderRadius={30}
                    bgColor={"dodgerblue"}
                    option={option}
                    defaultOption={"カテゴリー"} />
                <SelectOption
                    height={40}
                    width={120}
                    color={"#fff"}
                    borderRadius={30}
                    bgColor={"dodgerblue"}
                    option={option}
                    defaultOption={"最新順"} />
            </RightHeader>
        </HeaderWrapper>
    )
}
