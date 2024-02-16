import React from 'react'

export default function TableColumnFilter({column}) {
    const {filterValue, setFilter} = column;
    return (
      <span>
          <input type='search' placeholder='Search' value={filterValue || ''} onChange={(e)=>{setFilter(e.target.value)}} className='form-control me-1' style={{width: "150px"}}></input>
      </span>
    )
}
