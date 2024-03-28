import "./App.css";
import PersonCard from "./Components/PersonCard";

const people = [
  { firstname: "Jane", lastname: "Doe", age: 45, hairColor: "Brown" },
  { firstname: "john", lastname: "Smith", age: 88, hairColor: "Blonde" },
  { firstname: "Fill", lastname: "millard", age: 40, hairColor: "Black" },
  { firstname: "sarrah ", lastname: "Smith", age: 35, hairColor: "Red" },
];

function App() {
  return (
    <div className="App">
      <h1> people</h1>
      {people.map((person, index) => (
        <PersonCard
          key={index}
          firstname={person.firstname}
          lastname={person.lastname}
          age={person.age}
          hairColor={person.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
