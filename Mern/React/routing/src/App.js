import "./App.css";
import Home from "./components/Home";
import Hello from "./components/Hello";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Hello />} path="/:word" />
          <Route element={<Hello />} path="/:word/:color/:bgColor" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
