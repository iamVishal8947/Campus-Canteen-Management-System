import React from 'react'
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../../theme";
import { mockData1 } from "./mockData1";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import Header from "../../../components/admin/common/Header";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function CompletedOrderTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const colStructure = [
      {
        headerName: "Order Id",
        field: "orderId",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
          headerName: "Person Name",
          field: "name",
          type: "text",
          headerAlign: "center",
          align: "center",
        },
      {
        headerName: "Order Qty",
        field: "qty",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Amount",
        field: "amount",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
    ];
  
    const displayOrder=(params, event, details)=>{
      console.log(mockData1.find((item)=> item.orderId === parseInt(params.id)))
      navigate("/admin/orders/display/" + params.id,{state : mockData1.find((item)=> item.orderId === parseInt(params.id))});
    }
  
    return (
      <Box m="20px">
        <Header
          title="Pending Orders"
          subtitle="Pending Orders for today"
        ></Header>
        <Box
          m="40px 0 0 0"
          height="75vh"
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
          getRowId={(row) => row.orderId}
            rows={mockData1}
            columns={colStructure}
            onRowClick={displayOrder}
           
            initialState={{
              ...mockData1.initialState,
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          ></DataGrid>
        </Box>
      </Box>
    );
}
