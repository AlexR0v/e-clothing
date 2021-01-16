import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'

function App () {
  return (
    <>
      <Header />
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
    </>
  )
}

export default App
