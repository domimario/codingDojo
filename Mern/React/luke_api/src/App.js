import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form />
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
