import useOrderPaymentHistoryQuery from "../react-queries/useOrderPaymentHistoryQuery";
import convertUSDToKsh from "../functions/convertUSDToKsh"
import moment from "moment";

export const OrderPaymentHistory = ({ order }) => {

    const { data } = useOrderPaymentHistoryQuery(order)


    const history = data ? data : []

    return (
        <main className="space-y-4">
            <table className="w-full border">
                <thead>
                    <tr className="text-left">
                        <th className="p-4">#</th>
                        <th>Payment type</th>
                        <th>Month Installment</th>
                        <th>Amount Paid</th>
                        <th>Paid By</th>
                        <th>Date of Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((ele, index) => (
                        <tr className="border">
                            <td className="p-4">{index + 1}</td>
                            <td>{ele.paymentType}</td>
                            <td>{Number(ele.monthInstallment) > 0 ? Number(ele.monthInstallment) : 'N/A'}</td>
                            <td>{ele.amount}</td>
                            <td>{ele.paidBy}</td>
                            <td>{moment(ele.dateOfPayment).format("LLL")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className="flex gap-10">
                <div>
                    <h2 className="font-semibold text-slate-500 text-xl">Total Amount Paid:</h2>
                    <p className="font-bold text-2xl text-green-500">{history.reduce((sum, ele) => {
                        return sum += ele.amount
                    }, 0)}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-slate-500 text-xl">Balance:</h2>
                    <p className="font-bold text-2xl text-red-500">{order.totalAmount - history.reduce((sum, ele) => {
                        return sum += ele.amount
                    }, 0)}</p>
                </div>
            </section>
        </main>
    )
}