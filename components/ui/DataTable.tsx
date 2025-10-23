"use client";

import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Icon } from "@iconify/react";

type Order = 'asc' | 'desc';

interface Column {
    id: string;
    label: string;
    numeric?: boolean;
    disablePadding?: boolean;
    render?: (row: any) => React.ReactNode;
    minWidth?: number;
}

interface DataTableProps {
    rows: any[];
    columns: Column[];
    pageSizeOptions?: number[];
    checkboxSelection?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
}

function getComparator<Key extends keyof any>(order: Order, orderBy: Key) {
    return order === 'desc'
        ? (a: any, b: any) => descendingComparator(a, b, orderBy)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

export default function DataTable ({
    rows,
    columns,
    pageSizeOptions = [10, 15, 20],
    buttonText,
    onButtonClick,
}: DataTableProps) {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>(columns[0]?.id || '');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pageSizeOptions[0]);
    const [visibleCols, setVisibleCols] = useState(columns.map((c) => c.id));

    const containerRef = useRef<HTMLDivElement>(null);

    const handleRequestSort = (property: string) => () => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const getRowId = (row: any) => row.id || row.name;

    const visibleRows = React.useMemo(() => {
        return [...rows]
            .sort(getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [rows, order, orderBy, page, rowsPerPage]);

    useEffect(() => {
    function handleResize() {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      let used = 0;
      const shown: string[] = [];

      for (const col of columns) {
        const w = col.minWidth || 120; // default 120px
        if (used + w <= containerWidth) {
          shown.push(col.id);
          used += w;
        } else {
          break; // stop adding when overflow
        }
      }

      setVisibleCols(shown);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

    return (
        <>
            <TableContainer ref={containerRef}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "24px",
                        width: "100%",
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <FormControl>
                            <TextField size="small" sx={{ width: "200px" }} placeholder="Search..."/>
                        </FormControl>
                        <Button variant="contained" size="small" color="secondary" onClick={onButtonClick}><Icon icon="solar:add-circle-outline" width={18} height={18} />{buttonText}</Button>
                    </Stack>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) =>
                                visibleCols.includes(column.id) && (
                                <TableCell
                                    key={column.id}
                                    align={column.numeric ? 'right' : 'left'}
                                    padding={column.disablePadding ? 'none' : 'normal'}
                                    sortDirection={orderBy === column.id ? order : false}
                                    onClick={handleRequestSort(column.id)}
                                    sx={{
                                        cursor: "pointer",
                                        minWidth: column.minWidth || 120,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography variant="caption"
                                            sx={(theme) => ({
                                                fontSize: "10px",
                                                fontWeight: 700,
                                                color: (theme.vars || theme).palette.text.secondary,
                                                textTransform: "uppercase",
                                                textAlign: "left",
                                                backgroundColor: "transparent",
                                                opacity: 0.7,
                                                userSelect: "none",
                                            })}
                                        >{column.label}</Typography>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                top: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "14px",
                                                height: "6px",
                                            }}
                                        >
                                            <Box
                                                sx={(theme) => ({
                                                    position: "absolute",
                                                    top: "-6px",
                                                    color:
                                                        orderBy === column.id && order === "asc"
                                                        ? (theme.vars || theme).palette.text.primary
                                                        : (theme.vars || theme).palette.text.secondary,
                                                    backgroundColor: "transparent",
                                                    opacity: orderBy === column.id && order === "asc" ? 1 : 0.4,
                                                    transition: "opacity 0.2s",
                                                })}
                                            >
                                                <Icon icon="solar:alt-arrow-up-bold" width={14} height={14} />
                                            </Box>
                                            <Box
                                                sx={(theme) => ({
                                                    position: "absolute",
                                                    top: 0,
                                                    color:
                                                        orderBy === column.id && order === "desc"
                                                        ? (theme.vars || theme).palette.text.primary
                                                        : (theme.vars || theme).palette.text.secondary,
                                                    backgroundColor: "transparent",
                                                    opacity: orderBy === column.id && order === "desc" ? 1 : 0.4,
                                                    transition: "opacity 0.2s",
                                                })}
                                            >
                                                <Icon icon="solar:alt-arrow-down-bold" width={14} height={14} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row) => {
                        const rowId = getRowId(row);
                            return (
                                <TableRow key={rowId}>
                                    {columns.map(
                                        (column) => visibleCols.includes(column.id) && (
                                            <TableCell
                                                key={column.id}
                                                align={column.numeric ? "right" : "left"}
                                                sx={{ minWidth: column.minWidth || 120 }}
                                            >
                                                {column.render ? column.render(row) : row[column.id]}
                                            </TableCell>
                                        )
                                    )}
                                </TableRow>
                            );
                        })}
                    </TableBody> 
                </Table>
                <Stack    
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "24px",
                    }}
                >
                    <Box>
                        <Typography
                            variant="caption"
                            sx={(theme) => ({
                                fontSize: "12px",
                                color: (theme.vars || theme).palette.text.secondary,
                                textTransform: "none"
                            })}
                        >{`Showing ${page * rowsPerPage + 1} to ${ Math.min((page + 1) * rowsPerPage, rows.length)} of ${rows.length} entries`}</Typography>
                    </Box>
                    <Box>
                        <Pagination
                            variant="outlined"
                            count={Math.ceil(rows.length / rowsPerPage)}
                            page={page + 1}
                            onChange={(_, newPage) => setPage(newPage - 1)}
                        />
                    </Box>
                </Stack>
            </TableContainer>
        </>
    )
} 