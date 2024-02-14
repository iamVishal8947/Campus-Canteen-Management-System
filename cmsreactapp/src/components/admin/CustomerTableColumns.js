export const CustomerTableColumns = [
    {
        Header:"Customer Id",
        accessor:'id',
        Footer:"Customer Id",
        
    },
    {
        Header:"Name",
        accessor:'name',
        Footer:"Name",
        
    },
    {
        Header:"Email",
        accessor:'email',
        Footer:"Email",
        disableFilters : true,
    },
    {
        Header:"Mobile Number",
        accessor:'mob',
        Footer:"Mobile Number",
        disableFilters : true,
    },
    {
        //Keep date in iso fomat in data and then use ? function here.
        Header:"Date of Birth",
        accessor:'dob',
        Footer:"Date of Birth",
        disableFilters : true,
    },
    {
        Header:"Course",
        accessor:'course',
        Footer:"Course",
        
    }
]