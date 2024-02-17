import React from 'react'
import OrderDetails from '../../../components/admin/order/OrderDetails'
import { Box } from "@mui/material";

export default function DeleteOrder() {
    const cancelOrder=(id)=>{
        console.log("Delete order with id and refund money")
    }
  return (
    <Box>
        <OrderDetails action="delete" takeAction={cancelOrder}></OrderDetails>
    </Box>
  )
}
