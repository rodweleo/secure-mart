import moment from "moment"
import { Link } from "react-router-dom";

export default function OrderListItem({ order, index }) {
    return (
        <tr key={order.id}>
            <td className="p-4">{index + 1}</td>
            <td><Link to={`/orders/${order.id}`} state={{
                order: order
            }} className="text-yellow-500 hover:underline duration-200 transition-all hover:font-semibold">{order.id}</Link></td>
            <td>{order.items.length}</td>
            <td>{order.totalAmount}</td>
            <td><span className="bg-green-200 border border-green-400 rounded-md font-bold w-full px-10 py-1 text-green-500">Completed</span></td>
            <td>{moment(order.orderDate).format("LL")}</td>
            <td>N/A</td>
            <td><span className="bg-green-200 rounded-md font-bold border border-green-400 w-full px-10 py-1 text-green-500">Fulfilled</span></td>
        </tr>
    )
}