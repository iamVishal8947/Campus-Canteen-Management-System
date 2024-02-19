import React, { useEffect, useState } from 'react'
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme.js";
import { mockData1 } from "../../pages/admin/orderPages/mockData1.js";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import Header from "../../../src/components/admin/common/Header.js";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import RechargeHistoryService from '../../services/RechargeHistoryService.js';
import { useNavigate } from "react-router-dom";

export default function RechargeHistoryTable() {
    const [rechargeHistory,setRechargeHistory] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const colStructure = [
      {
        headerName: "Transaction Id",
        field: "transactionId",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      
      {
        headerName: "Amount Added",
        field: "amountAdded",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Time Stamp",
        field: "timeStamp",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Student Id",
        field: "studentId",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
    ];
    
    useEffect(() => {
   
           RechargeHistoryService.getAllRechargeHistorybyStudentId(Number(localStorage.getItem("username"))).then((res) => {
            // console.log("ok")
             console.log("res.data :"+res.data)
            console.log("recharge History ok")
            
            setRechargeHistory([...res.data])
          })
          .catch((err) => {
            alert(err.response?.data || err.message);
          });
        }
      ,[]  );
          
    
  
    return (
      <Box m="20px">
        <Header
          title="Recharge History"
          subtitle=""
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
          getRowId={(row) => row.transactionId}
            rows={rechargeHistory}
            columns={colStructure}
            // onRowClick={displayOrder}
           
            initialState={{
              ...rechargeHistory.initialState,
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          ></DataGrid>
        </Box>
      </Box>
    );
}