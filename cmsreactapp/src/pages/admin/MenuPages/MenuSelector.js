import React, {useEffect, useState} from "react";
import {Grid} from '@mui/material';
import ItemMasterTable from '../../../components/admin/menu/ItemMasterTable';
import ItemDailyTable from '../../../components/admin/menu/ItemDailyTable';
import ItemMasterService from "../../../services/ItemMasterService";
import ItemDailyService from "../../../services/ItemDailyService";
export default function MenuSelector() {
    const [items,setItems] = React.useState([]);
    //Fetch Items from backend, and set them acc to below 'selectedArr' [id-based]
    const [itemsData, setitemsData] = useState([]);
    const [selectedItemsData, setSelectedItemsData] = useState([]);
    const [dailyItemsData, setdailyItemsData] = useState([]);
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
  const filterSelectedItemsData = (selectedArr) => {
    const filteredItemsData = itemsData.filter(item => selectedArr.includes(item.id));
    console.log( filteredItemsData )
    setSelectedItemsData(filteredItemsData);
};
  // Fetch items data on component mount
  useEffect(() => {
    fetchitemsData();
  }, []); 
  const selectedItems = (selectedArr) => {
    console.log("selectedArr", selectedArr);
    filterSelectedItemsData(selectedArr);
};
const setFinalData = (finalData) => {
    console.log("----------------in finalData------------")
    console.log(finalData)

    finalData.forEach(element => {
        ItemDailyService.insertItemDaily(element).then((res)=>{
            console.log("successfully added element no : "+ element.id)
           console.log(res.data)
        })
        alert("Successfully added daily menu");
        window.location.reload();
    });
    
}


  return (
    <Grid container m={"10px"}>
        <Grid item xs={12} sm={6}>
            <ItemMasterTable selectedItems={selectedItems} items={items}/>
        </Grid>
        {/* <Grid item xs={12} sm={2}>
        </Grid> */}
        <Grid item xs={12} sm={6}>
            <ItemDailyTable selectedItems = {selectedItemsData} dailyItemsData = {dailyItemsData} setFinalData = {setFinalData}></ItemDailyTable>
            {/* Daily Menu table with quantities */}
        </Grid>
    </Grid>
  )
}
