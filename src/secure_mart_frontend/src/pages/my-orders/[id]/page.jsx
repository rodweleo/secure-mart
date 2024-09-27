import { useLocation, useNavigate, useParams } from "react-router-dom"
import moment from "moment"
import { ArrowLeft } from "lucide-react";
import { OrderPaymentHistory } from "../../../components/order-payment-history";
import { Badge } from "../../../components/badge";
export default function OrderPage() {
    const { id } = useParams()
    const location = useLocation()
    const { order } = location.state;
    const navigate = useNavigate()

    // console.log(order)
    return <main className="space-y-5 w-full">
        <section className="py-10 px-5 space-y-5 w-full bg-white h-fit rounded-lg">
            <header className="flex items-center gap-4">
                <button onClick={() => navigate(-1)} className="active:scale-95 p-4 grid place-items-center hover:bg-slate-100 rounded-md h-full"><ArrowLeft /></button>
                <div className="space-y-4">
                    <h1 className="font-bold text-4xl flex items-center gap-2.5">  Order ID: {id}</h1>
                    <div className="font-semibold text-xl font-semibold flex items-center justify-between">
                        <div><span className="text-gray-400">Order Date:</span> <span>{moment(order.orderDate).format("LL")}</span></div>
                        <div><span>Payment Status:</span> <span className={`${order.paymentStatus === "COMPLETED" ? "bg-green-100 border-green-400 text-green-500" : "bg-yellow-100 border-yellow-400 text-yellow-500"} border  rounded-md font-bold w-full px-10 py-1 `}>{order.paymentStatus}</span></div></div>
                </div>
            </header>
            <hr></hr>
            <div className="space-y-5">
                <h1 className="font-semibold text-2xl">Products [ {order.items.length} ]</h1>
                <table className="w-full">
                    <tbody className="w-full">
                        {
                            order.items.map((item, index) => (
                                <tr className="w-full" key={index}>
                                    <td className="w-full">
                                        <div className="flex items-center gap-5 w-full">
                                            <img src={item.imageUrl} width="100px" alt={item.title} className="bg-slate-100 rounded-lg border border-slate-300" loading="lazy" />
                                            <div className="w-full space-y-2.5">
                                                <h1 className="font-bold text-xl flex items-center justify-between">{item.title} <span>${Number(item.quantity) * item.price}</span></h1>
                                                <p className="w-full flex justify-end text-gray-400 text-xl font-normal">Qty: {Number(item.quantity)}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <hr></hr>
            <div className="flex justify-end">
                <div className="w-[500px] space-y-2.5">
                    <h1 className="text-2xl font-semibold">Order Summary</h1>
                    <hr />
                    <table id="order-summary-table">
                        <tbody>
                            <tr>
                                <th>SubTotal</th>
                                <td className="font-semibold">${order.items.reduce((sum, ele) => {
                                    if (ele.quantity > 1) {
                                        return sum += (Number(ele.quantity) * ele.price)
                                    } else {
                                        return sum += ele.price
                                    }
                                }, 0)}</td>
                            </tr>
                            <tr className="text-gray-400">
                                <th>Amount Paid</th>
                                <td>0</td>
                            </tr>
                            <tr className="text-gray-400">
                                <th>Tax</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th >Total</th>
                                <td className="font-bold">${order.totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="py-10 px-5 space-y-5 w-full bg-white h-fit rounded-lg">
            <h1 className="font-bold text-2xl">Payment History</h1>
            <OrderPaymentHistory order={order} />
        </section>
    </main>
}