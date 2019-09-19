import React from 'react'


const EditForm = props => {
    console.log(props)
    return (
        <div>
            <form>
                <input
                    placeholder='name'
                />
                <input
                    placeholder='email'
                />
            </form>
        </div>
    )
}

export default EditForm
