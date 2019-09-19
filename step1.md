### STEP 1 - Setup your state

- Import the `useState` hook

- Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.

- Render your list of team members

--------------


- Import the `useState` hook
    > In App.js use the phrase ``` import React, {useState} from "react" ```
    > Created Forms.js

- Give the state variable you just declared a default value.
    > In app.js use the code
        const [teamList, setTeamList] = useState([{
        name: "Pikachu",
        email: "Pikachu@gmail.com", 
        role: "Electric",
        card: "1"
        },

- Render your list of team members
    > In members.js use the code
        export default function Member (props) {
        return (
        <>
        <div>
        <p> {props.member.name} </p>
        <p> {props.member.email} </p>
        <p> {props.member.role} </p>
        <p> {props.member.card} </p>
        </div>
        </>
        )
        }
        