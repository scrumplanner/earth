import React from 'react';
import {Field, FormikErrors, FormikProps} from "formik";
import {FieldAttributes} from "formik/dist/Field";

interface Input extends FormikProps<any>, FieldAttributes<any>{

}

const Input = (props: Input) => {
    const {errors, name, placeholder} = props;
    return (
        <>
            <Field name={name} placeholder={placeholder}/>
            {errors?.[name] && <div className="text-red-800">{errors?.[name]?.toString()}</div>}
        </>
    );
};

export default Input;