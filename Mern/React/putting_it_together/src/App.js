import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe,Jane"} personAge={45} hairColor={"Black"} />
      <PersonCard firstName={"Smith,John"} personAge={88} hairColor={"Brown"} />
    </div>
  );
}

export default App;
