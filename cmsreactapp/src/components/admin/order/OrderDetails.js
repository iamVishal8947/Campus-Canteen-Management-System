import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Box, IconButton, Typography, useTheme, Button, Grid } from "@mui/material";
import { tokens } from "../../../theme";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderDetails(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const takeAction = () => {
    props.takeAction(location.state.orderId);
  };
  const baseUrl = "/admin/orders/"
  const goBack =() =>{
    location.state["orderStatus"] === "PENDING" ?  navigate(baseUrl + "pending") : navigate(baseUrl + "completed") ;
  }

  let carts = location.state["carts"] === null ? [] : location.state["carts"]; //carts is an array of objects containing the cart items for each student in a class
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
      {carts.map((cart) => (
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
      <Grid container>
      {
        location.state["orderStatus"] === "PENDING" ?
        <Grid item sm={6}>
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
              <AssignmentTurnedInIcon />
              &nbsp;Mark Completed
            </span>
          ) : (
            <span>
              <DeleteIcon />
              &nbsp;Delete Order
            </span>
          )}
        </Button>
        </Grid>
        :null
      }
        <Grid item sm={6}>
      <Button  variant="contained"
        sx={{ backgroundColor: colors.blueAccent[400]}} onClick={goBack}>Back to List</Button>
        </Grid>
    </Grid>
    </Box>
    </Box>
  );
}
