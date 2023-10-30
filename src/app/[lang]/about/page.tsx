"use client"
import React from 'react';
import {getDictionary} from "../../../../locales";

const About = async ({params}) => {
    const lang = await getDictionary(params.lang);
    return (
        <div>
            <div>
                <label>{lang.form.name}</label>
            </div>
            <div>
                <label>{lang.form.email}</label>
            </div>
            <div>
                <label>{lang.form.city}</label>
            </div>
        </div>
    );
};

export default About;