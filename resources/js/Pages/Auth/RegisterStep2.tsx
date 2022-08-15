import React, { useEffect } from "react";
import Button from "../../Components/Button";
import Guest from "../../Layouts/Guest";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import ValidationErrors from "../../Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";


type Gender = "Man" | "Woman" | "Others";

export default function RegisterStep2 ({genders}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        age: 0,
        gender: "",
        avatar: "",
    });

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "age" | "avatar" | "gender",
            event.target.type === "checkbox"
                ? event.target.checked + ""
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("register-step-2.post"));
    };

    return (
        <Guest>
            <Head title="Register2 | 新規登録2" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <h1>Logo comes here</h1>
                <div>
                    <div className="mt-4">
                        <Label forInput="age" value="Age(Optional)" />

                        <Input
                            type="number"
                            name="age"
                            value={data.age}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="Avatar" value="Avatar(Optional)" />

                        <Input
                            type="file"
                            name="Avatar"
                            value={data.avatar}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="age" value="Age(Optional)" />

                        <select
                            className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        >
                            {genders.map((gender: Gender) => (
                                <option>{gender}</option>
                            ))}
                        </select>

                    </div>
                </div>

            </form>
        </Guest>
    )

}
