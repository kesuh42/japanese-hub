import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import List from "./pages/List/List";
import Archive from "./pages/Archive/Archive";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<List />} />
          <Route path="/archive" element={<List />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
