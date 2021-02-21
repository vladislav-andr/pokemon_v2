import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import Pagepokemon from './Components/Content/Pagepokemon'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

ReactDOM.render(
  <Provider Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route
          exact path='/pokemonAPI'
          component={App}
        />
        <Route
          exact
          path='/pokemonAPI/:name/'
          component={Pagepokemon}
        />
        <Redirect
          from='/'
          to='/pokemonAPI'
        />
      </Switch>
    </BrowserRouter>
  </Provider >
  , document.getElementById('root')
)
