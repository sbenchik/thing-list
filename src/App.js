import React, { Component } from 'react';
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.thingCounter = 0
    this.state = {
      things: {},
    }
    this.addThing = this.addThing.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(ev){
    alert('test')
  }

  addThing(ev){
    ev.preventDefault()
    let id = this.thingCounter++
    const things = {...this.state.things}
    things[id] = {id: id, name: "New Thing"}
    this.setState({ things })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <AddButton addThing={this.addThing} />
        <ThingList things={this.state.things} onChange={this.onChange}/>
      </div>
    )
  }
}

export default App;