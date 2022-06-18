import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Test from "./pages/Test/Test";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
