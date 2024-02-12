//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import 'bootstrap/dist/css/bootstrap.css'
import Customer from './components/CustomerComponents/Customer';
import CustomerHandler from './pages/admin/CustomerHandler';
import AddCustomer from './pages/admin/AddCustomer';
import EditCustomer from './pages/admin/EditCustomer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/customer/" element={<Customer></Customer>} ></Route>
        <Route path='/admin/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/admin/customers' element={<CustomerHandler></CustomerHandler>}></Route>
        <Route path='/admin/customers/add' element={<AddCustomer></AddCustomer>}></Route>
        <Route path='/admin/customers/edit/:id' element={<EditCustomer></EditCustomer>}></Route>
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
  );
}

export default App;
