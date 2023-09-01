import { NavLink, Routes } from "react-router-dom";
import "./App.css";
import { Route} from "react-router-dom"
import About from "./components/About";
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound";
import { MainHeader } from "./components/MainHeader";

function App() {
  return (
    <div>
      <nav >
        <ul >
          <li className="">
            <NavLink to="/" >Home</NavLink>
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/> }/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
