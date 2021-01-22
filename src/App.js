import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { auth } from './components/firebase/utils'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Register from './pages/register/Register'
import Shop from './pages/shop/Shop'

class App extends React.Component {
  unsubscribeFromAuth = null

  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }


  render () {
    return (
      <>
        <Header user={this.state.currentUser?.displayName} />
        <Switch>
          <Route
            exact
            path='/'
            render={() => <HomePage />}
          />
          <Route
            path='/shop'
            render={() => <Shop />}
          />
          <Route
            path='/sign-in'
            render={() => <Register />}
          />
        </Switch>
      </>
    )
  }
}

export default App
