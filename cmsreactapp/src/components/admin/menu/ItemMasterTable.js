
import React, {useEffect, useState} from "react";
import { Box, Typography, useTheme, Button , Grid} from "@mui/material";
import { tokens } from "../../../theme";
import { mockData } from "./mockMenu";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import Header from "../common/Header";
import PostAddIcon from '@mui/icons-material/PostAdd';
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import StudentService from "../../../services/StudentService";
import ItemMasterService from "../../../services/ItemMasterService";

export default function ItemMasterTable(props) {
  const [itemsData, setitemsData] = useState([]);

  // Function to fetch items data
  const fetchitemsData = async () => {
    try {
      console.log("in fetchItems data function")
      const response = await ItemMasterService.getAllItems();
      console.log(response.data)
      setitemsData(response.data); // Update state with fetched data
      console.log(itemsData);
      
    } catch (error) {
      console.error('Error fetching items data:', error);
    }
  };
  // Fetch items data on component mount
  useEffect(() => {
    fetchitemsData();
  }, []); 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
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
      field: "itemName",
      headerAlign: "center",
      align: "center",
      flex:1
    },
    {
      headerName: "Item Price",
      field: "itemPrice",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex:1
    },
    {
      headerName: "Item Category",
      field: "itemCategory",
      type: "text",
      headerAlign: "center",
      align: "center",
    },
  ];

  const addItem=()=>{
    navigate("/admin/menu/add")
  }

  const displayItem=(params, event, details)=>{
    navigate("/admin/menu/display/" + params.id)
  }

  const addToDailyMenu =() =>{
    
    console.log(rowSelectionModel)
    props.selectedItems(rowSelectionModel);
  }

  return (
    <Box m="20px">
      <Header
        title="Menu Items in Inventory"
        subtitle="All menu items previously registered"
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
          rows={itemsData}
          columns={colStructure}
          onRowClick={displayItem}
          checkboxSelection
          disableRowSelectionOnClick {...mockData}
          initialState={{
            ...mockData.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }} 
          pageSizeOptions={[5, 10, 25]}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
        ></DataGrid>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={6}>
        <Button
        variant="contained"
        sx={{
          backgroundColor: colors.blueAccent[400],
        }}
        onClick={addItem}
      >
        <PostAddIcon />
        &nbsp;&nbsp;Add Item
      </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button
        variant="contained"
        sx={{
          backgroundColor: colors.blueAccent[400],
        }}
        onClick={addToDailyMenu}
      >
        <EditIcon />
        &nbsp;&nbsp;Update Today's Menu
      </Button>
      <div></div>
        </Grid>
      </Grid>
    </Box>
  );
}
