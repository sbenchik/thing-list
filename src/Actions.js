import React from 'react'

import './Actions.css'

const Actions = ({ thing, removeThing }) => {
    
    return(
        <span className="actions">
                    <button className="remove" onClick={() => removeThing(thing)}>
                        <i className="fa fa-remove"></i>
                    </button>
        </span>
    )
}

export default Actions