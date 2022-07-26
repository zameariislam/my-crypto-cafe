
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header/Header';
import Coins from './component/Coins/Coins';
import Contact from './component/Contact/Contact';
import About from './component/About';



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='coins' element={<Coins/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
