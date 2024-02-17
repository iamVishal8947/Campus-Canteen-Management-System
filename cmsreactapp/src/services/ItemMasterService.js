import axios from 'axios';
const baseUrl="http://localhost:9090/items"
class ItemService{
    constructor(){
        this.itemMasterDummy={itemId : 0, 
            itemName : "Pattice",
             itemPrice : 20, 
             itemCategory : "Snacks", 
             itemGenre : "NorthIndian", 
             itemImgLink : "imgLink", 
             totalQty : 200, 
             soldQty : 0};
    }
    getAllItems(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get("http://localhost:8080/items")
    }
    insertItem(item){
        console.log("in service add")
       //this.prodarr.push(item);
       //console.log(this.prodarr);
       return axios.post(baseUrl+"/item/"+item.pid,item)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteitem(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/item/"+pid)
    }
    getById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/item/"+id)
    }
    updateitem(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/item/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

}

export default new ItemService();