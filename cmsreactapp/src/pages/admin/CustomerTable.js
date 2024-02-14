import React , {useMemo} from 'react'
import MockData from '../../Assets/CT_MockData.json'
import TableColumnFilter from '../../components/common/TableColumnFilter'
import { CustomerTableColumns } from '../../components/admin/CustomerTableColumns'
import TableComponent from '../../components/common/TableComponent'

export default function CustomerTable1() {
    const columns = useMemo(()=>CustomerTableColumns,[]) 
    const data = useMemo(()=>MockData,[])
  return (
    <div>
        <TableComponent colStructure={columns} data={data} filterClass={TableColumnFilter}></TableComponent>
    </div>
  )
}
