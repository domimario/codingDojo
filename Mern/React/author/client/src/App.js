import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateAuthor from "./components/CreateAuthor";
import AuthorList from "./components/AuthorList";
import EditAuthor from "./components/EditAuthor";

function App() {
  const [author, setAuthor] = useState([]);
  const [update, setUpdate] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite Authors</h1>
        <Routes>
          <Route
            element={
              <AuthorList
                author={author}
                update={update}
                setAuthor={setAuthor}
                setUpdate={setUpdate}
              />
            }
            exact
            path="/"
          />
          <Route
            element={<CreateAuthor update={update} setUpdate={setUpdate} />}
            path="/new"
          />
          <Route element={<EditAuthor />} path="/edit/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
