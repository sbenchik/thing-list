import React, { Component } from 'react';
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import './App.css';

class App extends Component {
  // constructor(){
  //   super()
  //   this.thingCounter = 0
  //   this.state = {
  //     things: {},
  //   }
  //   this.addThing = this.addThing.bind(this)
  // }

  state = {
      things: {},
  }

  thingCounter = 0

  addThing = (ev) => {
    ev.preventDefault()
    const id = this.thingCounter++
    const things = {...this.state.things}
    things[id] = {id: id, name: ""}
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