import type { Theme, Components } from '@mui/material'
import { alpha } from "@mui/material/styles";
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
                width: "100%",
                padding: "10px 14px",
                fontSize: "12px",
                fontWeight: 500,
                color: (theme.vars || theme).palette.text.primary,
                borderRadius: (theme.vars || theme).shape.borderRadius,
                backgroundColor: (theme.vars || theme).palette.background.default,
                transition: "outline 120ms ease-in",
                variants: [
                    {
                        props: {
                            size: "small",
                        },
                    },
                ]
            }),
            notchedOutline: {
                border: "none"
            }
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                position: "relative",
                maxWidth: "100%",
                marginBottom: "6px",
                fontSize: "12px",
                fontWeight: 500,
                color: (theme.vars || theme).palette.text.primary,
                transform: "none",
            })
        }
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: ({ theme }) => ({
                width: "100%",
                marginTop: "6px",
                marginLeft: 0,
                marginRight: 0,
                fontSize: "12px",
                color: (theme.vars || theme).palette.error.main,
            })
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
                display: "flex",
                gap: 2,
                padding: "8px 12px",
                fontSize: "12px",
                fontWeight: 700,
                color: (theme.vars || theme).palette.text.primary,
                textAlign: "center",
                minWidth: "64px",
                boxShadow: "none",
                borderRadius: (theme.vars || theme).shape.borderRadius,
                backgroundColor: (theme.vars || theme).palette.background.default,
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
                    {
                        props: { color: "primary" },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.info.main,
                            color: (theme.vars || theme).palette.light.main,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.info.main, 0.8)
                            },
                        }),
                    },
                    {
                        props: { color: "error" },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.error.main,
                            color: (theme.vars || theme).palette.light.main,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.error.main, 0.8)
                            },
                        }),
                    },
                    {
                        props: { color: "success" },
                        style: ({ theme }) => ({
                            backgroundColor: (theme.vars || theme).palette.success.main,
                            color: (theme.vars || theme).palette.light.main,
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.success.main, 0.8)
                            },
                        }),
                    },
                ],
                '&:hover': {
                    boxShadow: "none",
                },
            })
        }
    }
}