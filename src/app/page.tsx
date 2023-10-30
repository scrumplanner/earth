"use client"
import React from "react";
import {getDictionary} from "../../locales";

export default async function Home({params}: {params: any}) {
    const lang = await getDictionary(params.lang);
    console.log(params.lang)

    console.log(lang, 'params for home')
    return (
        <main className="h-screen flex items-center justify-center">
            <div>
                <label>{lang.form.name}</label>
                <input type="text"/>
            </div>
            <div>
                <label>{lang.form.email}</label>
                <input type="email"/>
            </div>
            <div>
                <label>{lang.form.city}</label>
                <input type="text"/>
            </div>
        </main>
    )
}