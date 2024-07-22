import React from "react";
import Pokedex from './Pokedex.jsx';
import './index.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Search from "./Search.jsx";

const App = (props) => {
 return (
    <BrowserRouter>
    <div className="App">
      <header>
        <h1>Pokedex</h1>
        <nav>
          <Link to="/">Pokedex</Link>
          <Link to="/search">Search</Link>
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
    </div>
    </BrowserRouter>
 );
};

export default App;