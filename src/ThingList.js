import React from 'react'
import './ThingList.css'
import Thing from './Thing'

const ThingList = (props) => {
    return(
        <ul className="ThingList">
            { Object.keys(props.things).map(thingID =>  <Thing key={thingID} thing={props.things[thingID]} />) }
        </ul>
    )
}

export default ThingList