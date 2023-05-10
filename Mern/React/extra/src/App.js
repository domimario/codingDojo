import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ItemList from "./components/ItemList";
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Post</Link>

      <Link to="/create">Create a new post</Link>

      <Routes>
        <Route exact path="/" element={<ItemList />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
