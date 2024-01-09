import NavBar from './components/NavBar.js';
import './App.css';
import AddUser from './components/AddUser.js';
import Site from './components/Site.js';
import AllUsers from './components/AllUsers.js';
import EditUser from './components/EditUser.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Site/>}/>
          <Route path ='/all' element={<AllUsers/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
