import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const macet = [
    {
      firstName: "lesi",
      lastName: "qen",
    },
    {
      firstName: "kitty",
      lastName: "mace",
    },
  ];
  const macet4 = [
    {
      firstName: "lesi",
      lastName: "qen",
    },
    {
      firstName: "kitty",
      lastName: "mace",
    },
  ];

  return (
    <div className="App">
      <PersonCard
        firstName={"Jane "}
        lastName={"Doe, "}
        personAge={45}
        hairColor={"Black"}
        macet={macet}
      />
      <PersonCard
        firstName={"John"}
        lastName={"Smith, "}
        personAge={30}
        hairColor={"Black"}
        macet={macet4}
      />
    </div>
  );
}

export default App;
