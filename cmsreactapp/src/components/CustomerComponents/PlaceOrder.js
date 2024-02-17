import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Box, IconButton, Typography, useTheme, Button, Grid } from "@mui/material";
import { tokens } from "../../theme";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation, useNavigate } from "react-router-dom";
export default function PlaceOrder() {
   const location = useLocation();
   const orderData = location.state.order; 
   const orderData1=  [{ id: 1 ,order : "idli" },{ id: 2 ,order : "dosa" }]
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
  const card = (
    <CardContent sx={{ background: colors.grey[700] }}>
      <Typography
        sx={{ fontSize: 14 }}
        color={`${colors.primary[100]}`}
        gutterBottom
      >
        Student Name:
      </Typography>
      <Typography variant="h5">{location.state["name"]}</Typography>
      <br/>
      <Typography
        sx={{ fontSize: 14 }}
        color={`${colors.primary[100]}`}
        gutterBottom
      >
        Order Details:
      </Typography>
      {orderData1.map((cart) => (
        <Typography variant="h5">
          Item : {cart.order}&nbsp;&nbsp; Quantity : {cart.qtyOrdered}
        </Typography>
      ))}
      <br/>
      
      <Typography
        sx={{ fontSize: 14 }}
        color={`${colors.primary[100]}`}
        gutterBottom
      >
        Amount :
      </Typography>
      <Typography variant="h5">{location.state["amount"]}&nbsp;&#8377;</Typography>
    </CardContent>
  );
  return (
    <Box display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight={"100vh"}>
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined">{card}</Card>
     
        
     
    
    </Box>
    {/* {{orderData}} */}
    </Box>
  );
    }
