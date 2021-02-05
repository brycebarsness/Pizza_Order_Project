import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch()
    //bring in the cart from the store
    const cart = useSelector(store => store.pizzaCart);
    //find the total of all items in the cart
    const addUpCart =(cart)=> {
        let sum = 0;
        for (const pizza of cart) {
            sum += Number(pizza.price);
        }
        return sum.toFixed(2);
    }
    const resetApp = () => (
        dispatch ({type: 'CLEAR_CART'})
    )
    return (
        <header id="navbar" className='App-header'>
            <Link to="/"><img onClick={() => resetApp()} src="images/edawhite.png" alt="eda" /></Link>
            <h1 className='App-title'>EDA Pizza</h1>
            <div id="totalPrice">
                {/*TODO: put the cart before the horse... um, i mean, put the cart in front of the price */}
                <i className="fas fa-shopping-cart">&nbsp;</i>
                {/*If it's an empty object, display 0, otherwise add up the cart and show the total */}
                <span>${Object.keys(cart).length === 0 ? "0.00" : addUpCart(cart)}</span></div>
            
        </header>
    );
}

export default Header;