
import vadapav from './vada_pav.jpg'
import idli from './idli.jpg'
const menuItems = [
    {
      item_id: 1,
      item_name: "Vadapav",
      item_price: 10,
      image_link: vadapav,
      item_time: "10",
      total_qty: 100
    },
    {
      item_id: 2,
      item_name: "Idli",
      item_price: 20,
      image_link: idli,
      item_time: "15",
      total_qty: 50
    },
    // Add more items as needed
  ];
  
  class MenuItemService {
    static getItems() {
      
      return menuItems;
    }
  }
  
  export default MenuItemService;
  