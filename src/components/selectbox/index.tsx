import React from 'react';
import {Field, FormikProps} from "formik";
import {FieldAttributes} from "formik/dist/Field";

type Option = {
    value: string | number,
    text: string,
}

interface Selectbox extends FormikProps<any>, FieldAttributes<any> {
    options: Option[]
}

const Selectbox = (props: Selectbox) => {
    const {errors, name, placeholder, options, label} = props;
    return (
        <label>
            {label}
            <Field
                name={name}
                as="select"
                className="p-2"
            >
                <option hidden label={placeholder}/>
                {options.map(({value, text}: Option) => (
                    <option value={value} key={value} label={text} />
                ))}
            </Field>

            {errors?.[name] && <div className="text-red-800">{errors?.[name]?.toString()}</div>}
        </label>
    );
};

export default Selectbox;