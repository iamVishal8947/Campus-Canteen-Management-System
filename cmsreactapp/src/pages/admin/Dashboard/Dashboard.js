import React from 'react'
import Header from '../../../components/admin/common/Header'
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import MenuList from '../../../components/admin/Dashboard/MenuList';
import StudentData from '../../../components/admin/Dashboard/StudentData';

export default function Dashboard() {
  return (
    <Box m="20px">
        <Header title = "Dashboard" subtitle = "Welcome to your dashboard"></Header>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <StudentData></StudentData>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div><MenuList></MenuList></div>
            
          </Grid>
        </Grid>
    </Box>
  ) 
}
