import React from 'react'

export default function CustomerTableColumnFilter({column}) {
    const {filterValue, setFilter} = column;
    return (
      <span>
          Search:{' '}
          <input type='search' value={filterValue || ''} onChange={(e)=>{setFilter(e.target.value)}} className='form-control me-1'></input>
      </span>
    )
}
