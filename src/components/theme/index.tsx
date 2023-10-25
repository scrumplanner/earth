"use client"
import React, {ReactNode} from "react";

interface PropTypes {
    children: ReactNode
}

const Theme = ({children}: PropTypes) => {
    return (
        <html lang="en">
        {children}
        </html>
    );
}

export default Theme;