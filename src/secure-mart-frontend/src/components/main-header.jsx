import { ShoppingCart, User } from "lucide-react";
import SearchBox from "./search-box";
import { useAuth } from "../use-auth-client"
import { Link, useNavigate } from "react-router-dom"
import useCartQuery from "../react-queries/useCartQuery";
import { useState } from "react";

export default function MainHeader() {
    const { logout } = useAuth();
    const navigate = useNavigate()
    const { data, isFetching } = useCartQuery()
    const [isOpen, setIsOpen] = useState(false)

    const navigateToMyOrdersPage = () => {
        setIsOpen(false);
        navigate("/orders")
    }

    return (
        <header className='h-20 bg-white flex items-center px-20 shadow-md shadow-slate-200 sticky top-0 z-50 justify-between'>
            <Link to="/" className='font-bold text-2xl'><span className='text-yellow-500'>Secure</span><span>Mart</span></Link>
            <SearchBox />
            <ul className="flex gap-5">
                <li>
                    <Link to="/cart" className="active:scale-90 h-full relative text-yellow-500 flex gap-3">
                        <div className="relative">
                            <ShoppingCart />
                            <span className='absolute -top-3 -right-3 font-semibold size-6 flex items-center justify-center text-white bg-yellow-500 border-2 border-white rounded-[50%]'>{isFetching ? null : data.length}</span>
                        </div>
                        <span className="text-lg">Cart</span>
                    </Link>
                </li>
                <div className="relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex border size-7 p-1 flex items-center justify-center bg-slate-100 rounded-full active:scale-95"><User className="text-slate-500 font-semibold" /> </button>
                    {isOpen ? <ul className="text-left border space-y-3 w-[150px] absolute bg-white rounded-md p-2.5 right-0 mt-5">
                        <li><button className="w-full text-left hover:bg-slate-200 px-5 py-2 rounded-md hover:text-slate-600 font-semibold" onClick={navigateToMyOrdersPage}>My Orders</button></li>
                        <li><button className="bg-red-200 w-full text-left hover:bg-red-300 px-5 py-2 rounded-md text-red-500 hover:text-red-600 font-semibold" onClick={logout}>Logout</button></li>
                    </ul> : null}
                </div>

            </ul>
        </header>
    )
}