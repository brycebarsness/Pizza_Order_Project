import './PizzaList.css';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useHistory } from 'react-router-dom';

function PizzaList() {   
    //grabs the pizza list from the store
    const pizzas = useSelector(store => store.pizzaList);
     const history = useHistory();
    
    const sendNextButton = () => {
     
        history.push('/CustomerInfo');
    }
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {pizzas.map((pizza) => (
        <div key={pizza.id}>
            <PizzaItem 
            pizza={pizza}
            />
            </div>
        ))} 
        </div>
        <button onClick={()=> sendNextButton()} type="button" className="btn-lg btn-primary"
        >Next</button>
        </>
        
    );
}

export default PizzaList;