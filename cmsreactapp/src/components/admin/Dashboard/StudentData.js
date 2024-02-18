

import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from '../../../theme';
import StudentService from "../../../services/StudentService";

export default function StudentData() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => { 
    StudentService.getStudentCount()
      .then((response) => setStudentCount(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box bgcolor={colors.primary[600]} alignContent={'center'} height={'250px'}>
      <Typography variant="h4" align='center'>Student Data:</Typography><br/><br/><br/><br/>
      <Typography variant="h5" align="center">Number of students registered:<h2> {studentCount}</h2>  </Typography>
    </Box>
  );
}
