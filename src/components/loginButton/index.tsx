"use client"

import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import Link from 'next/link'
import { useTranslation } from 'next-i18next';


const LoginButton = () => {
    const session = useSession();
    const { t } = useTranslation('common');


    if(session.status === 'loading'){
        return <></>;
    }
    if(session.status === 'authenticated'){
        return <div className="flex gap-5">
            <div>{session.data.user?.name}</div>
            <button onClick={()=> signOut()}>{t('greeting')}</button>
            <Link href={`/user`}>GO USER</Link>
            <Link href={`/`}>GO MAIN</Link>
        </div>
    }

    return <button onClick={()=> signIn()}>Giriş Yap</button>
};

export default LoginButton;
