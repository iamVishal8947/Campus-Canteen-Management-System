import axios from 'axios';
const baseUrl="http://localhost:8080"
class StudentService{
    constructor(){
        
    }
    getAllStudents(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get(baseUrl)
    }
    insertStudent(student){
        console.log("in insert Student axios method ")
       //this.prodarr.push(student);
       //console.log(this.prodarr); 
       const student1 = {name: "A b",
       email: "xyz@gmail.com",
       pwd: "1234",
       mob: "9999999999",
       dob: "",
       course: "DAC",
       balance : 0}
       return axios.post("http://localhost:8080/student/register",student1)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteStudent(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/student/"+pid)
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