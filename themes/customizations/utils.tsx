import type { Theme, Components } from '@mui/material'

export const utilsCustomizations: Components<Theme> = {
    MuiModal: {
        styleOverrides: {
            root: {
                margin: "8px"
            }
        }
    },
}