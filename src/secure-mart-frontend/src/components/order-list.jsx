import OrderListItem from "./order-list-item";

export default function OrderList({ orders }) {
    return (
        <table className="w-full border" id="order-list-table">
            <thead>
                <tr className="text-left">
                    <th className="p-4">#</th>
                    <th>Order ID</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Date</th>
                    <th>Delivery</th>
                    <th>Fulfilment</th>
                </tr>
            </thead>
            <tbody className="border">
                {
                    orders.map((order, index) => (
                        <OrderListItem order={order} index={index} />
                    ))
                }
            </tbody>
        </table>
    )
}