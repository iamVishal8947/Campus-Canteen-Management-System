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
    changePassword(id,password){
      console.log(id)
      console.log(password)

       return axios.put("http://localhost:8080/student/changepassword/"+id,password)

    }
    insertStudent(student){
        console.log("in insert Student axios method ")
        student.courseName = "DAC";
        student.password =String( student.dob)
         // student.studentId = 0;
      console.log(student)
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
       return axios.post("http://localhost:8080/admin/register/student",student)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteStudent(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       console.log("pid in Student Service" + pid)
       return axios.delete(baseUrl+"/student/"+pid)
    }
    getBalance(id){
      return axios.get("http://localhost:8080/student/"+id+"/balance");
    }
    setBalance(data){
      console.log("in set Balance ___________________++++++++++++++++=============")
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
       }
    getById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/student/"+id)
    }
    updateStudent(stud){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/student/"+stud.studentId,stud)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }
    login(studentCredentials){

      // const std = {
      //    userName : "ac@gmail.com",
      //    password : "2000-02-18"
      // }
      return axios.post("http://localhost:8080/student/login",studentCredentials)
    }
    getStudentByEmail(email){

      return axios.get("http://localhost:8080/student/email/"+email)
    }

    getStudentCount(){

      return axios.get("http://localhost:8080/admin/totalstudents")
    }
    
    setBalanceAfterPayByWallet(id,amount){
      var requestBody;
      this.getBalance(id).then((res) => {
        // console.log("ok")
        // console.log("res.data :"+res.data)
        
        console.log("in set balance wallet")
          const existingAmount = res.data;
           const newAmount =parseInt(existingAmount)- parseInt(amount)  ;
           console.log("data.id: " + id + ", new amount: " + newAmount);
            requestBody = { "value": newAmount };
           alert("Payment succesfull using Wallet\n Remaining Balance : "+newAmount)
           window.location.reload();
           return axios.put("http://localhost:8080/student/" + id + "/balance",requestBody);
      })
      .catch((err) => {
        alert(err.response?.data || err.message);
      })
      
    }
}

export default new StudentService();