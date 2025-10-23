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

import Button from '@mui/material/Button';

const rows = [
    {
        id: "#10421",
        img: "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/team-3.0ef0be95e6850814c79e.jpg",
        name: 'Sim Kimheang',
        phone: '(+855)11263262',
        date: '1 Nov, 10:20 AM',
        status: 'Canceled',
    },
    {
        id: "#10422",
        img: "",
        name: 'John Doe',
        phone: '(+855)966561101',
        date: '1 Nov, 10:53 AM',
        status: 'Paid',
    },
    {
        id: "#10423",
        img: "",
        name: 'Michael Mirra',
        phone: '(+855)966561101',
        date: '1 Nov, 11:13 AM',
        status: 'Paid',
    },
    {
        id: "#10424",
        img: "",
        name: 'Andrew Nichel',
        phone: '(+855)966561101',
        date: '1 Nov, 12:20 PM',
        status: 'Paid',
    },
    {
        id: "#10425",
        img: "",
        name: 'Sebastian Koga',
        phone: '(+855)966561101',
        date: '1 Nov, 1:40 PM',
        status: 'Paid',
    },
    {
        id: "#10426",
        img: "",
        name: 'Laur Gilbert',
        phone: '(+855)966561101',
        date: '1 Nov, 2:19 PM',
        status: 'Paid',
    },
    {
        id: "#10427",
        img: "",
        name: 'Iryna Innda',
        phone: '(+855)966561101',
        date: '1 Nov, 3:42 AM',
        status: 'Paid',
    },
    {
        id: "#10428",
        img: "",
        name: 'Arrias Liunda',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
    {
        id: "#10429",
        img: "",
        name: 'Rugna Ilpio',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
    {
        id: "#10430",
        img: "",
        name: 'Anna Landa',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
    {
        id: "#10431",
        img: "",
        name: 'Karl Innas',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
    {
        id: "#10432",
        img: "",
        name: 'Oana Kilas',
        phone: '(+855)966561101',
        date: '2 Nov, 9:32 AM',
        status: 'Paid',
    },
];

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
    { id: 'phone', label: 'phone' },
    { id: 'date', label: 'date' },
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

export default function UserPage() {
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
                    buttonText="Add User"
                    onButtonClick={handleOpen}
                />
            </Paper>

            <ModalComponent
                open={open}
                title="Add User"
                onClose={() => handleClose()}
            >
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Stack direction="column" sx={{ paddingX: "32px" }}>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Full Name</InputLabel>
                            <TextField size="small" placeholder="Full Name" {...register("name")}/>
                            {errors.name && (<FormHelperText error>{errors.name.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Email</InputLabel>
                            <TextField size="small" placeholder="example@domain.com" {...register("email")}/>
                            {errors.email && (<FormHelperText error>{errors.email.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ marginBottom: "22px" }}>
                            <InputLabel>Password</InputLabel>
                            <TextField type="password" size="small" placeholder="******" {...register("password")}/>
                            {errors.password && (<FormHelperText error>{errors.password.message}</FormHelperText>)}
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