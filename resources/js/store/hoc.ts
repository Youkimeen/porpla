import {ReactComponent} from "@inertiajs/inertia-react";
import React, {ReactComponentElement} from "react";

interface UserInfo<P> {
    Component: React.ElementType<P>,
    userId: number
}

interface IUser {
    user: {
        name: string,
        username: string,
        email: string,
        phone: number,
        website: string
    }
}




export { UserInfo, IUser }
