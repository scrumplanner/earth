"use client"
import Form, {FormikValues} from "@/components/form";
import {FormikHelpers, FormikProps} from "formik";
import Selectbox from "@/components/selectbox";
import React from "react";
import * as Yup from "yup";

interface Values extends FormikValues {
    colors?: string;

}

const initialValues = {};
const loginSchema = Yup.object().shape({});

export default function Home() {
    const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> => {
        console.log(values);
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {
                    (props: FormikProps<Values>) => (
                        <>
                            <Selectbox
                                {...props}
                                name="colors"
                                placeholder="Renk Seç"
                                label="Renkler"
                                options={[
                                    {value: "red", text: "Red"},
                                    {value: "green", text: "Green"},
                                    {value: "blue", text: "Blue"}
                                ]}
                            />
                        </>
                    )
                }
            </Form>
        </div>
    )
}