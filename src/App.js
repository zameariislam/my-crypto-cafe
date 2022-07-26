
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './component/Home';



function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route></Route>
      </Routes>
    
    </div>
  );
}

export default App;
