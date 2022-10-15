import logo from './logo.svg';
import './App.css';
import NavBarComp from './components/NavBarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Farms from './components/Farms';
import Processors from './components/ProcessorList';
import Upcoming from './components/Upcoming';
import Store from './components/Store';


function App() {
  return (
    <>
      <NavBarComp />
      <div className="container">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Farms" element={<Farms />} />
        <Route path="/Processors" element={<Processors />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Store" element={<Store />} />
      </Routes>

    </div>
    </>
  );
}

export default App;
