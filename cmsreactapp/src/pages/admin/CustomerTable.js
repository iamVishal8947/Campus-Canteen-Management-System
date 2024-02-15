import React , {useMemo} from 'react'
import MockData from '../../Assets/CT_MockData.json'
import StudentService from '../../services/StudentService'
import TableColumnFilter from '../../components/common/TableColumnFilter'
import { CustomerTableColumns } from '../../components/admin/CustomerTableColumns'
import TableComponent from '../../components/common/TableComponent'

export default function CustomerTable1() {
  const studentData = StudentService.getAllStudents(); //new added student from backend
    const columns = useMemo(()=>CustomerTableColumns,[]) 
    const data = useMemo(()=>MockData,[])
    console.log("data "+data);
  return (
    <div>
        <TableComponent colStructure={columns} data={studentData} filterClass={TableColumnFilter}></TableComponent>
    </div>
  )
}
