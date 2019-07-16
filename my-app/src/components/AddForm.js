import React, { useState} from 'react'

const AddForm = props => {
    console.log(props)

    const {input, setInput} = useState({name: '', email: '', role: '', card: ''})
    console.log('input', input)

    const changeHandler = e => {
       //  -getting error message- setInput({...input, [e.target.name]: e.target.value })
        console.log(e.target.name)
    }

    const addMember = e => {
        e.preventDefault()
        props.setTeamList({...props.teamList, input})
    }

    return (
    <div>
        <form onSubmit={addMember}>
            <input
            placeholder='Name'
            name='name'
            onChange={changeHandler}
            />
            <input
            placeholder='E-Mail'
            name='email'
            onChange={changeHandler}
            />
            <input
            placeholder='Role'
            name='role'
            onChange={changeHandler}
            />
            <input
            placeholder='Card'
            name='card'
            onChange={changeHandler}
            />
            <button> Add Member </button>
        </form>
    </div>
    )
}

export default AddForm
