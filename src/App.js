
import './App.css';
import Home from './Home'
import Login from './Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { createContext, useState } from 'react';
 export const userContext = createContext()
function App() {
 const [login , setLogin] = useState(false)
  return (
   <BrowserRouter>
   <userContext.Provider value={{login , setLogin}}>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
   </Routes>
   </userContext.Provider>
   </BrowserRouter>
  );
}

export default App;
