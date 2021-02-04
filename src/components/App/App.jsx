import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';

function App() {






  

  useEffect(() => {
    getPizzas();
  }, []);

  const dispatch = useDispatch(); 

  const getPizzas = () => { 
    axios.get('/api/pizza') 
      .then( response => { 
        dispatch({ type: `SET_PIZZAS`, payload: response.data }); 
      }) 
      .catch( error => { 
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
    <div className='App container'>
      <Header />
      <PizzaList getPizzas={getPizzas}/>
      <OrderList getOrders={getOrders}/>
  
    </div>
  );
}

export default App;
