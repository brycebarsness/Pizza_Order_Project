import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = 0, action) => {

    return state;
};

const storeInstance = createStore(
    combineReducers(
        {
            pizzaReducer,

        }
    )
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
          <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
