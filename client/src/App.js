import React from 'react';
import Books from "./pages/Books";
import Update from './pages/Update';
import Add from './pages/Add';
import "./style.css";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/update/:id' element={<Update />}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
