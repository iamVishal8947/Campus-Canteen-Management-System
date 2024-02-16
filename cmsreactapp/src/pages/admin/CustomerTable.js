import React , {useMemo, useEffect, useState} from 'react'
import MockData from '../../Assets/CT_MockData.json'
import StudentService from '../../services/StudentService'
import TableColumnFilter from '../../components/common/TableColumnFilter'
import { CustomerTableColumns } from '../../components/admin/CustomerTableColumns'
import TableComponent from '../../components/common/TableComponent'

export default function CustomerTable1() {
  //const studentData = StudentService.getAllStudents(); //new added student from backend
    

    // const columns = useMemo(()=>CustomerTableColumns,[]) 

    // const getStudents = () =>{StudentService.getAllStudents().then((response) => {
     
    //   console.log("in get Students")
    //   return response.data.token;
    //   })
    //   .catch((error) => {
    //       console.log(error);
    //   }) };

    //   console.log(getStudents)
    // const data = useMemo(()=> MockData ,[])
    //-----------------------------------------------

    const columns = useMemo(() => CustomerTableColumns, []);

  // State to hold the student data
  const [studentsData, setStudentsData] = useState([]);

  // Function to fetch students data
  const fetchStudentsData = async () => {
    try {
      const response = await StudentService.getAllStudents();
      setStudentsData(response.data); // Update state with fetched data
      console.log(studentsData);
      
    } catch (error) {
      console.error('Error fetching students data:', error);
    }
  };

  // Fetch students data on component mount
  useEffect(() => {
    fetchStudentsData();
  }, []); 
    // console.log("data "+data);
  return (
    <div>
      {/* Render TableComponent only when studentsData is not empty */}
      {studentsData.length > 0 && (
        <TableComponent colStructure={columns} data={studentsData} filterClass={TableColumnFilter} />
      )}
    </div>
  )
}
