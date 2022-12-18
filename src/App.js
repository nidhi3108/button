// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Main from "./Component/Main";

function App() {
  return (
   <div>
    <BrowserRouter>
     <Routes>
       <Route  element={<Main/>} path="/"/>
     </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
