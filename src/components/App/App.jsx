import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useSelector, useDispatch } from 'react-redux';

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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList getPizzas={getPizzas}/>

  
    </div>
  );
}

export default App;
