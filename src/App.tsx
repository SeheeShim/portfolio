import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { createContext, useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
