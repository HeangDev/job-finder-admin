'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { usePathname } from 'next/navigation';
import { Icon } from "@iconify/react";
import HeaderAvatar from './HeaderAvatar';

interface ElevationProps {
    window?: () => Window;
    children?: React.ReactElement<{ elevation?: number }>;
}

interface HeaderProps {
    onToggleSidebar: () => void;
    window?: () => Window;
}

function ElevationScroll(props: ElevationProps) {
    const { children, window } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
    : null;
}

export default function Header({ onToggleSidebar, window }: HeaderProps) {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <>
            <ElevationScroll window={window}>
                <AppBar position="sticky" color="inherit">
                    <Toolbar>
                        <Box>
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center", gap: 2, }}
                            >
                                <IconButton sx={{ display: { xl: "none" } }} onClick={onToggleSidebar}><Icon icon="solar:hamburger-menu-line-duotone" /></IconButton>
                                <Breadcrumbs>
                                    {pathnames.length === 1 && pathnames[0] === "dashboard"
                                        ? (
                                            <Typography variant="caption" sx={{ fontWeight: 700 }}> Dashboards </Typography>
                                        )
                                        : [
                                            <Link underline="hover" color="inherit" href="/dashboard"><Typography variant="caption">Dashboards</Typography></Link>,
                                            ...pathnames
                                            .filter((value) => value !== "dashboards")
                                            .map((value, index) => {
                                                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                                                const isLast = index === pathnames.length - 1;

                                                return isLast ? (
                                                    <Typography key={to} variant="caption" sx={{ fontWeight: 700 }}>
                                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                                    </Typography>
                                                ) : (
                                                    <Link
                                                        key={to}
                                                        underline="hover"
                                                        color="inherit"
                                                        href={to}
                                                    >
                                                        <Typography variant="caption">
                                                            {value.charAt(0).toUpperCase() + value.slice(1)}
                                                        </Typography>
                                                    </Link>
                                                );
                                            })
                                        ]
                                    }
                                </Breadcrumbs>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack
                                direction="row"
                                sx={{
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    flex: "1 1 auto",
                                    gap: 1
                                }}
                            >
                                <IconButton><Icon icon="solar:bell-bing-bold-duotone" /></IconButton>
                                <HeaderAvatar/>
                            </Stack>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}