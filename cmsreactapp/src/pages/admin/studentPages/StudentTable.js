import  React ,{useState, useEffect }  from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../../theme";
import { mockData } from "../MockData";
import { DataGrid, GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import Header from "../../../components/admin/common/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom";
import StudentService from '../../../services/StudentService'

export default function StudentTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const baseUrl = "/admin/students/"
    const navigate = useNavigate();
    const editCustomer = (event,params) => {
      navigate(baseUrl + "edit/" + params.id);
      event.stopPropagation();
    };
  
    const deleteCustomer = (event, params) => {
      navigate(baseUrl + "delete/" + params.id);
      event.stopPropagation();
    };
  
    const displayCustomer = (params, event, details) => {
      navigate(baseUrl + "display/" + params.id);
    };

    const addStudent=()=>{
      navigate(baseUrl + "add/");
    }

    
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
  
  
    const colStructure = [
      {
        headerName: "Student ID",
        field: "studentId",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Name",
        field: "name",
        cellClassName: "name-column--cell",
        flex: 1,
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Email",
        field: "email",
        flex: 1,
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Mobile Number",
        field: "mobileNo",
        flex: 1,
        headerAlign: "left",
        align: "left",
      },
      // {
      //   headerName: "Date of Birth",
      //   field: "dob",
      //   headerAlign: "left",
      //   align: "left",
      // },
      {
        headerName: "Course",
        field: "courseName",
        flex: 1,
        headerAlign: "left",
        align: "left",
      },
      {
        headerName: "Action",
        type: "actions",
        headerAlign: "left",
        align: "left",
        getActions: (params) => [
          <GridActionsCellItem
            icon={<EditIcon></EditIcon>}
            label="Edit"
            onClick={(event) => {
              editCustomer(event,params);
            }}
          />,
  
          <GridActionsCellItem
            icon={<DeleteIcon></DeleteIcon>}
            label="Delete"
            onClick={(event) => {
              deleteCustomer(event,params);
            }}
          />,
        ],
      },
    ];
    function getRowId(row) {
      return row.studentId;
    }
    
    return (
      <Box m="20px">
        <Header
          title="All Customers"
          subtitle="Viewing all customers registered with Canteen"
        ></Header>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[800],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[800],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
          getRowId={getRowId} 
            rows={studentsData}
            columns={colStructure}
            onRowClick={displayCustomer}
            disableRowSelectionOnClick {...studentsData}
          initialState={{
            ...studentsData.initialState,
            pagination: { paginationModel: { pageSize: 8 } },
          }} 
          pageSizeOptions={[5, 10, 25]}
          
          ></DataGrid>
        </Box>
        <Button
        variant="contained"
        sx={{
          backgroundColor:
          colors.blueAccent[400]
        }}
        onClick={addStudent}
      ><PersonAddIcon/>&nbsp;&nbsp;Add Student</Button>
      </Box>
    );
}
