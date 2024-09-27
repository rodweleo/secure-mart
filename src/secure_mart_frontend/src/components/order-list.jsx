import OrderListItem from "./order-list-item";

export default function OrderList({ orders }) {
    return (
        <table className="w-full border" id="order-list-table">
            <thead>
                <tr className="text-left text-slate-400">
                    <th className="p-4">#</th>
                    <th>Order ID</th>
                    <th>Items</th>
                    <th>Amount($)</th>
                    <th>Mode of Payment</th>
                    <th>Payment Status</th>
                    <th>Date of Order</th>

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