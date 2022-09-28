import React from 'react';
import Authenticated from "../../Layouts/Authenticated";
import {LoginDeveloperProps} from "../../store/type";
import Card from '../../Components/Card';
import {HomeWrapper} from "../../Design/Page/HomeDesign";
import HomeHeader from "./HomeHeader";

export default function Index ({user}:LoginDeveloperProps) {
    return(
        <Authenticated auth={user}>
           <HomeHeader />
            {/* Home Body */}
            {/* Home Footer*/}
            <HomeWrapper>
                <Card
                 header={"Header"}
                 width={400}
                 height={400}
                >

                </Card>
                <Card
                 header={"Header"}
                 width={400}
                 height={400}
                >

                </Card>
                <Card
                 header={"Header"}
                 width={1000}
                 height={400}
                >

                </Card>
                <Card
                 header={"Header"}
                 width={400}
                 height={400}
                >

                </Card>
                <Card
                 header={"Header"}
                 width={400}
                 height={400}
                >

                </Card>
                <Card
                 header={"Header"}
                 width={400}
                 height={400}
                >

                </Card>
            </HomeWrapper>
        </Authenticated>
    )
}
