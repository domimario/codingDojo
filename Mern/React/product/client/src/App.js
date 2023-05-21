import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./components/Detail";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to={`/product`}>HOME</Link>
        <Routes>
          <Route element={<Main />} path="/product" default />
          <Route element={<Detail />} path="/product/:id" />
          <Route element={<Update />} path="/product/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
