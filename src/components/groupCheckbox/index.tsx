import React from 'react';
import {Field, FormikErrors, FormikProps} from "formik";
import {FieldAttributes} from "formik/dist/Field";

type Fields = {
    name: string,
    value: string
}
type Options = {
    groupName: string,
    fields: Fields[]
}

interface GroupCheckbox extends FormikProps<any>, FieldAttributes<any> {
    options: Options
}

const GroupCheckbox = (props: GroupCheckbox) => {
    const {groupName, fields} = props.options;
    return (
        <div>
            {fields.map((field: Fields) => (
                <label key={field.value}>
                    <Field type="checkbox" name={groupName} value={field.value}/>
                    <span className="mx-2">
                        {field.value}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default GroupCheckbox;