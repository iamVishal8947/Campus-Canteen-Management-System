import React from 'react'
import Header from '../../../components/admin/common/Header'
import { Box } from "@mui/material";
import SideBar from '../../../components/admin/common/SideBar';
export default function Dashboard() {
  return (
    <Box m="20px">
        <SideBar/>
        <Header title = "Dashboard" subtitle = "Welcome to your dashboard"></Header>
    </Box>
  ) 
}
