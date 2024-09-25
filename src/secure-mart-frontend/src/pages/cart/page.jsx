import CartListItems from "../../components/cart-list-items";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import useCartQuery from "../../react-queries/useCartQuery";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify"
import { v4 as uuidv4 } from 'uuid';
import BackendActor from "../../utils/BackendActor";
import convertUSDToKsh from "../../functions/convertUSDToKsh";

export default function CartPage() {
    const { data } = useCartQuery()
    const [isOpen, setOpen] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);
    const navigate = useNavigate()

    const amount = data ? data[0].cart.reduce((sum, ele) => {
        if (ele.quantity > 1) {
            return sum += (ele.price * Number(ele.quantity))
        } else {
            return sum += ele.price
        }
    }, 0) : 0;

    /*
    const generateJengaAccessToken = async () => {
        try {
            const res = await axios.post("https://uat.finserve.africa/authentication/api/v3/authenticate/merchant", {
                merchantCode: "",
                consumerSecret: ""
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": ""
                }
            })

            return res.data;
        } catch (e) {
            console.log(e)
            return;
        }
    }
    const convertCurrency = async () => {
        const { accessToken } = await generateJengaAccessToken()
        if (!accessToken) {
            console.log("No access token", data)
            return;
        }

        try {
            const res = await axios.post("https://uat.finserve.africa/v3-apis/transaction-api/v3.0/foreignexchangerates", {
                //"accountNumber": "1450160649886",
                countryCode: "KE",
                currencyCode: "USD",
                amount: amount,
                toCurrency: "GBP"
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }*/

    const completeOrder = async () => {
        setIsOrdering(true)

        const orderDate = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate();

        const customerPrincipal = await BackendActor.whoami();

        const response = await BackendActor.createOrder(uuidv4(), data, amount, orderDate, customerPrincipal);
        toast.success(response, {
            theme: "colored"
        })

        setIsOrdering(false);

        //clear the cart after making the order
        await BackendActor.clearCart();
        navigate("/", {
            replace: true
        })

    }

    return (
        <main className="flex gap-5 flex-wrap h-full">
            <section className="w-full p-5 space-y-5 justify-between flex flex-col bg-white border rounded-lg">
                <header className="flex justify-between font-bold text-xl sm:text-2xl">
                    <h1>Shopping Cart</h1>
                    <span>{data ? data.length : 0} Item{data ? data.length > 1 ? "s" : null : null}</span>
                </header>
                <div className="overflow-x-auto">
                    {
                        data ? <CartListItems cartItems={data[0].cart} /> : null
                    }
                </div>
                <Link to="/" className="w-fit flex items-center gap-1 font-semibold text-yellow-500 text-sm hover:underline hover:gap-2 duration-300 ease-in-out transition-all"><FaArrowLeftLong className="h-fit mt-[2px]" /> Continue Shopping</Link>
            </section>
            <section className="bg-white border rounded-lg w-full max-w-xs p-5 flex flex-col justify-between h-fit space-y-5">
                <header className="space-y-2.5">
                    <h1 className="flex justify-between font-bold text-xl sm:text-2xl">Order Summary</h1>
                    <hr className="bg-slate-300 h-0.5 w-full" />
                </header>
                <div className="w-full space-y-5">
                    <div className="flex justify-between">
                        <h1 className="text-slate-500">Total Cost</h1>
                        <p className="font-bold">{convertUSDToKsh(amount)}</p>
                    </div>
                    <button onClick={() => setOpen(true)} className="w-full bg-yellow-500 hover:bg-yellow-400 py-4 rounded-lg text-white font-semibold active:scale-95">CHECKOUT</button>
                </div>
            </section>
            {
                isOpen ? <section className="fixed inset-0 z-50 bg-black w-full h-full bg-opacity-70 grid place-items-center p-5">
                    <div className="bg-white w-full max-w-[500px] h-fit">
                        <header className="p-5 flex items-center justify-between">
                            <h1 className="font-bold text-2xl">Checkout</h1>
                            <button className="text-red-500 hover:text-red-600" onClick={() => setOpen(false)}><X /></button>
                        </header>
                        <hr />
                        <div className="p-5 space-y-5">
                            <table className="w-full text-xl font-bold">
                                <tbody>
                                    <tr className="flex justify-between bg-slate-200 ">
                                        <th className="p-5">Total Items</th>
                                        <td className="p-5">{data ? data.length : null}</td>
                                    </tr>
                                    <tr className="flex justify-between bg-slate-100">
                                        <th className="p-5 ">Total Amount</th>
                                        <td className="p-5">{convertUSDToKsh(amount ? amount : 0)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <footer className="p-5">
                            <button onClick={() => completeOrder()} disabled={isOrdering} className="disabled:bg-slate-200 disabled:cursor-not-allowed w-full bg-yellow-500 py-4 rounded-lg text-white font-semibold active:scale-[0.99] transition-all duration-200 ease-in-out text-xl hover:bg-yellow-400">Complete Order</button>
                        </footer>
                    </div>
                </section> : null
            }
        </main>
    )
}