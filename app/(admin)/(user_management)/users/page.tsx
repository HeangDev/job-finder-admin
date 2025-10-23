import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

export default function UserPage() {
    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "16px"
                }}
            >
                <Button variant="contained" size="small">New Customer</Button>
            </Stack>
            <Paper elevation={0}>
                
            </Paper>
        </>
    )
}