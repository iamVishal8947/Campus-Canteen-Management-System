//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard/Dashboard';
//import './components/CustomerComponents/Customer.css';
//import  '../src/pages/customer/MenuList.css'
//import 'bootstrap/dist/css/bootstrap.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from 'react';
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
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);//Default val of sidebar is true
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/*Giving access to Material ui*/}
        <CssBaseline /> {/*Material UI's CSS theme */}
    <DataProvider>
    <div className="app">
      <Routes>
       
       <Route path="/" element={<LandingPage style={{position:"fixed"}}></LandingPage>} ></Route>
        <Route path="/customer" element={<Customer></Customer>} ></Route>
        {/* <Route path='/admin' element={<SideBar></SideBar>}>
          <Route path='dashboard' element= {<Dashboard/>}></Route>
        </Route> */}
        <Route path='/admin/dashboard' element= {<Dashboard/>}></Route>
        <Route path='/MenuList/' element={<MenuList></MenuList>}></Route>
        <Route path='/customer/previousorderslist/' element={<PreviousOrdersList></PreviousOrdersList>}></Route>
        <Route path='/admin/menuselect/' element={<MenuSelecter></MenuSelecter>}></Route>
        <Route path='/LoginComp/' element={<LoginComp></LoginComp>}></Route>
        <Route path='/admin/students/add' element={<AddStudent></AddStudent>}></Route>
        <Route path='/admin/students/edit/:id' element={<EditStudent></EditStudent>}></Route>
        <Route path='/admin/students/display/:id' element={<DisplayStudent></DisplayStudent>}></Route>
        {/* <Route path='/admin/customers/all' element={<CustomerTable></CustomerTable>}></Route> */}
        <Route path='/admin/students' element={<StudentTable></StudentTable>}></Route>
      </Routes>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </DataProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  
  );
}

export default App;
