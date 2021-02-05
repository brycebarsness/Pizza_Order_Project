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

const pizzaCart = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload];
    }
    else if (action.type === 'REMOVE_FROM_CART') {
        return state.filter(pizza => pizza.id != action.payload.id);
    }else if (action.type === 'CLEAR_CART'){
        console.log ('CLEAR CART')
        return [];
    }
    return state;
};

const ordersList = (state =[], action) => {
    if (action.type === 'SET_ORDERS') {
        return action.payload;
    }
    return state; 
}

const customerInfo = (state =[], action) => {
    if (action.type === 'CUSTOMER_INFO') {
        return action.payload;
    }
    return state; 
}

const storeInstance = createStore(
    combineReducers(
        {
            pizzaList: pizzaList,


            ordersList: ordersList,


            pizzaCart: pizzaCart,

            customerInfo: customerInfo
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

  