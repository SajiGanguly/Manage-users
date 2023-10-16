import React from 'react';
import './App.css';
import CrudTable from './table';
import Admin from "./Admin";
import Table from "./table";
import Passkey from "./Passkey";

import  {BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>

<Routes>

  <Route path='/' element={<Admin/>}/>

  <Route path="/table" element={<Table/>}/>
  <Route path="/passkey" element={<Passkey/>}/>


</Routes>
</Router>
  </div>
  );
}

export default App;