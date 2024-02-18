import React, { useState, useEffect } from 'react'
import { Box, Typography, useTheme, Button , Grid} from "@mui/material";
import { tokens } from "../../../theme";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import ItemBox from './ItemBox';
import {itemData} from './itemData'

export default function MenuGrid() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [cart,setCart] = useState([]);
    const [netPrice, setNetPrice] = useState(0);



    const placeOrder = (e)=>{
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      e.preventDefault();
      if (netPrice === "") {
        alert("please enter amount");
      } else {
        // Check if Razorpay constructor is available
        if (window.Razorpay) {
          var options = {
            key: "rzp_test_AtG9VVI9mbh1sa",
            key_secret: "yoRzFyCuMHwMGWR31mvB6ldZ",
            amount: netPrice * 100,
            currency: "INR",
            name: "CMS",
            description: "Total bill payment",
            handler: function (response) {
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name: "name",
              email: "abc@gmail.com",
              contact: "0000000000",
            },
            notes: {
              address: "Cdac Acts Pune",
            },
            theme: {
              color: "#3399cc",
            },
          };
          var pay = new window.Razorpay(options);
          pay.open();
        } else {
          alert("Razorpay SDK not loaded. Please wait and try again.");
        }
      }
    }

    const updateCart = (cartItem) => {
        // Check if the item is already in the cart
        const existingItem = cart.find((item) => item.id === cartItem.id);
      
        if (existingItem) {
          // If the item exists in the cart, update its quantity
          const updatedCart = cart.map((item) =>
            item.id === cartItem.id ? { ...item, qtySelected: cartItem.qtySelected } : item
          );
          const nonNullCart = updatedCart.filter((items)=>items.qtySelected!==0)
          setCart(nonNullCart);
        } else {
          // If the item is not in the cart, add it to the cart
          setCart([...cart, cartItem]);
        }
    //   if(cart.length!==0){
    //     const totalCost = cart.reduce((accumulator,item)=>accumulator + parseInt(item.qtySelected)*parseInt(item.price),0);
    //     setNetPrice(totalCost);
    //   }
      };

      useEffect(()=>{
        if(cart.length!==0){
            const totalCost = cart.reduce((accumulator,item)=>accumulator + parseInt(item.qtySelected)*parseInt(item.price),0);
            setNetPrice(totalCost);
          }
        console.log("Netprice: " + netPrice)
      },[cart])
    //   useEffect( ()=>{
    //     if(cart.length!==0){
    //         const netPrice = cart.reduce((accumulator,item)=>accumulator + item.qtySelected*item.price);
    //     console.log(netPrice)
    //     }
    //   },[cart])

    const colStructure = [
        {
          headerName: "Item Id",
          field: "id",
          type: "number",
          headerAlign: "left",
          align: "left",
          flex: 1
        },
        {
          headerName: "Item Name",
          field: "name",
          headerAlign: "center",
          align: "center",
          flex:1
        },
        {
          headerName: "Item Price",
          field: "price",
          type: "number",
          headerAlign: "left",
          align: "left",
          flex:1
        },
        {
          headerName: "Item Qty",
          field: "qtySelected",
          type: "text",
          headerAlign: "center",
          align: "center",
        },
      ];

  return (
    <Box>
    <Grid container>
        {itemData.map(item=><Grid item sm={4}>
            <ItemBox item={item} updateCart={updateCart}></ItemBox>
        </Grid>)}
    </Grid>
    <Box>
    <Grid container>
    <Grid item sm={10}>
    <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        
        <DataGrid
          rows={cart}
          columns={colStructure}
          initialState={{
            ...cart.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }} 
          pageSizeOptions={[5, 10, 25]}
        ></DataGrid>
      </Box>
      </Grid>
      <Grid item sm={2} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box  m="40px 0 0 0">
        <Typography variant='h4'>Total Price : {netPrice}</Typography>
        <Button type='button' variant='contained' onClick={placeOrder} sx={{
          backgroundColor: colors.greenAccent[400],color:colors.grey[700], width:'auto',
        }}>Place Order</Button>
        </Box>
      </Grid>
      </Grid>
    </Box>
    </Box>
  )
}
