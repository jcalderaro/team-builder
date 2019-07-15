import React, {useState} from "react"
import './App.css';
import TeamList from "./components/TeamList";

function App() {
  const [teamList, setTeamList] = useState([{
    name: "Jon",
    email: "123@gmail.com", 
    role: "Water Boy"
  },
  {
    name: "Jaon",
    email: "1a23@gmail.com", 
    role: "Wataer Boy"
  },
  {
    name: "Jaon",
    email: "1a23@gmail.com", 
    role: "Wataer Boy"
  }])


  console.log (teamList) 

  return (
    <div className="App">
     <h1> team builder </h1>
     <TeamList teamList = {teamList} />
     
    </div>
  );
}

export default App;