import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

import PizzaList from '../PizzaList/PizzaList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Checkout from '../Checkout/Checkout';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  useEffect(() => {
    getPizzas();
  }, []);

  const dispatch = useDispatch();

  const getPizzas = () => {
    axios.get('/api/pizza')
      .then(response => {
        dispatch({ type: `SET_PIZZAS`, payload: response.data });
      })
      .catch(error => {
        console.log(`HEY - Can't get pizzas! ${error}`);
        alert(`HEY - Can't get pizzas!`);
      })
  }

  const getOrders = () => { 
    axios.get('/api/order') 
      .then( response => { 
        dispatch({ type: `SET_ORDERS`, payload: response.data }); 
      }) 
      .catch( error => { 
        console.log(`HEY - Can't get orders! ${error}`); 
        alert(`HEY - Can't get orders!`); 
      }) 
  }

  return (

    <Router>
      <Header />

      <div className='App container'>
        <Switch>
        <Route exact path='/' component={PizzaList} getPizzas={getPizzas} />
        <Route path='/CustomerInfo' component={CustomerInfo} getPizzas={getPizzas} />
        <Route path='/Checkout' component={Checkout} getPizzas={getPizzas} />

        <OrdersList /> 
        <Route path='/Admin' component={Admin} />

        </Switch>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
