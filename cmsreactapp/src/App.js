//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import 'bootstrap/dist/css/bootstrap.css'
import Customer from './components/CustomerComponents/Customer';
import MenuList from './pages/customer/MenuList'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/customer/" element={<Customer></Customer>} ></Route>
        <Route path='/admin/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/MenuList/' element={<MenuList></MenuList>}></Route>
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
