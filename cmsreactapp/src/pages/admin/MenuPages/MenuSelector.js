import React from 'react'
import {Grid} from '@mui/material';
import ItemMasterTable from '../../../components/admin/menu/ItemMasterTable';
import ItemDailyTable from '../../../components/admin/menu/ItemDailyTable';
export default function MenuSelector() {
    const [items,setItems] = React.useState([]);
    //Fetch Items from backend, and set them acc to below 'selectedArr' [id-based]
    const selectedItems = (selectedArr) => {
        console.log(selectedArr);
    }
  return (
    <Grid container m={"10px"}>
        <Grid item xs={12} sm={6}>
            <ItemMasterTable selectedItems={selectedItems} items={items}/>
        </Grid>
        {/* <Grid item xs={12} sm={2}>
        </Grid> */}
        <Grid item xs={12} sm={6}>
            <ItemDailyTable selectedItems = {items}></ItemDailyTable>
            {/* Daily Menu table with quantities */}
        </Grid>
    </Grid>
  )
}
