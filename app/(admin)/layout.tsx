'use client';

import { useState } from "react"
import Box from "@mui/material/Box"
import Sidebar from "@/components/layout/mainlayout/sidebar/Sidebar"
import Header from "@/components/layout/mainlayout/header/header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <Sidebar open={isSidebarOpen} onClose={toggleSidebar}/>
            <Box
                sx={{
                    position: "relative",
                    height: "100vh",
                    marginLeft: { xl: "230px" },
                    padding: "24px",
                    color: "rgb(23, 23, 23)",
                    backgroundColor: "transparent",
                    opacity: 1,
                    transition: { xl: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)" }
                }}
            >
                <Header onToggleSidebar={toggleSidebar}/>
                <Box
                    sx={{
                        paddingY: "24px",
                        color: "rgb(23, 23, 23)",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        opacity: 1
                    }}
                >
                    {children}
                </Box>
            </Box>
        </>
    )
}