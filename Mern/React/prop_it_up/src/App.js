import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe,Jane"} age={"45"} hairColor={"Black"} />
      <PersonCard firstName={"Smith,John"} age={"88"} hairColor={"Brown"} />
      <PersonCard
        firstName={"Fillmora,Millard"}
        age={"50"}
        hairColor={"Brown"}
      />
      <PersonCard firstName={"Smith,Maria"} age={"62"} hairColor={"Brown"} />
    </div>
  );
}

export default App;
