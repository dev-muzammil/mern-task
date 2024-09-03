import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Tables from "./Pages/Tables";
import Charts from "./Pages/Charts";
import Footr from "./Components/Footr";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tables' element={<Tables/>} />
        <Route path='/charts' element={<Charts/>} />
      </Routes>
      <Footr/>
    </BrowserRouter>
  );
};

export default App;
