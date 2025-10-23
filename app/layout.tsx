'use client'
import React from 'react';

import type { Metadata } from "next";
import AppTheme from "@/themes/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AppTheme>
                    <CssBaseline />
                    {children}
                </AppTheme>
            </body>
        </html>
    );
}