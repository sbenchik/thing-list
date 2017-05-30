import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { FormControl } from 'react-bootstrap'

import './AddButton.css'

class AddButton extends Component {
    
    componentDidMount(){
        ReactDOM.findDOMNode(this.nameInput).focus();
    }

    render(){
        const { addThing } = this.props
        return(
            // <button className="add-thing" onClick={props.addThing}>Add Thing</button>
            <form onSubmit={this.addThing}>
                    <FormControl className="add-thing" type="text" placeholder="New Item" ref={(input) => {this.nameInput = input}}/>
            </form>
        )
    }
}

export default AddButton