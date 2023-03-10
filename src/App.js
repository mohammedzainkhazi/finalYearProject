import './App.css';
import Nav from './comps/Nav.js';
import bg from "../src/img/bg.jpeg";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Search from './comps/Search';
import History from './comps/History';
import Team from './comps/Team';
import Home from './comps/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home"/>} />   
          <Route exact path="/home" element={<Home bg={bg}/>} /> 
          <Route path="search" element={<Search bg={bg}/>} />
          <Route path="history" element={<History/>} />
          <Route path="team" element={<Team/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
