import React, {useState} from "react"
import './App.css';
import TeamList from "./components/TeamList";
import AddForm from './components/AddForm.js';


function App() {
  const [teamList, setTeamList] = useState([{
    name: "Pikachu",
    email: "Pikachu@gmail.com", 
    role: "Electric",
    card: "1"
  },
  {
    name: "Bulbasaur",
    email: "Bulbasaur@gmail.com", 
    role: "Grass",
    card: "2"
  },
  {
    name: "Charmander",
    email: "Charmander@gmail.com", 
    role: "Fire",
    card: "3"
  },
  {
    name: "Ekans",
    email: "Snake@gmail.com", 
    role: "Poison",
    card: "4"
  },
  {
    name: "Sandshrew",
    email: "Sandshrew@gmail.com", 
    role: "Ground",
    card: "5"
  },
  {
    name: "Clefairy",
    email: "Clefairy@gmail.com", 
    role: "Fairy",
    card: "6"
  }])




  console.log (teamList) 

  return (
    <div className="App">
     <h1> Pokemon Team Builder </h1>
     <AddForm setTeamList={setTeamList} teamList={teamList} />
     <TeamList teamList = {teamList} />
     
    </div>
  );
}

export default App;
