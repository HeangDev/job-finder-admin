import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface StatsCardProps {
    title: string;
    value: number | string;
}

const StatsCard: React.FC<StatsCardProps> = (props) => {
    return (
        <>
            <Grid size={{ xs: 12, sm: 3 }}>
                <Paper elevation={0}>
                    <Box
                        sx={{
                            padding: "16px",
                            color: "rgb(23, 23, 23)",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            opacity: 1,
                        }}
                    >
                        <Box
                            sx={{
                                marginBottom: "4px",
                                lineHeight: 1,
                                color: "rgb(23, 23, 23)",
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                opacity: 1,
                            }}
                        >
                            <Typography variant="button" sx={{
                                color: "rgb(115, 115, 115)",
                                lineHeight: 0,
                                textTransform: "capitalize",
                                textDecoration: "none",
                                verticalAlign: "unset",
                                opacity: 1
                            }}>{props.title}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5">{props.value}</Typography>
                            <Typography variant="button" sx={(theme) => ({ fontWeight: 700, color: (theme.vars || theme).palette.success.main })}>
                                +55%
                                <Typography variant="button" sx={{
                                    color: "rgb(115, 115, 115)",
                                    lineHeight: 0,
                                    textTransform: "capitalize",
                                    textDecoration: "none",
                                    verticalAlign: "unset",
                                    opacity: 1
                                }}>since last month</Typography>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}

export default StatsCard