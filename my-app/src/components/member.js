import React from "react"

export default function Member (props) {
    return (
        <>
        <div>
        <p> {props.member.name} </p>
        <p> {props.member.email} </p>
        </div>
        </>
    )
}
