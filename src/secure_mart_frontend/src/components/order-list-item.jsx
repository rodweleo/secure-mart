import moment from "moment"
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import BackendActor from "../utils/BackendActor";
import useOrderPaymentHistoryQuery from "../react-queries/useOrderPaymentHistoryQuery";
import { X } from "lucide-react"
export default function OrderListItem({ order, index }) {

    const [showDialog, setShowDialog] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const { data } = useOrderPaymentHistoryQuery(order)
    const makeInstallmentPayment = () => {
        setShowDialog(true)
    }

    //calculating the total amount paid in installments
    const totalAmountPaid = data ? data.reduce((sum, ele) => {
        return sum += ele.amount
    }, 0) : 0

    // console.log(order)


    const payMonthlyInstallment = async () => {
        try {
            setIsProcessing(true)
            const activeUser = await BackendActor.whoami();
            const res = await BackendActor.makeOrderInstallmentPayment(order.id, activeUser, order.monthlyInstallmentPayment, new Date().toLocaleString(), "Installment", data.length)
            toast.success(res)
        } catch (e) {
            toast.error(e.message)
        } finally {
            setIsProcessing(false)
        }
    }


    return (
        <>
            <tr key={order.id}>
                <td className="p-4">{index + 1}</td>
                <td><Link to={`/orders/${order.id}`} state={{
                    order: order
                }} className="text-yellow-500 hover:underline duration-200 transition-all hover:font-semibold">{order.id}</Link></td>
                <td>{order.items.length}</td>
                <td>{order.totalAmount}</td>
                <td>{order.modeOfPayment}</td>
                <td><span className={`${order.paymentStatus === "COMPLETED" ? "bg-green-100 border-green-400 text-green-500" : "bg-yellow-100 border-yellow-400 text-yellow-500"} border  rounded-md font-bold w-full px-10 py-1 `}>{order.paymentStatus}</span></td>
                <td>{moment().format("LLL")}</td>
                {
                    order.paymentStatus === "INCOMPLETE" ? <td>
                        <button onClick={makeInstallmentPayment} className="active:scale-[0.95] bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400">Make Installment Payment</button>
                    </td> : null
                }
            </tr>

            {
                showDialog && <dialog open className="fixed inset-0 bg-black z-50 w-full h-full bg-opacity-50 grid place-items-center">
                    <div className="bg-white w-[500px] rounded-xl ">
                        <div className="p-5 flex items-center justify-between">
                            <h1 className="font-bold text-xl">Make Installment Payment</h1>
                            <button onClick={() => setShowDialog(false)} className="hover:text-red-500 hover:rotate-10 transition-all duration-300"><X /></button>
                        </div>
                        <hr />
                        <div className="p-5 space-y-5">
                            <table id="order-payment-table">
                                <tbody>
                                    <tr>
                                        <th>Total Order Amount</th>
                                        <td>${order.totalAmount}</td>
                                    </tr>
                                    <tr>
                                        <th>Monthly Installments</th>
                                        <td>{Number(order.monthlyInstallments)}</td>
                                    </tr>
                                    <tr>
                                        <th>Balance</th>
                                        <td>{order.totalAmount - totalAmountPaid}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <button disabled={isProcessing} onClick={payMonthlyInstallment} className="w-full disabled:bg-slate-300 disabled:cursor-not-allowed active:scale-[0.95] bg-yellow-500 text-white text-xl py-4 rounded-md hover:bg-yellow-400 font-bold">Pay ${order.monthlyInstallmentPayment}</button>

                        </div>
                    </div>
                </dialog>
            }
        </>
    )
}