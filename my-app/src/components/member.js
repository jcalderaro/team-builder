import React from "react"

export default function Member (props) {
    return (
        <>
        <div>
        <br></br>
        <h3> {props.member.name} </h3>
        <h3> {props.member.email} </h3>
        <h3> {props.member.role} </h3>
        <h3> {props.member.card} </h3>
        <br></br>
        </div>
        </>
    )
}
