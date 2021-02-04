import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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


  return (
    <>
      <Header />
      <div className='App container'>

        <PizzaList getPizzas={getPizzas} />


      </div>
      <Footer />
    </>
  );
}

export default App;
