import React from 'react';
import { useSelector } from 'react-redux'


function OrdersList() {
    const ordersList = useSelector(store => store.ordersList);
    console.log(ordersList)

    return (
        <div>
            <table>
                <tbody>{ordersList.map((orders, index) =>
                    <td key={index}>{orders.customer_name}, {orders.time}, {orders.total}</td>)}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersList;
