
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header/Header';
import Coins from './component/Coins/Coins';
import Contact from './component/Contact/Contact';
import About from './component/About';
import Footer from './component/Footer';
import CoinDetails from './component/CoinDetails/CoinDetails';
import BdAddress from './component/Contact/BdAdress';
import UsAddress from './component/Contact/UsAdress';



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='coins' element={<Coins/>}></Route>
        <Route path='contact' element={<Contact/>}>
          <Route path='bd-address' element={<BdAddress/>}/>
          <Route path='us-address' element={<UsAddress/>}/>

        </Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='coin-details/:id' element={<CoinDetails/>}></Route>

      </Routes>
      <Footer></Footer>
     
    
    </div>
  );
}

export default App;
