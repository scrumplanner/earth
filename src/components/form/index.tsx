import React, {ReactNode} from 'react';
import {Formik, Form as FormikForm, FormikConfig, FormikProps} from "formik";

export interface FormikValues {
    [key: string]: any
}

interface FormikWrapperProps<T> extends FormikConfig<T> {
    children: (props: FormikProps<T>) => ReactNode;
}

function Form<T extends FormikValues>({children, ...props}: FormikWrapperProps<T>): React.JSX.Element {
    return (
        <Formik {...props}>
            {(props: FormikProps<T>) => {
                return (
                    <FormikForm className="flex gap-4 flex-col">
                        {children(props)}
                        <button type="submit">Submit</button>
                    </FormikForm>
                )
            }}
        </Formik>
    )
}

export default Form;;