//import logo from './logo.svg';
import './App.css';
import {Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard/Dashboard';
//import './components/CustomerComponents/Customer.css';
//import  '../src/pages/customer/MenuList.css'
//import 'bootstrap/dist/css/bootstrap.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState} from 'react';
import Customer from './components/CustomerComponents/Customer';
import MenuList from './pages/customer/MenuList'
import EditStudent from './pages/admin/studentPages/EditStudent';
import LandingPage from './components/LandingPage/LandingPage';
import PreviousOrdersList from './pages/customer/PreviousOrdersList';
import LoginForm from './components/LandingPage/LoginForm';
import LoginComp from './components/LandingPage/LoginComp';
import { DataProvider } from './DataContext';
import MenuSelecter from './pages/admin/MenuSelecter';
import SideBar from './components/admin/common/SideBar';
import AddStudent from './pages/admin/studentPages/AddStudent';
import StudentTable from './pages/admin/studentPages/StudentTable';
import DisplayStudent from './pages/admin/studentPages/DisplayStudent';
import DeleteStudent from './pages/admin/studentPages/DeleteStudent';
function App() {
  const location = useLocation();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);//Default val of sidebar is true
  const isAdmin = location.pathname.startsWith('/admin') 
  const isStudent = location.pathname.startsWith('/student') 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/*Giving access to Material ui*/}
        <CssBaseline /> {/*Material UI's CSS theme */}
    <DataProvider>
    
    <div className="app">
    {isAdmin && <SideBar className="sidebar"/>}
    {/* {isStudent && <SideBarStudent className="sidebar"/>} */}
    <div className='content'>
      <Routes>
       
       <Route path="/" element={<LandingPage style={{position:"fixed"}}></LandingPage>} ></Route>
        <Route path="/customer" element={<Customer></Customer>} ></Route>
        <Route path='/admin/dashboard' element= {<Dashboard/>}></Route>
        <Route path='/MenuList/' element={<MenuList></MenuList>}></Route>
        <Route path='/customer/previousorderslist/' element={<PreviousOrdersList></PreviousOrdersList>}></Route>
        <Route path='/admin/menuselect/' element={<MenuSelecter></MenuSelecter>}></Route>
        <Route path='/LoginComp/' element={<LoginComp></LoginComp>}></Route>
        <Route path='/admin/students/add' element={<AddStudent></AddStudent>}></Route>
        <Route path='/admin/students/edit/:id' element={<EditStudent></EditStudent>}></Route>
        <Route path='/admin/students/display/:id' element={<DisplayStudent></DisplayStudent>}></Route>
        <Route path='/admin/students/delete/:id' element={<DeleteStudent></DeleteStudent>}></Route>
        {/* <Route path='/admin/customers/all' element={<CustomerTable></CustomerTable>}></Route> */}
        <Route path='/admin/students' element={<StudentTable></StudentTable>}></Route>
      </Routes>
    </div>
    </div>
    </DataProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  
  );
}

export default App;
