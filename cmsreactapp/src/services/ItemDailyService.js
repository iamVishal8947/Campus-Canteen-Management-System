import axios from 'axios';
const baseUrl="http://localhost:9090/itemDailys"
class ItemDailyService{
    constructor(){
        this.itemDailyDummy={itemId : 1, item : { /* item properties*/ }, initialQty : 100, soldQty : 0};
    }
    getAllItemsDaily(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get("http://localhost:8282/itemDailys")
    }
    insertItemDaily(itemDaily){
        console.log("in item daily  service insert")
       //this.prodarr.push(itemDaily);
       //console.log(this.prodarr);
       console.log(itemDaily)
       const itemdailyfinalfinal = { initialQty : itemDaily.initialQty, soldQty : itemDaily.soldQty}
       console.log(itemdailyfinalfinal)
       return axios.post("http://localhost:8080/dailyitems/"+itemDaily.id,itemdailyfinalfinal)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteitemDaily(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/itemDaily/"+pid)
    }
    getById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/itemDaily/"+id)
    }
    updateitemDaily(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/itemDaily/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

}

export default new ItemDailyService();