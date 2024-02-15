import axios from 'axios';
const baseUrl="http://localhost:8080/students"
class StudentService{
    constructor(){
        
    }
    getAllStudents(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get(baseUrl)
    }
    insertStudent(student){
        console.log("in service add")
       //this.prodarr.push(student);
       //console.log(this.prodarr);
       return axios.post(baseUrl+"/student/"+student.pid,student)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
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