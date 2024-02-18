import axios from 'axios';
const baseUrl="http://localhost:8080"
class StudentService{
    constructor(){
          }
    getAllStudents(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get("http://localhost:8080/admin/students")
    }
    insertStudent(student){
        console.log("in insert Student axios method ")
       //this.prodarr.push(student);
       //console.log(this.prodarr); 
       const student1 = {
        name: "Studentnew",
        studentId: 0,
        email: "new@new.com",
        password: "1234",
        mobileNo: "9999999990",
        balance: 0,
        dob: "2000-02-15",
        courseName: "DAC"
      }
       return axios.post("http://localhost:8080/student/register",student)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteStudent(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/student/"+pid)
    }
    getBalance(id){
      return axios.get("http://localhost:8080/student/"+id+"/balance");
    }
    setBalance(data){
      // var existingAmount = 0;
      console.log(data.id)
      this.getBalance(data.id).then((res) => {
         // console.log("ok")
         // console.log("res.data :"+res.data)
         const existingAmount = res.data;
            const newAmount =parseInt(existingAmount)  +parseInt(data.addAmount)  ;
            console.log("data.id: " + data.id + ", new amount: " + newAmount);
            const requestBody = { "value": newAmount };
            return axios.put("http://localhost:8080/student/" + data.id + "/balance",requestBody);
       })
       .catch((err) => {
         alert(err.response?.data || err.message);
       });
      // console.log(existingBalance)
      // const newAmount = existingAmount + data.addAmount;
      // console.log("data.id : " +data.id + "new ammount : " + newAmount)
      //  return axios.put("http://localhost:8080/student/" + data.id+"/balance",existingAmount);
    }
    getById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/student/"+id)
    }
    updateStudent(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/student/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

}

export default new StudentService();