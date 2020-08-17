import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

import recipeReducer from './Store/Reducers/recipeUpdates'
import uiReducer from './Store/Reducers/uiActions'
import {createStore , combineReducers , applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  recipe : recipeReducer,
  uiState : uiReducer
})

const logger  = store => {
  return next => {
    return action => {
      console.log("[Middleware] : dispatching" , action)
      const result  = next(action)
      console.log("[Middleware] next state " , store.getState())
      return result
    }
  }
}

const composeEnahancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer , composeEnahancers(applyMiddleware(logger , thunk)))

ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter>
        <React.StrictMode>
          <App/>    
        </React.StrictMode>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
