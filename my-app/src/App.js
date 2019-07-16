import React, {useState} from "react"
// import React, {useState} from "react"

import './App.css';
// import './App.css';

import { team } from './team';
// import TeamList from "./components/TeamList";

import Form from './components/Form.js';
// import AddForm from './components/AddForm.js';

import MemberList from './components/Memberlist.js'
// I did not have a page for this



// // // // // // // // // // // // // // // // // // // // 

function App() {

  const [members, setMembers] = useState(team);

  const [newMember, setNewMember] = useState({ name: '', email: '', role: '' });

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value })
    console.log(newMember)
  }

  const addMember = (e) => {
    e.preventDefault();
    setMembers([ ...members, newMember ])
    console.log(newMember)
    console.log(members)
  }

  const editMember = (e) => {
    e.preventDefault();
    setMembers([ ...members, newMember ])
    console.log(newMember)
    console.log(members)
  }

  return (
    <div className="App">
      <Form 
        setNewMember={setNewMember}
        newMember={newMember}
        handleChange={handleChange}
        addMember={addMember} 
      />
      <MemberList members={members} setMembers={setMembers} />
    </div>
  );
}

export default App;

// // // // // // // // // // // // // // // // // // // // 


/* 
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
*/