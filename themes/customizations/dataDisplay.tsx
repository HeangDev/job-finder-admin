import type { Theme, Components } from '@mui/material'

export const dataDisplayCustomizations: Components<Theme> = {
    MuiAvatar: {
        styleOverrides: {
            root: () => {
                return {
                    width: "30px",
                    height: "30px"
                }
            }
        }
    },
    MuiDivider: {
        styleOverrides: {
            root: () => {
                return {
                    height: 1,
                    margin: "16px 0",
                    borderTop: "0px solid rgba(0, 0, 0, 0.12)",
                    borderRight: "0px solid rgba(0, 0, 0, 0.12)",
                    borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
                    borderBottom: "none",
                    backgroundImage: "linear-gradient(to right, rgba(23, 23, 23, 0), rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0)) !important",
                    opacity: 0.25
                }
            }
        }
    },
    MuiList: {
        styleOverrides: {
            root: () => {
                return {
                    padding: 0
                }
            }
        }
    },
    MuiListItem: {
        styleOverrides: {
            root: () => {
                return {
                    padding: 0,
                }
            }
        }
    },
    MuiListItemButton: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true,
        },
        styleOverrides: {
            root: () => {
                return {
                    width: "100%",
                    height: "34px",
                    padding: "8px 12px",
                    color: "rgb(23, 23, 23)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "none",
                    "& p": {
                        fontSize: 12,
                        fontWeight: 400,
                        lineHeight: 0,
                    },
                    "& svg": {
                        width: "18px",
                        height: "18px",
                        fontWeight: 700,
                        transition: "color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)"
                    }
                }
            },
            selected: ({ theme }) => {
                return {
                    backgroundColor: (theme.vars || theme).palette.action.hover,
                }
            }
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: () => {
                return {
                    minWidth: "18px",
                    minHeight: "18px"
                }
            }
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: ({theme}) => {
                return {
                    marginLeft: "10px",
                    [theme.breakpoints.up("xl")]: {
                        maxWidth: "100%",
                        opacity: 1
                    }
                }
            }
        }
    },
    MuiTableCell: {
        styleOverrides: {
            root: ({theme}) => {
                return {
                    padding: "10px 24px",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: (theme.vars || theme).palette.text.secondary,
                    whiteSpace: "nowrap",
                    borderBottom: "1px solid rgb(240, 242, 245)",
                    backgroundColor: "transparent",
                    opacity: 1,
                }
            }
        }
    }
}