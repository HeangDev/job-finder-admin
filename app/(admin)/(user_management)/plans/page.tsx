"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import { Icon } from "@iconify/react";

import DataTable from '@/components/ui/DataTable';
import ModalComponent from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema, UserFormData } from '@/schemas/userSchema';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Button from '@mui/material/Button';

const rows = []

const columns = [
    { id: 'id', label: 'id' },
    {
        id: 'name',
        label: 'Name',
        render: (row: any) => (
        <Stack direction="row" spacing={2} alignItems="center">
            {row.img ? (
                <Avatar alt={row.name} src={row.img} />
            ) : (
                <Avatar
                    sx={(theme) => ({
                        fontSize: "12px",
                        fontWeight: 600,
                        color: (theme.vars || theme).palette.text.primary,
                        backgroundColor: (theme.vars || theme).palette.background.default
                    })}
                >{row.name.charAt(0)}</Avatar>
            )}
            <Box>
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontSize: "12px"
                    }}
                >
                    {row.name}
                </Typography>
            </Box>
        </Stack>
        )
    },
    { id: 'description', label: 'description' },
    { id: 'price', label: 'price' },
    { id: 'duration_days', label: 'duration days' },
    { id: 'status', label: 'status' },
    {
        id: 'action',
        label: 'Action',
        render: (row: any) => (
            <Stack sx={{ alignItems: "center", flexFlow: "nowrap", gap: 1 }}>
                <IconButton><Icon icon="solar:pen-2-bold-duotone"/></IconButton>
                <IconButton><Icon icon="solar:trash-bin-minimalistic-bold"/></IconButton>
            </Stack>
        )
    },
];

export default function PlanPage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const { register, handleSubmit, reset, clearErrors, formState: { errors, isSubmitting } } = useForm<UserFormData>({
        resolver: yupResolver(userSchema),
    });

    const handleClose = () => {
        setOpen(false);
        reset();
        clearErrors();
    }

    const onSubmit = async (data: UserFormData) => {
        console.log("✅ Form Data:", data);
        // Example: send to API
        // await fetch("/api/register", { method: "POST", body: JSON.stringify(data) });
    };

    return (
        <>
            <Paper elevation={0}>
                <DataTable
                    rows={rows}
                    columns={columns}
                    buttonText="Add Plans"
                    onButtonClick={handleOpen}
                />
            </Paper>

            <ModalComponent
                open={open}
                title="Add Plans"
                onClose={() => handleClose()}
            >
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Stack direction="column" sx={{ paddingX: "32px" }}>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Plans Name</InputLabel>
                            <TextField size="small" placeholder="Full Name" {...register("name")}/>
                            {errors.name && (<FormHelperText error>{errors.name.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Description</InputLabel>
                            <TextareaAutosize minRows={5} placeholder="example@domain.com"/>
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Price</InputLabel>
                            <TextField size="small" placeholder="example@domain.com" {...register("email")}/>
                            {errors.email && (<FormHelperText error>{errors.email.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Duration Day</InputLabel>
                            <TextField size="small" placeholder="example@domain.com" {...register("email")}/>
                            {errors.email && (<FormHelperText error>{errors.email.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Duration Day</InputLabel>
                            <TextField size="small" placeholder="example@domain.com" {...register("email")}/>
                            {errors.email && (<FormHelperText error>{errors.email.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Features</InputLabel>
                            <TextareaAutosize minRows={5} placeholder="example@domain.com"/>
                        </FormControl>
                    </Stack>
                    <Stack direction="row" sx={{ justifyContent: "center", alignItems: "center", paddingTop: "32px", gap: 2 }}>
                        <Button variant="contained" size="small" color="secondary" onClick={handleClose}>Discard</Button>
                        <Button type="submit" variant="contained" size="small" color="primary" disabled={isSubmitting}>Submit</Button>
                    </Stack>
                </form>
            </ModalComponent>
        </>
    )
}