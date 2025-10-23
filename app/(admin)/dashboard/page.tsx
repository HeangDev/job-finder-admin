"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import StatsCard from '@/components/ui/StatsCard';

export default function Dashboard() {
    return (
        <>
            <Box sx={{ marginBottom: "24px" }}>
                <Grid container spacing={3}>
                    <StatsCard
                        title="Customers"
                        value={3200}
                    />
                    <StatsCard
                        title="User"
                        value={1200}
                    />
                    <StatsCard
                        title="Expense"
                        value="$230,220"
                    />
                    <StatsCard
                        title="Income"
                        value="$230,220"
                    />
                </Grid>
            </Box>
            <Box sx={{ marginBottom: "24px" }}>

            </Box>
        </>
    )
}