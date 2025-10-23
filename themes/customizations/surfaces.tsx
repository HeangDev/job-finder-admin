import type { Theme, Components } from '@mui/material'

export const surfacesCustomizations: Components<Theme> = {
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }) => {
                return {
                    top: "12px",
                    display: "grid",
                    alignItems: "center",
                    minHeight: "54px",
                    padding: 8,
                    borderRadius: "12px",
                    backgroundColor: (theme.vars || theme).palette.background.paper
                }
            }
        }
    },
    MuiToolbar: {
        styleOverrides: {
            root: ({ theme }) => {
                return {
                    justifyContent: "space-between",
                    minHeight: "auto",
                    padding: 0,
                    [theme.breakpoints.up("sm")]: {
                        minHeight: "auto",
                        padding: 0
                    },
                }
            }
        }
    }
}