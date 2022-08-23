import React from "react";

interface LoginDeveloperProps {
        user: {
            id: number,
            name: string,
            gender: "Man" | "Woman" | "Others",
            email: string,
            developer_avatar: string,
            age: number,
            created_at: Date
        }
}

interface PropsForComponents {
    auth?: any;
    header?: React.ReactNode;
    children: React.ReactNode;
}


export { LoginDeveloperProps, PropsForComponents }
