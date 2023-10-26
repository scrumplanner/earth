import type {Metadata} from 'next'
import ThemeProvider from '@/components/providers/ThemeProvider'

import './globals.css'
import SessionProvider from "@/components/providers/SessionProvider";
import DarkModeButton from "@/components/darkModeButton";
import LoginButton from "@/components/loginButton";

export const metadata: Metadata = {
    title: 'Template',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body>
        <ThemeProvider>
            <SessionProvider>
                <LoginButton />
                <DarkModeButton />
                {children}
            </SessionProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}