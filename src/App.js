import React, { Component } from 'react';

import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import SignIn from './SignIn'
import SignOut from './SignOut'
import base, { auth } from './base'
import './App.css';

class App extends Component {
  state = {
      things: {},
      uid: null,
  }

  componentWillMount(){
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          this.authHandler({ user })
        }
      }
    )
  }

  setUpThings = () => {
    this.ref = base.syncState(`${this.state.uid}/things`, 
      {
        context: this,
        state: 'things',
      }
    )
  }

  authHandler = (authData) => {
    this.setState({ uid: authData.user.uid }, this.setUpThings)
  } 

  thingCounter = 0

  addThing = (ev) => {
    ev.preventDefault()
    const nameField = ev.target.querySelector('input')
    const name = nameField.value
    const id = this.thingCounter++
    const things = {...this.state.things}
    things[id] = {id: id, name: name, checked: false, date: '',}
    this.setState({ things })
    ev.target.reset()
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
    auth.signOut().then(()=>this.setState({uid: null}))
  }
  
  renderThings() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      complete: this.complete,
    }

    return(
        <div>
          {/*<SignOut signOut={this.signOut}/>*/}
          <AddButton addThing={this.addThing} />
          <ThingList things={this.state.things} {...actions}/>
        </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.state.uid ? this.renderThings() : <SignIn authHandler={this.authHandler}/>}
      </div>
    )
  }
}

export default App;