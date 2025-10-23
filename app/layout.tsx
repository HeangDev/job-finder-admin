'use client'

import type { Metadata } from "next";
import AppTheme from "@/themes/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>, props: { disableCustomTheme?: boolean }) {
    return (
        <html lang="en">
            <body>
                <AppTheme {...props}>
                    <CssBaseline />
                    {children}
                </AppTheme>
            </body>
        </html>
    );
}
