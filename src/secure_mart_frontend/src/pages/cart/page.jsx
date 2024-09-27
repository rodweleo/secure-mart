import CartListItems from "../../components/cart-list-items";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import useCartQuery from "../../react-queries/useCartQuery";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify"
import { v4 as uuidv4 } from 'uuid';
import BackendActor from "../../utils/BackendActor";

export default function CartPage() {
    const { data } = useCartQuery()
    const [isOpen, setOpen] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);
    const navigate = useNavigate()

    const cart = data ? data : []

    const amount = cart.reduce((sum, ele) => {
        if (ele.quantity > 1) {
            return sum += (ele.price * Number(ele.quantity))
        } else {
            return sum += ele.price
        }
    }, 0)

    const deposit = 0.6 * amount;
    const monthlyInstallment = Number(((amount - deposit) / 3).toPrecision(4));
    const createOrder = async () => {
        setIsOrdering(true)
        try {

            const activeUser = await BackendActor.whoami();

            const response = await BackendActor.createOrder(uuidv4(), data, "INCOMPLETE", "Lipa Mdogo Mdogo", 3, monthlyInstallment, amount, new Date().toLocaleString(), activeUser);
            toast.success(response, {
                theme: "colored"
            })

            setIsOrdering(false);

        } catch (e) {
            toast.error(e.message)
            setIsOrdering(false);
        }


        // clear the cart after making the order
        await BackendActor.clearUserCart(activeUser);
        navigate("/orders", {
            replace: true
        })

    }




    return (
        <main className="flex gap-5 flex-wrap h-full">
            <section className="w-full p-5 space-y-5 justify-between flex flex-col bg-white border rounded-lg">
                <header className="flex justify-between font-bold text-xl sm:text-2xl">
                    <h1>Shopping Cart</h1>
                    <span>{cart.length} Item{cart.length > 1 ? "s" : ""}</span>
                </header>
                <div className="overflow-x-auto">
                    <CartListItems cartItems={cart} />
                </div>
                <Link to="/" className="w-fit flex items-center gap-1 font-semibold text-yellow-500 text-sm hover:underline hover:gap-2 duration-300 ease-in-out transition-all"><FaArrowLeftLong className="h-fit mt-[2px]" /> Continue Shopping</Link>
            </section>
            {data ? <section className="bg-white border rounded-lg w-full max-w-xs p-5 flex flex-col justify-between h-fit space-y-5">
                <header className="space-y-2.5">
                    <h1 className="flex justify-between font-bold text-xl sm:text-2xl">Order Summary</h1>
                    <hr className="bg-slate-300 h-0.5 w-full" />
                </header>
                <div className="w-full space-y-5">
                    <div className="flex justify-between">
                        <h1 className="text-slate-500">Total Cost</h1>
                        <p className="font-bold">${(amount).toPrecision(4)}</p>
                    </div>
                    <button onClick={() => setOpen(true)} disabled={cart.length === 0} className="disabled:bg-slate-200 disabled:cursor-not-allowed w-full bg-yellow-500 hover:bg-yellow-400 py-4 rounded-lg text-white font-semibold active:scale-95">CHECKOUT</button>
                </div>
            </section> : null
            }

            {
                isOpen ? <section className="fixed inset-0 z-50 bg-black w-full h-full bg-opacity-70 grid place-items-center p-5">
                    <div className="bg-white w-full max-w-[500px] h-fit rounded-xl shadow-lg shadow-slate-700">
                        <header className="p-5 flex items-center justify-between">
                            <h1 className="font-bold text-2xl">Payment Methods</h1>
                            <button className="text-red-500 hover:text-red-600" onClick={() => setOpen(false)}><X /></button>
                        </header>
                        <hr />
                        <div className="p-5">

                            <ul>
                                <li>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-xl">Lipa Mdogo Mdogo</h3>
                                        <p className="text-lg">You'll pay a <strong>Deposit</strong> which is <strong>60%</strong> of the <strong>Total Order Price</strong> and the remainder in <strong>Monthly Installments</strong> upto 3 months.</p>
                                        <table className="w-full">
                                            <tr>
                                                <th className="py-1 font-normal text-slate-500">Deposit</th>
                                                <td className="text-right font-bold">${deposit}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1 font-normal text-slate-500">Months</th>
                                                <td className="text-right font-bold">3</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1 font-normal text-slate-500">Monthly Installments ($)</th>
                                                <td className="text-right font-bold">${monthlyInstallment}</td>
                                            </tr>
                                        </table>
                                        <button onClick={createOrder} disabled={isOrdering} className="disabled:bg-slate-200 disabled:cursor-not-allowed w-full bg-yellow-500 py-4 rounded-lg text-white font-semibold active:scale-[0.99] transition-all duration-200 ease-in-out text-xl hover:bg-yellow-400">Pay ${deposit}</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section> : null
            }
        </main >
    )
}