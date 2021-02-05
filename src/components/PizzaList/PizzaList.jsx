import './PizzaList.css';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
    //grabs the pizza list from the store
    const pizzas = useSelector(store => store.pizzaList);


    return (
        <>
        <div id="pizzaList" className="row row-cols-1 row-cols-md-3 g-4">
        {pizzas.map((pizza) => (
        <div key={pizza.id}>
            <PizzaItem 
            pizza={pizza}
            />
            </div>
        ))} 
        </div>
        <button type="button" className="btn-lg btn-primary">Next</button>
        </>
        
    );
}

export default PizzaList;