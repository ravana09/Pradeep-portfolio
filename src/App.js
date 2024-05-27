import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbars from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route  path='Navbar' element={<Navbars/>}/>
     </Routes>
     </BrowserRouter>
    
      
    </div>
  );
}

export default App;
