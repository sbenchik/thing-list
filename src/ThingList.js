import React from 'react'
import './ThingList.css'
import Thing from './Thing'

const ThingList = (props) => {
    
    return(
        <ul className="ThingList">
            { Object
            .keys(props.things)
            .sort((a, b) => b[0] - a[0])
            .map(thingID =>  <Thing key={thingID} thing={props.things[thingID]} onChange={props.onChange} />) }
        </ul>
    )
}

export default ThingList