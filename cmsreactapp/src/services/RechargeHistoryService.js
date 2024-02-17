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
    getAllRechargeHistorybyStudentId(id){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get("http://localhost:8080/recharge/students/"+id)
    }
   
}

export default new RechargeHistoryService();