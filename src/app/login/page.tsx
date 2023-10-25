"use client"
import React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import * as Yup from "yup";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
};
const loginSchema = Yup.object().shape({
    firstName: Yup.number().typeError("String Olacak!").required("Zorunlu!"),
    lastName: Yup.string().required("Zorunlu Alan!"),
    email: Yup.string().email("Email formatında olmalı!").required("Email Zorunlu!"),
});
const Login = () => {
    const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => {
        console.log(values, formikHelpers);
    }
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
            >
                {({errors}) => {

                    return (
                        <Form className="flex gap-4 flex-col">
                            <Field name="firstName" placeholder="firstName"/>
                            {errors.firstName && <div>{errors.firstName}</div>}

                            <Field name="lastName" placeholder="lastName"/>
                            {errors.lastName && <div>{errors.lastName}</div>}

                            <Field name="email" placeholder="email"/>
                            {errors.email && <div>{errors.email}</div>}

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default Login;