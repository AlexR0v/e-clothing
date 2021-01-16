import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'

function App () {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <HomePage />}
      />
    </Switch>
  )
}

export default App
