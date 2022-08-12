import React, { useState } from 'react';
import Authenticated from "@/Layouts/Authenticated";

export default function App(props: any) {
    let number = 1;

    return (
        <Authenticated
            auth={props.auth}
            header={<div className="text-3xl">App</div>}
        >

            <h1>{number}</h1>
        </Authenticated>
    );
}
