export const CustomerTableColumns = [
    {
        Header:"Customer Id",
        accessor:'studentId',
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
        accessor:'mobileNo',
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
        accessor:'courseName',
        Footer:"Course",
        
    },
    {
        Header:"Balance",
        accessor:'balance',
        Footer:"Balance",
        
    }
]