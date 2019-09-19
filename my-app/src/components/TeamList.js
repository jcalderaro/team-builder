import React from "react"
import Member from "./member"

const TeamList = (props) => {

    console.log(props)
    return (
        <>
            {
                props.teamList.map((member, index) => <Member member={member} key={index} />)
            }
        </>
    )
}
    ;

export default TeamList
