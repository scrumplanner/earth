"use client"
import React from 'react';
import {Formik, Field, FormikHelpers, FormikProps} from 'formik';
import * as Yup from "yup";
import Form, {FormikValues} from "@/components/form";
import Input from "@/components/input";

interface Values extends FormikValues {
    email: string;
    password: string;
}

const initialValues = {
    email: '',
    password: '',
};
const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email formatında olmalı!").required("Email Zorunlu!"),
    password: Yup.string().required("Zorunlu Alan!"),
});
const Login = () => {
    const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> => {
    }

    return (
        <div>
            <h1>Signup</h1>
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