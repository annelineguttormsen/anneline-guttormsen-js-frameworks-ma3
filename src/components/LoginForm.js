import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    userName : yup.string().required("Username is required"),
    password : yup
    .string()
    .required("Password is required")
    .min(4, "Password must be longer than 4 characters")
});

export default function LoginForm() {
    const {register, handleSubmit, errors} = useForm({
        validationSchema:schema
    });

    function formSubmit(data) {
        console.log("Data", data);
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            Username: <input name ="userName" ref={register}/>
            {errors.userName && <p>{errors.userName.message}</p>}
            <br/>
            Password: <input name="password" ref={register}/>
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}