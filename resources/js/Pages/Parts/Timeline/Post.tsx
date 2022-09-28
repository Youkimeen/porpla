import React from 'react'
import {PostComponent} from "../../../Design/Page/TimelineDesign";
import { reviewers, Reviewer } from "../Person/Profile";

export default function Post () {
    return(
        <div className="space-y-8">
            {reviewers.map(({name, review, date, avatar}: Reviewer) => (
                <PostComponent>
                    <div className="left">
                        <img className="avatar" src={ avatar } />
                    </div>
                    <div className="right">
                        <h1 className="title">{ name }</h1>
                        <p>{ review }</p>
                        <div className="date">
                            <p>{ date }</p>
                        </div>
                    </div>
                </PostComponent>
            ))}
        </div>
    )
}
