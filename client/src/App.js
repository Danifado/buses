import React, { useState } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link
} from "react-router-dom"
import Header from './components/header';
import Footer from './components/footer';
import Bus from './views/Bus';
// function getBusData(){
//   const [busInfo, setBusInfo] = useState("");
//   const Id_Bus = '64740c000d0f068ecd318a88'
//   Axios.get(`http://localhost:5000/api/busInfo/${Id_Bus}`).then(
//     (res) => { 
//       setBusInfo(res.data._id);
//   });
// }

function App() {
  
  return (
    <div className="App">
      <Header />
        <br/>
        <Bus />
      <Footer />
    </div>
  )
}

export default App