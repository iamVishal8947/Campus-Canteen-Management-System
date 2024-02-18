import React from 'react'
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { tokens } from "../../../theme";
import { mockData } from "./mockMenu";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import Header from "../common/Header";
import PostAddIcon from '@mui/icons-material/PostAdd';
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export default function ItemDailyTable(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [quantities, setQuantities] = React.useState({}); // State to store quantity values

  const handleQuantityChange = (event, id) => {
    const { value } = event.target;
    console.log(`Updating quantity for ID ${id} to ${value}`);
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: value // Update quantity for the corresponding ID
    }));
};

const addToDailyMenu = () => {
  //console.log("Selected rows:", rowSelectionModel);
  console.log("Quantities:", quantities);
  rowSelectionModel.forEach(rowId => {
      const quantity = quantities[rowId]; // Retrieve quantity for the rowId
      console.log(`ID: ${rowId}, Quantity: ${quantity}`);
  });

  const selectedItemsWithQuantities = Object.keys(quantities).map(id => ({
    id: parseInt(id),
    initialQty: parseInt(quantities[id]),
    soldQty : 0
}));

console.log("Selected items with quantities:", selectedItemsWithQuantities);
props.setFinalData(selectedItemsWithQuantities);
};

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
          headerName : "qty",
          field: "qty",
          renderCell: ({ row: { id } }) => {
              return(
                  <input 
                      type='number' 
                      placeholder='Enter qty' 
                      id={id} 
                      min={1} 
                      max={500}  
                      onChange={(event) => handleQuantityChange(event, id)} // Update quantity onChange
                  />
              )
          }
      },
  ];

  return (
      <Box m="20px">
          <Header
              title="Daily items"
              subtitle="Menu items for today"
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
                  rows={props.selectedItems}
                  columns={colStructure}
                  checkboxSelection 
                  pageSize={5}
                  autoHeight
                  onSelectionModelChange={(newSelection) => {
                      setRowSelectionModel(newSelection.selectionModel);
                  }}
                  selectionModel={rowSelectionModel}
              />
          </Box>
          <Grid container>
              <Grid item xs={12} sm={6}>
                  <Button
                      variant="contained"
                      sx={{
                          backgroundColor: colors.blueAccent[400],
                      }}
                      onClick={addToDailyMenu}
                  >
                      <EditIcon />
                      &nbsp;&nbsp;Confirm Menu
                  </Button>
                  <div></div>
              </Grid>
          </Grid>
      </Box>
  );
}
