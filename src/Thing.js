import React from 'react'
import './Thing.css'

const Thing = ({ thing }, props) => {
    return (
        <li className="Thing">
            <input type="checkbox" value="on" />
            <div className="details">
                <div className="name" contentEditable placeholder="New Item" onChange={props.onChange}>
                    {thing.name}
                </div>
                <span className="actions">
                    <button className="remove">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </span>
            </div>
        </li>
    )
}

export default Thing