"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { Icon } from "@iconify/react";

interface ModalComponentProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    width?: number | string;
    children?: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
    return (
        <>
            <Modal
                open={props.open}
                onClose={props.onClose}
            >
                <Box
                    sx={(theme) => ({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: {xs: "100%", md: 650},
                        borderRadius: (theme.vars || theme).shape.borderRadius,
                        backgroundColor: (theme.vars || theme).palette.background.paper,
                    })}
                >
                    <Stack
                        direction="row"
                        sx={(theme) => ({
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            padding: "22px",
                            borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                        })}
                    >
                        <Typography variant="h4" sx={{
                            fontSize: 20,
                            fontWeight: 600,
                        }}>{props.title}</Typography>
                        <IconButton onClick={props.onClose}><Icon icon="ri:close-fill" width={22}/></IconButton>
                    </Stack>
                    <Box
                        sx={{
                            marginY: "22px",
                            paddingX: "16px",
                            paddingY: "22px"
                        }}
                    >
                        {props.children}
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default ModalComponent