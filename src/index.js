import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers(
        {
            pizzaList: pizzaList,
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
