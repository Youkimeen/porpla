import React, {useContext, useState} from 'react'
import {ProfileWrapper} from "../../../Design/Page/PersonDesign";
import {LoginDeveloperProps} from "../../../store/type";
import {Edit, AccessTime} from '@mui/icons-material';
import {ModalContext} from "../../Home/Person";

export interface Reviewer {
    name: String,
    review: String,
    date: String,
    avatar: string
}

export const reviewers: Reviewer[] = [
    {name: "Take", review: "Hi! I'M a test for dummy text. It's really weird to speak here for keeping right conversation you know? we'd better copy and paste some sentences\n" +
            "fetched from somewhere, why ...", date: "2022/02/20", avatar: "https://i.pravatar.cc/150?u=a042581f4e29006704d"},
    {name: "Mei", review: "  Hi! I'M a test for dummy text. It's really weird to speak here for keeping right conversation you know? we'd better copy and paste some sentences\n" +
            "fetched from somewhere, why ...", date: "2022/02/20", avatar: "https://i.pravatar.cc/150?u=a042591f4e290267011"},
    {name: "Raian", review: "  Hi! I'M a test for dummy text. It's really weird to speak here for keeping right conversation you know? we'd better copy and paste some sentences\n" +
            "fetched from somewhere, why ...", date: "2022/02/20", avatar: "https://i.pravatar.cc/150?u=a042581f4e290267053"},
]

export default function Profile({user}: LoginDeveloperProps) {
    const {show, setShow} = useContext(ModalContext)
    console.log(show)
    let date = new Date()
    let today = date.toLocaleDateString() + " " + date.toLocaleTimeString().slice(0, -3)

    return(
        <ProfileWrapper className="divide-y-2 divide-gray-200">
            <img className="avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>

            <div className="profile_header">
                <div>
                    <h1>{user.name}</h1>
                    <p>年齢：</p>
                    <p>性別：</p>
                    <p>メール: {user.email}</p>
                </div>

                <div style={{width: 80, height: 50}}>
                    <button
                        onClick={() => setShow(true)}
                        className="button"><Edit className="icon"/>編集</button >
                </div>
            </div>

            <div className="profile_public_info">
                <div className="active">
                    <div className="mark"></div>
                    <div className="char"><h3>アクティブ</h3></div>
                </div>

                <div className="time">
                    <div className="mark"><AccessTime /></div>
                    <div className="char">現地時間: { today }</div>
                </div>

            </div>

            <div className="profile_personal_info">
                <div className="introduction">
                    <h3>自己紹介</h3>
                    Hi! I'M a test for dummy text. It's really weird to speak here for keeping right conversation you know? we'd better copy and paste some sentences
                    fetched from somewhere, why ...
                </div>

                <div className="language">
                    <h3>この人の得意な言語</h3>
                    <a>Java</a> <a>Springboot</a> <a>Mysql</a> <a>Angular</a>
                </div>

                <div className="group">
                    <h3>所属グループ</h3>
                    <a>Hello World Company</a>
                </div>
            </div>

            <div className="profile_review divide-y-2 divide-gray-200">
                <h2>レビュー</h2>
                {reviewers.map((reviewer:Reviewer) => (
                    <div className="review">
                        <div className="reviewer">
                            <img style={{width: 50, height: 50, borderRadius: "50%"}} src={reviewer.avatar} alt=""/>
                            <div className="name_date">
                                <p>{reviewer.name}</p>
                                <p>{reviewer.date}</p>
                            </div>
                        </div>
                        <div className="review_content">
                            <p>{reviewer.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ProfileWrapper>
    )
}
