import './CheckoutItem.css';

function CheckoutItem({pizza}) {
    return(
        <>
        <td>
            {pizza.name}
        </td>
        <td>
            <span>${pizza.price}</span>
        </td>
        </>
    );
}

export default CheckoutItem;