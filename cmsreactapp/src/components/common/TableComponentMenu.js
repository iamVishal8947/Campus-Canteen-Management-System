import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'
import { SortUp, SortDown } from 'react-bootstrap-icons'

export default function TableComponent(props) {
    const columns = useMemo(() => {
        const cols = [...props.colStructure];
        // Add a button column to the existing columns
        cols.push({
            Header: 'Actions',
            accessor: 'actions', // You can change this accessor according to your data structure
            Cell: ({ row }) => (
                <button className='btn btn-primary' onClick={() => handleButtonClick(row)}>     Add</button>
            ),
        });
        return cols;
    }, [props.colStructure]); // Ensure to include props.colStructure in dependencies for useMemo

    const data = useMemo(() => props.data, []);

    const defaultColumn = useMemo(() => {
        return {
            Filter: props.filterClass
        };
    }, []);

    const tableInstance = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        page,
        pageOptions,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        gotoPage,
        pageCount,
    } = tableInstance;

    const { pageIndex } = state;

    const handleButtonClick = (row) => {
        // Handle button click event
        props.addbtn(row)
        console.log('Button clicked for row:', row);
    };

    return (
        <div style={{ padding: "5%" }}>
            <table {...getTableProps()} className='table'>
                <thead className='table-primary'>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    <span>{column.isSorted ? (column.isSortedDesc ? <SortDown /> : <SortUp />) : ''}</span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='btn btn-outline-primary'>{' << '}</button>&nbsp;&nbsp;
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className='btn btn-primary'>{' < '}</button>&nbsp;&nbsp;
            <button onClick={() => nextPage()} disabled={!canNextPage} className='btn btn-primary' > {' > '}</button>&nbsp;&nbsp;
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='btn btn-outline-primary'>{' >> '}</button>&nbsp;&nbsp;
            <span>
                | Go to page: {' '}
                <input type='number' defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }} style={{ width: '50px', border: '1px solid black' }}></input>|
            </span>
        </div>
    )
}
