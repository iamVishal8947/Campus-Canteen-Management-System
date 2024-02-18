import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { tokens } from "../../../theme";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ImageOnLoad from 'react-image-onload';


export default function ItemBox(props) {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [cartItem, setCartItem] = useState({...props.item,
    qtySelected: 0,
  });
  
//   useEffect(()=>{
//     axios.get(props.item.img_link).then(data=>{console.log(data)})
//   },[])

  useEffect(()=>{
    props.updateCart(cartItem);
  },[cartItem])

  const increment = () => {
    if (cartItem.qtySelected < props.item.qty) {
      setCartItem({ ...cartItem, qtySelected: cartItem.qtySelected + 1 });
    }
  };
  const decrement = () => {
    if (cartItem.qtySelected > 0) {
      setCartItem({ ...cartItem, qtySelected: cartItem.qtySelected - 1 });
    }
  };
  return (
    <Box m="10px">
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography variant="h5">{props.item.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div id="imageHolder">
            <img  src={props.item.img_link} style={{height:"120px",width:"200px",paddingLeft:"50px"}}></img>

          </div>
          <br />
          <Typography variant="h5">Item price: {props.item.price}&#8377;</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" onClick={increment} sx={{
          backgroundColor: colors.greenAccent[400], width:'20px',
        }}><AddIcon /></Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          {cartItem.qtySelected}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" onClick={decrement} sx={{
          backgroundColor: colors.redAccent[400], width:'20px',
        }}><HorizontalRuleIcon/></Button>
        </Grid>
      </Grid>
    </Box>
  );
}
