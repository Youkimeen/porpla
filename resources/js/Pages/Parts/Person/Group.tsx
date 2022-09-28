import React from 'react'
import {GroupWrapper} from "../../../Design/Page/PersonDesign";
import Card from "../../../Components/Card";
import BusinessIcon from '@mui/icons-material/Business';

export default function Group() {
    return(
        <GroupWrapper>
            <Card
            header={"所属グループ"}
            width={400}
            height={400}
            Icon={BusinessIcon}
            >
                <div className="divide-y-2 divide-blue-100">
                    <div>
                        <a><h3>あれこれ会社</h3></a>
                        <p>プロジェクト名</p>
                        <h3>こそあどファイ！</h3>
                    </div>
                    <br />
                    <div>
                        <a><h3>あれこれ会社</h3></a>
                        <p>プロジェクト名</p>
                        <h3>こそあどファイ！</h3>
                    </div>
                    <br />
                    <div>
                        <a><h3>あれこれ会社</h3></a>
                        <p>プロジェクト名</p>
                        <h3>こそあどファイ！</h3>
                    </div>
                    <br />
                    <div>
                        <a><h3>あれこれ会社</h3></a>
                        <p>プロジェクト名</p>
                        <h3>こそあどファイ！</h3>
                    </div>
                    <br />
                    <div>
                        <a><h3>あれこれ会社</h3></a>
                        <p>プロジェクト名</p>
                        <h3>こそあどファイ！</h3>
                    </div>
                    <br />
                </div>
            </Card>
        </GroupWrapper>
    )
}
