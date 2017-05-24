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

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    delete things[thing.id]
    this.setState({ things })
  }
  
  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div className="App">
        <Header />
        <AddButton addThing={this.addThing} />
        <ThingList things={this.state.things} {...actions}/>
      </div>
    )
  }
}

export default App;