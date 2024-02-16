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