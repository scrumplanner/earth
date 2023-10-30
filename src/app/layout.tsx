import type {Metadata} from 'next'
import ThemeProvider from '@/components/providers/ThemeProvider'

import './globals.css'
import SessionProvider from "@/components/providers/SessionProvider";
import DarkModeButton from "@/components/darkModeButton";
import LoginButton from "@/components/loginButton";
import React from "react";

export const metadata: Metadata = {
    title: 'Template',
}

const RootLayout = ({children, params}: { children: React.ReactNode, params: any }) => {
    return (
        <html lang={params.lang} suppressHydrationWarning={true}>
        <body>
        <ThemeProvider>
            <SessionProvider>
                <LoginButton/>
                {/*<LanguageSwitcher />*/}
                <DarkModeButton/>
                {children}
            </SessionProvider>
        </ThemeProvider>
        </body>
        </html>
    )
};

export default RootLayout;