import React from 'react'
import OrderDetails from '../../../components/admin/order/OrderDetails'
import { Box } from "@mui/material";

export default function DisplayOrder() {
    const completeOrder=(id)=>{
        console.log("Set order status as completed and return to pending items")
    }
  return (
    <Box>
        <OrderDetails action="display" takeAction={completeOrder}></OrderDetails>
    </Box>
  )
}
