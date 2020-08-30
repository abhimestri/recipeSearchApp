import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

import recipeReducer from './Store/Reducers/recipeUpdates'
import uiReducer from './Store/Reducers/uiActions'
import authReducer from './Store/Reducers/auth'
import {createStore , combineReducers , applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  recipe : recipeReducer,
  uiState : uiReducer,
  auth : authReducer
})

const logger  = store => {
  return next => {
    return action => {
      // console.log("[Middleware] : dispatching" , action)
      const result  = next(action)
      // console.log("[Middleware] next state " , store.getState())
      return result
    }
  }
}

const composeEnahancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

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

serviceWorker.unregister();
