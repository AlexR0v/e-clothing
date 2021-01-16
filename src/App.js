import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'

function App () {
  return (
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
    </Switch>
  )
}

export default App
