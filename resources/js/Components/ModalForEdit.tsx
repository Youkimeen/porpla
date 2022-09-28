import React, {useState} from 'react'
import {ModalWrapper, ModalContent} from "../Design/Components/Modal";
import {LoginDeveloperProps} from "../store/type";
import { useForm } from "@inertiajs/inertia-react"
import Input from '@mui/material/Input';

interface IModal {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    auth: LoginDeveloperProps,
    introduction: String
}

export default function ModalForEdit({setShow, auth, introduction}: IModal) {
    const [originalData, setOriginalDate] = useState<LoginDeveloperProps>(auth)
    const user = auth.user

    const {data, setData, post, processing, errors} = useForm({
        name: user.name,
        email: user.email,
        age: 0,
        gender: "男"
    })

    const handleReset = () => {
        setData(originalData.user)
    }


    return (
        <ModalWrapper>
            <ModalContent>
                <Input
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}/>
               <Input
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}/>
               <div className="footer">
                    <button onClick={() => setShow(false)}>
                        <h3>閉じる</h3>
                    </button>
                   <button onClick={handleReset}>
                       <h3>リセット</h3>
                   </button>
                </div>
            </ModalContent>
        </ModalWrapper>
    )
}
