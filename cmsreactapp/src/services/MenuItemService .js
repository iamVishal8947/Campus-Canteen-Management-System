
import vadapav from './vada_pav.jpg'
import idli from './idli.jpg'
import masaladosa from '../Assets/dosa.jpg'
import pavbhaji from '../Assets/pavbhaji.jpg'
import samosa1 from '../Assets/samosa.jpg'

const samosa  = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kitchensanctuary.com%2Fsamosa-recipe%2F&psig=AOvVaw1kGDdh8AbLhQFeo9APlnPU&ust=1708191723523000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICh5Ji0sIQDFQAAAAAdAAAAABAE";
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
    {
      "item_id": 3,
      "item_name": "Masala Dosa",
      "item_price": 30,
      "image_link": masaladosa,
      "item_time": "20",
      "total_qty": 75
    },
    {
      "item_id": 4,
      "item_name": "Pav Bhaji",
      "item_price": 25,
      "image_link": pavbhaji,
      "item_time": "25",
      "total_qty": 60
    },
    {
      "item_id": 5,
      "item_name": "Samosa",
      "item_price": 15,
      "image_link": samosa,
      "item_time": "12",
      "total_qty": 80
    }
  
    
  ];
  
  class MenuItemService {
    static getItems() {
      
      return menuItems;
    }
  }
  
  export default MenuItemService;
  