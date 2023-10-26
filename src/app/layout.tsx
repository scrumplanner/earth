import type {Metadata} from 'next'
import ThemeProvider from '@/components/providers/ThemeProvider'

import './globals.css'

export const metadata: Metadata = {
    title: 'Template',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}