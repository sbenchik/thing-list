import React from 'react'
import ContentEditable from 'react-contenteditable'

import Actions from './Actions'
import './Thing.css'

const Thing = ({ thing, saveThing, removeThing }) => {
    const updateName = (ev) => {
        thing.name = ev.target.value
        saveThing(thing)
    }

    return (
        <li className="Thing">
            <input type="checkbox" value="on" />
            <div className="details">
                <ContentEditable className="name" html={thing.name} onChange = {updateName}/>
                <Actions thing={thing} removeThing={removeThing}/>               
            </div>
        </li>
    )
}

export default Thing