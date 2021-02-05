import React from 'react';
import { useSelector } from 'react-redux'


function OrdersList() {
    const ordersList = useSelector(store => store.ordersList);
    console.log(ordersList)

    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Time Placed
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Cost
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ordersList.map((orders, index) =>
                    <tr>
                    <td key={index}>{orders.customer_name}</td>
                    <td>{moment(orders.time).calendar()}</td>
                    <td>{orders.type}</td>
                    <td>{orders.total}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersList;
