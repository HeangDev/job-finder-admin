import type { Theme, Components, alpha } from '@mui/material'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const inputsCustomizations: Components<Theme> = {
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: "none"
            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: "0",
            },
            root: ({ theme }) => ({
                padding: "8px 12px",
                fontSize: "12px",
                color: (theme.vars || theme).palette.text.primary,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                outline: `1px solid ${(theme.vars || theme).palette.divider}`,
                backgroundColor: (theme.vars || theme).palette.background.default,
                transition: "outline 120ms ease-in",
                "&:hover": {
                    outline: "1px solid",
                },
                variants: [
                    {
                        props: {
                            size: "small",
                        },
                        style: {
                            height: "34px"
                        }
                    },
                ]
            }),
            notchedOutline: {
                border: "none"
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "5px",
                fontSize: "24px",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: "transparent",
                boxShadow: 'none',
                variants: [
                    {
                        props: {
                            size: "small",
                        },
                        style: {
                            width: "32px",
                            height: "32px",
                        }
                    }
                ],
                '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.action.selected,
                },
            })
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "6px 16px",
                fontSize: "12px",
                fontWeight: 700,
                color: (theme.vars || theme).palette.text.primary,
                textAlign: "center",
                minWidth: "64px",
                boxShadow: "none",
                borderRadius: (theme.vars || theme).shape.borderRadius,
                backgroundColor: (theme.vars || theme).palette.background.paper,
                textTransform: "none",
                variants: [
                    {
                        props: {
                            size: "small"
                        },
                        style: {
                            height: "36px",
                        }
                    },
                ]
            })
        }
    }
}