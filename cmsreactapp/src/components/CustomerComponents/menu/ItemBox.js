import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { tokens } from "../../../theme";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


export default function ItemBox(props) {
    const url = "https://api.imgur.com/3/image/muFOrkC"
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [cartItem, setCartItem] = useState({...props.item,
    qtySelected: 0,
  });
  
//   useEffect(()=>{
//     async function fetchImg(){
//         //axiosget(url).then(data=>{console.log(data)})
//         const clientId = "2035f519d3a6d9c",
//                 auth = "Client-ID " + clientId;
     
//             // Making the post request
//             await fetch("https://api.imgur.com/3/image/muFOrkC", {
//                 // API Endpoint
//                 method: "GET", // HTTP Method
//                 headers: {
//                     // Setting header
//                     Authorization: auth,
//                     Accept: "application/json",
//                 },
//             })
//                 // Handling success
//                 .then(
//                     (res) =>
//                         console.log(res)
//                 )
//                 .catch(
//                     (err) => alert("Failed") && console.log(err)
//                 );
//       }
//       fetchImg();
//   },[])

//const [accessToken, setAccessToken] = useState('');
  //useEffect(()=>{
    // const authorizationCode = new URLSearchParams(window.location.search).get('code');

    // if (authorizationCode) {
    //   // Exchange authorization code for access token
    //   axios
    //     .post('https://cors-anywhere.herokuapp.com/https://api.imgur.com/oauth2/token', {
    //       client_id: '2035f519d3a6d9c',
    //       client_secret: 'd9f4b2bf87ea8a3db808ddc7f88d10abfdbcf7f4',
    //       grant_type: 'authorization_code',
    //       code: authorizationCode,
    //     })
    //     .then((response) => {
    //       const newAccessToken = response.data.access_token;
    //       console.log(newAccessToken);
    //       setAccessToken(newAccessToken);
    //     })
    //     .catch((error) => {
    //       console.error('Error exchanging authorization code:', error);
    //     });
    // }
    //axios.get(url,{headers:{Authorization :'Client-ID 2035f519d3a6d9c'}}).then(data=>console.log(data))
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
        <button onClick={increment} style={{
          backgroundColor: colors.greenAccent[400], width:'40px',
        }}><AddIcon /></button>
        &nbsp;&nbsp;
        <Typography variant="h4">{cartItem.qtySelected}</Typography>
        &nbsp;&nbsp;
        <button  onClick={decrement} style={{
          backgroundColor: colors.redAccent[400], width:'40px',
        }}><HorizontalRuleIcon/></button>
      </Grid>
    </Box>
  );
}
