import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
  <BrowserRouter>
   <Routes>
      <Route exact path="/" element={<Home/>} />  
    </Routes>  
  </BrowserRouter>   
  );
}

export default App;
