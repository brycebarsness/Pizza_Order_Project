import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { useSelector, useDispatch } from 'react-redux';

function Checkout() {
    const dispatch = useDispatch();
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
    }
    return (
        <>
            <h2>Step 3: Checkout</h2>
            <div id="dataFromState">
                <div id="address">
                    <address>
                        <p>Mitchell Scott</p>
                        <p>123 Dummy Data drive</p>
                        <p>Fargo, ND 56425</p></address>
                </div>
                <div>
                    <span id="pickupType">For Delivery</span>
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