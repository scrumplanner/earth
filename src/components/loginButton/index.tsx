"use client"

import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";


const LoginButton = () => {
    const { data, status } = useSession();

    if(status === 'loading'){
        return <></>;
    }
    if(status === 'authenticated'){
        return <div>
            <div>{data.user?.name}</div>
            <button onClick={()=> signOut()}>Çıkış Yap</button>
        </div>
    }

    return <button onClick={()=> signIn()}>Giriş Yap</button>
};

export default LoginButton;
