import React, { useState } from 'react';
import Authenticated from "../Layouts/Authenticated";
import { LoginDeveloperProps } from "../store/type";
import BreezeCard from '../Components/Card';
import { CurrentUser } from "../CustomHooks/CurrentUser";

export default function App({ auth } : LoginDeveloperProps) {

    return (
        <Authenticated
            auth={auth}
            header={<div className="text-3xl">App</div>}
        >
            <BreezeCard
            header={"test"}
            >
                <div className="min-w-fit py-4 px-4 bg-white rounded-md shadow-md shadow-gray-500">
                    テストテストテストテストテストテストテスト
                    テストテストテストテストテストテストテスト
                    テストテストテストテストテストテストテスト
                    テストテストテストテストテストテストテスト
                </div>
            </BreezeCard>

        </Authenticated>
    );
}
