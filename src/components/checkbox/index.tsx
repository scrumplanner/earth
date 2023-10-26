import React from 'react';
import {Field, FormikErrors, FormikProps} from "formik";
import {FieldAttributes} from "formik/dist/Field";

interface Checkbox extends FormikProps<any>, FieldAttributes<any>{

}

const Checkbox = (props: Checkbox) => {
    const {errors, name, placeholder, values} = props;
    return (
        <label>
            <Field name={name} placeholder={placeholder} type="checkbox" value="Serhat"/>
            {errors?.[name] && <div className="text-red-800">{errors?.[name]?.toString()}</div>}
            <span className="ml-3">
                {values?.[name] ? 'Seniorsun' : 'Juniorsun'}
            </span>
        </label>
    );
};

export default Checkbox;