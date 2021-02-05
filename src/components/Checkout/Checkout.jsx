import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Checkout() {
    const dispatch = useDispatch();
    const history = useHistory();
    //Get pizzas from the store
    const pizzas = useSelector(store => store.pizzaCart);
    //add up cart
    const addUpCart = (cart) => {
        let sum = 0;
        for (const pizza of cart) {
            sum += Number(pizza.price);
        }
        return sum.toFixed(2);
    }
    const emptyCart = () => {
        console.log(pizzas)
        dispatch ({type: 'SET_ORDERS', payload: pizzas})
        dispatch ({type: 'CLEAR_CART'})
        history.push('/')
    }
       //grabs the pizza list from the store
    const customerInfo = useSelector(store => store.customerInfo),
 
    return (
        <>
            <h2>Step 3: Checkout</h2>
            <div id="dataFromState">
                <div id="address">
                    <address>
                        <p><span>{customerInfo.customer_name}</span></p>
                        <p><span>{customerInfo.street_address}</span></p>
                        <p>{customerInfo.city}{customerInfo.zip}</p></address>
                </div>
                <div>
                    <span id="pickupType">{customerInfo.type= true ? (<span>For Delivery</span>) : (<span>Pick-Up</span>)}
                    </span>
                </div>
            </div>
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                    <tr>
                        <th>
                            Name
                    </th>
                        <th>
                            Cost
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas.map((pizza) => (
                        <tr key={pizza.id}>
                            <CheckoutItem
                                pizza={pizza}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="totalDiv">
                <span id="checkoutPrice">Total: ${addUpCart(pizzas)}</span>
            </div>

            <button
                onClick={() => emptyCart()}
                className="btn-lg btn-info"
                type="button">
                Checkout
            </button>
        </>
    );
}

export default Checkout;