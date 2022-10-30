// import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import {Login} from './Components/Login';

import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home"element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;