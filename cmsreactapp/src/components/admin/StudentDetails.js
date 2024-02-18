import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StudentDetails(props) {
  
  const takeAction = () => {
    console.log(props.student.studentId)
    props.takeAction(props.student.studentId);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const card = (
    <CardContent sx={{ background: colors.grey[700] }}>
      <Typography
        sx={{ fontSize: 14 }}
        color={`${colors.primary[100]}`}
        gutterBottom
      >
        Student Details:
      </Typography>
      <Typography variant="h4" component="div">
        {props.student.name}
      </Typography>
      <Typography variant="h5">
        {/* {props.student.customerId}<br/> */}
        <br />
        {props.student.email}
        <br />
        {props.student.mobileNo}
        <br />
        <br />
        {props.student.dob}
        <br />
        <br />
        {props.student.courseName}
        <br />
        <br />
        {"Balance: "}
        {props.student.balance}
        <br />
      </Typography>
    </CardContent>
  );
  return (
    <Box display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight={"100vh"}>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      <Button
        variant="contained"
        sx={{
          backgroundColor:
            props.action === "display"
              ? colors.blueAccent[400]
              : colors.redAccent[400],
        }}
        onClick={takeAction}
      >
        {props.action === "display" ? (
          <span>
            <GroupIcon />
            &nbsp;Back to List
          </span>
        ) : (
          <span>
            <DeleteIcon />
            &nbsp;Delete
          </span>
        )}
      </Button>
    </Box>
    </Box>
  );
}
