import { useLocation, useNavigate, useParams } from "react-router-dom"
import moment from "moment"
import { ArrowLeft } from "lucide-react";

export default function OrderPage() {
    const { id } = useParams()
    const location = useLocation()
    const { order } = location.state;
    const navigate = useNavigate()

    return <main className="py-10 px-5 space-y-5 w-full bg-white h-fit">
        <header className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="active:scale-95 p-4 grid place-items-center hover:bg-slate-100 rounded-md h-full"><ArrowLeft /></button>
            <div className="space-y-2">
                <h1 className="font-bold text-4xl flex items-center gap-2.5">  Order ID: {id}</h1>
                <div className="font-semibold text-xl font-semibold"> <span className="text-gray-400">Order Date</span> <span>{moment(order.orderDate).format("LL")}</span></div>
            </div>
        </header>
        <hr></hr>
        <table className="w-full">
            <tbody className="w-full">
                {
                    order.items.map((item, index) => (
                        <tr className="w-full" key={index}>
                            <td className="w-full p-2">
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
        <hr></hr>
        <section className="flex justify-end">
            <div className="w-[400px] space-y-2.5">
                <h1 className="text-2xl font-semibold">Order Summary</h1>
                <hr />
                <table id="order-summary-table">
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td className="font-semibold">${order.totalAmount}</td>
                        </tr>
                        <tr className="text-gray-400">
                            <th >Delivery</th>
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
        </section>
    </main>
}