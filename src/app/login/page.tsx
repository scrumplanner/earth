"use client"
import React from 'react';
import {FormikHelpers, FormikProps} from 'formik';
import * as Yup from "yup";
import Form, {FormikValues} from "@/components/form";
import Input from "@/components/input";
import {signIn} from "next-auth/react";

interface Values extends FormikValues {
    email: string;
    password: string;
}

const initialValues = {
    email: 'serhatkochan@hotmail.com.tr',
    password: '123456',
};
const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email formatında olmalı!").required("Email Zorunlu!"),
    password: Yup.string().required("Zorunlu Alan!"),
});
const Login = () => {
    const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> => {
        handleSignIn(values);
    }
    const handleSignIn = async(values: Values) => {
        await signIn('credentials', {...values, callbackUrl: '/'})
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Form
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                {
                    (props: FormikProps<Values>) => (
                        <>
                            <Input name="email" placeholder="email" {...props} />
                            <Input name="password" placeholder="password" {...props}/>
                        </>
                    )
                }
            </Form>
        </div>
    );
};

export default Login;