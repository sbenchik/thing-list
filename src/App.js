import React, { Component } from 'react';

import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base, { auth } from './base'
import './App.css';

class App extends Component {
  componentWillMount(){
    base.syncState('things', 
      {
        context: this,
        state: 'things'
      }
    )
  }

  state = {
      things: {},
  }

  thingCounter = 0

  addThing = (ev) => {
    ev.preventDefault()
    const id = this.thingCounter++
    const things = {...this.state.things}
    things[id] = {id: id, name: '', checked: false, date: '',}
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  complete = (thing) => {
    const things = {...this.state.things}
    things[thing.id].checked = !things[thing.id].checked
    this.setState({ things })
  }

  signOut = () => {
    auth.signOut()
  }
  

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      complete: this.complete,
    }

    return (
      <div className="App">
        <Header />
        <SignIn />
        <SignOut signOut={this.signOut}/>
        <AddButton addThing={this.addThing} />
        <ThingList things={this.state.things} {...actions}/>
      </div>
    )
  }
}

export default App;