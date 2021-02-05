import './PizzaItem.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PizzaItem({ pizza }) {
    //bring in the cart from the store
    const cart = useSelector(store => store.pizzaCart);
    //bring in the ability to set the cart:
    const dispatch = useDispatch();
    //toggles whether a piza is in state or not. Shows "Add" button if false, "Remove" button if true
    const [inCart, setInCart] = useState(false);
    //toggles wether an item is in cart
    const toggleCart = () => {
        setInCart(!inCart);
    }
    return (
        <div className="col">
            <div className="card">
                <img src={pizza.image_path} className="card-img-top" alt="a pizza" />
                <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">{pizza.description}
                    </p>
                    <p id="price-text">${pizza.price}</p>
                </div>
                <div className="card-footer">
                    <button className={inCart ? "btn-lg btn-danger" : "btn-lg btn-success" } type="button"
                        onClick={() => {
                            //toggle the button from add to remove:
                            toggleCart();
                            //set the pizza in the cart OR Remove from the cart, depending on if it's in the cart or not. 
                            // BASE GOALS = only one pizza of each type in the cart at a time
                            inCart ? dispatch({type: 'REMOVE_FROM_CART', payload: pizza}) :
                            dispatch({type: 'ADD_TO_CART', payload: pizza});                        
                        }}
                        //changes text to display wether it's in the cart or not
                    >{inCart ? <span>Remove</span> : <span>Add</span> }</button>
                </div>
            </div>
        </div>
    );
}

export default PizzaItem;
