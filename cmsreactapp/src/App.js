//import logo from './logo.svg';
import './App.css';
import {Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard/Dashboard';
//import './components/CustomerComponents/Customer.css';
//import  '../src/pages/customer/MenuList.css'
// import 'bootstrap/dist/css/bootstrap.css'
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
//import MenuSelecter from './pages/admin/MenuSelecter';
import SideBar from './components/admin/common/SideBar';
import StudentSideBar from './components/admin/common/StudentSidebar'
import AddStudent from './pages/admin/studentPages/AddStudent';
import StudentTable from './pages/admin/studentPages/StudentTable';
import DisplayStudent from './pages/admin/studentPages/DisplayStudent';
import DeleteStudent from './pages/admin/studentPages/DeleteStudent';
import MenuSelector from './pages/admin/MenuPages/MenuSelector';
import PendingOrderTable from './pages/admin/orderPages/PendingOrderTable';
import DisplayOrder from './pages/admin/orderPages/DisplayOrder';
import DeleteOrder from './pages/admin/orderPages/DeleteOrder';
import CompletedOrderTable from './pages/admin/orderPages/CompletedOrderTable';
import  ChangePassword from './components/CustomerComponents/ChangePassword';
import WalletTopup from './components/CustomerComponents/WalletTopup';
import PlaceOrder from './components/CustomerComponents/PlaceOrder';
import DailyMenu from './pages/customer/MenuList/DailyMenu';
import OrderHistoryTable from './components/CustomerComponents/OrderHistoryTable';
import RechargeHistoryTable from './components/CustomerComponents/RechargeHistoryTable';
import NavBar from './NavBar';
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
    {isStudent && <StudentSideBar className="sidebar"/>}
    <div className='content'>
    {isAdmin && <NavBar/>}
    {isStudent && <NavBar/>}
      
      <Routes>
       
       <Route path="/" element={<LandingPage style={{position:"fixed"}}></LandingPage>} ></Route>
        <Route path="/customer" element={<Customer></Customer>} ></Route>
        <Route path='/MenuList/' element={<MenuList></MenuList>}></Route>
        <Route path='/admin/dashboard' element= {<Dashboard/>}></Route>
        <Route path='/student/todaysmenu/' element={<MenuList></MenuList>}></Route>
        <Route path='/student/orderhistory/' element={<OrderHistoryTable></OrderHistoryTable>}></Route>
        <Route path='/student/rechargehistory/' element={<RechargeHistoryTable></RechargeHistoryTable>}></Route>
        <Route path='/student/changePassword/' element={<ChangePassword></ChangePassword>}></Route>
        <Route path='/student/dailymenu' element={<DailyMenu></DailyMenu>}></Route>
        <Route path='/student/wallettopup/' element={<WalletTopup></WalletTopup>}></Route>
        <Route path='/student/placeorder/' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='/customer/previousorderslist/' element={<PreviousOrdersList></PreviousOrdersList>}></Route>
        {/* <Route path='/admin/menu/' element={<MenuSelecter></MenuSelecter>}></Route> */}
        <Route path='/LoginComp/' element={<LoginComp></LoginComp>}></Route>
        <Route path='/admin/dashboard' element= {<Dashboard/>}></Route>
        <Route path='/admin/students' element={<StudentTable></StudentTable>}></Route>
        <Route path='/admin/students/add' element={<AddStudent></AddStudent>}></Route>
        <Route path='/admin/students/edit/:id' element={<EditStudent></EditStudent>}></Route>
        <Route path='/admin/students/display/:id' element={<DisplayStudent></DisplayStudent>}></Route>
        <Route path='/admin/students/delete/:id' element={<DeleteStudent></DeleteStudent>}></Route>
        <Route path='/admin/menu' element={<MenuSelector></MenuSelector>}></Route>
        <Route path='/admin/orders/pending' element={<PendingOrderTable></PendingOrderTable>}></Route>
        <Route path='/admin/orders/completed' element={<CompletedOrderTable></CompletedOrderTable>}></Route>
        <Route path='/admin/orders/display/:id' element={<DisplayOrder></DisplayOrder>}></Route>
        <Route path='/admin/orders/delete/:id' element={<DeleteOrder></DeleteOrder>}></Route>
      </Routes>
    </div>
    </div>
    </DataProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  
  );
}

export default App;
