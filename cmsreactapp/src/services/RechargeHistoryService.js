import axios from 'axios';
const baseUrl="http://localhost:9090/rechargeHistorys"
class RechargeHistoryService{
    constructor(){
        this.rechargeHistoryDummy = {
            transactionId: null, // This will be automatically generated on the backend
            timeStamp: new Date().toISOString(), // Current timestamp
            amountAdded: 0, 
            student: {
              // Details of the student associated with the recharge history
              // This should match the structure of your Student entity
              // For example:
              studentId: null,
              // Other properties of Student
            }
          };
    }
    getAllRechargeHistorys(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get("http://localhost:8282/rechargeHistorys")
    }
    insertRechargeHistory(rechargeHistory){
        console.log("in service add")
       //this.prodarr.push(rechargeHistory);
       //console.log(this.prodarr);
       return axios.post(baseUrl+"/rechargeHistory/"+rechargeHistory.pid,rechargeHistory)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleterechargeHistory(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/rechargeHistory/"+pid)
    }
    getById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/rechargeHistory/"+id)
    }
    updaterechargeHistory(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/rechargeHistory/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

}

export default new RechargeHistoryService();