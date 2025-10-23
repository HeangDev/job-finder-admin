'use client';

import { useState, useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import { Icon } from "@iconify/react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter, usePathname } from 'next/navigation';

import { navData } from './SidebarMenu';

const Sidebar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const theme = useTheme();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
    const router = useRouter();
    const pathname = usePathname();

    const handleToggle = (label: string) => {
        setOpenMenu(prev => (prev === label ? null : label));
    };

    const handleNavigate = (href: string) => {
        router.push(href);
        if (!isDesktop) {
            onClose();
        }
    };

    useEffect(() => {
        let parentFound: string | null = null;

        navData.forEach(section => {
            section.items.forEach(item => {
                if (item.subMenu?.some(sub => pathname.startsWith(`/${sub.href}`))) {
                    parentFound = item.label;
                }
            });
        });

        setOpenMenu(parentFound);
    }, [pathname]);

    return (
        <>
            <Drawer
                open={open}
                onClose={onClose}
                variant={isDesktop ? "permanent" : "temporary"}
                sx={{
                    whiteSpace: "nowrap",
                    border: "none"
                }}
            >
                <Box
                    sx={{
                        padding: "20px 24px 0px",
                        textAlign: "center",
                    }}
                >

                </Box>
                <Divider />
                <List>
                    {navData.map((section, index) => (
                        <Box key={index}>
                            <Typography variant="caption" sx={{ px: 2, mt: 2, display: "block" }}>{section.header}</Typography>
                            {section.items.map((item, idx) => {
                                const isParentActive =
                                (item.href && pathname === item.href) ||
                                (item.subMenu?.some(sub => pathname.startsWith(`/${sub.href}`)));

                                return (
                                    <Box key={idx} sx={{ margin: "1.5px 12px" }}>
                                        <ListItemButton
                                            selected={isParentActive || openMenu === item.label}
                                            onClick={() =>
                                            item.subMenu
                                                ? handleToggle(item.label)
                                                : item.href && handleNavigate(item.href)
                                            }
                                        >
                                            <ListItemIcon>
                                                <Icon icon={item.icon} />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography variant="body1">{item.label}</Typography>
                                            </ListItemText>
                                            {item.subMenu && (
                                                <Icon
                                                    icon={
                                                    openMenu === item.label
                                                        ? "solar:alt-arrow-up-line-duotone"
                                                        : "solar:alt-arrow-down-line-duotone"
                                                    }
                                                />
                                            )}
                                        </ListItemButton>

                                        {item.subMenu && (
                                            <Collapse in={openMenu === item.label} timeout="auto" unmountOnExit>
                                                <List>
                                                    {item.subMenu.map((sub, subIdx) => {
                                                        const isSubActive = pathname.startsWith(`/${sub.href}`);
                                                        return (
                                                            <ListItemButton
                                                                key={subIdx}
                                                                sx={{ margin: "3px 0 1.4px", paddingLeft: "30px" }}
                                                                selected={isSubActive}
                                                                onClick={() => sub.href && handleNavigate(sub.href)}
                                                            >
                                                            <ListItemText>
                                                                <Typography variant="body1">{sub.label}</Typography>
                                                            </ListItemText>
                                                            </ListItemButton>
                                                        );
                                                    })}
                                                </List>
                                            </Collapse>
                                        )}
                                    </Box>
                                );
                            })}
                        </Box>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default Sidebar