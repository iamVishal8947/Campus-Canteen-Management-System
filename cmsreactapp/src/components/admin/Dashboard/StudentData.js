import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { tokens } from '../../../theme';

export default function StudentData() {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const studentCount = 100;
  return (
    <Box  bgcolor={colors.primary[600]} alignContent={'center'}>
        <Typography variant="h4" align='center'>Student Data:</Typography>
        <Typography variant="h5">Number of students registered: {studentCount} </Typography>
    </Box>
  )
}
