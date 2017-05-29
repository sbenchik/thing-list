import React from 'react'
import { FormControl } from 'react-bootstrap'

import './AddButton.css'

const AddButton = ({ addThing }) => {
    return(
        // <button className="add-thing" onClick={props.addThing}>Add Thing</button>
        <form onSubmit={addThing}>
                <FormControl className="add-thing" type="text" placeholder="New Item"/>
        </form>
    )
}

export default AddButton