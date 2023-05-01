import "./App.css";
import Advertisment from "./components/Advertisment";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Subcontents from "./components/Subcontents";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <Navigation />
        <Main>
          <Subcontents />
          <Subcontents />
          <Subcontents />
          <Advertisment />
        </Main>
      </div>
    </div>
  );
}

export default App;
