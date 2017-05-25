import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import Actions from './Actions'
import './Thing.css'

class Thing extends Component{
    componentDidMount(){
        if(!this.nameInput.htmlEl.textContent){
            this.nameInput.htmlEl.focus()
        }
    }

    updateName = (ev) => {
        const { thing, saveThing } = this.props
        thing.name = ev.target.value
        saveThing(thing)
    }

    blurOnEnter = (ev) => {
        if(ev.key === 'Enter'){
            ev.preventDefault()
            ev.target.blur()
        }
    }

    handleChange = (ev) => {
        const { thing, saveThing } = this.props
        const field = ev.currentTarger.getAttribute('name')
        thing[field] = ev.target.value
        saveThing(thing)
    }

    completeItem = (ev) => {
        const { thing, complete } = this.props
        complete(thing)
    }

    updateDate = (ev) => {
        const { thing, saveThing } = this.props
        thing.date = ev.target.value
        saveThing(thing)
    }

    render(){
        const {thing, removeThing } = this.props
        return (
            <li className="Thing">
                <input type="checkbox" value="on" onChange={this.completeItem} checked={thing.checked}/>
                <div className="details">
                    <ContentEditable name="name" className="name" html={thing.name} onChange = {this.handleChange} 
                        onKeyPress={this.blurOnEnter} ref={input => this.nameInput = input}/>
                    <input name="dueOn" type="date" onChange={this.handleChange} defaultValue={thing.date}/>
                    <Actions thing={thing} removeThing={removeThing}/>               
                </div>
            </li>
    )}
}

export default Thing