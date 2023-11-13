import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';


// Pages
import ListMovie from "./pages/ListMovie";
import DetailMovie from "./pages/DetailMovie";
import Profile from './pages/Profile';


// Components
import Header from "./components/header";
import Navbar from './components/navbar';


import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<ListMovie/>} />
            <Route path="detail/:detailId" element={<DetailMovie/>}/>
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </Router>
    </div>
  );
}


export default App;
