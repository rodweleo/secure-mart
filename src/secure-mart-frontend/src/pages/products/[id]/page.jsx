import { useLocation } from "react-router-dom"
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../state-management/slices/cartSlice";
import { toast } from "react-toastify"

export default function ProductPage() {
    const location = useLocation()
    const { product } = location.state;
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const decreaseQuantity = () => {
        if (quantity === 0) {
            return;
        }
        setQuantity((prev) => prev - 1)
    }



    const addToCart = async () => {
        if (quantity === 0) {
            return;
        }
        try {
            const newProduct = {
                id: product.id,
                title: product.title,
                price: product.price,
                imageUrl: product.thumbnail,
                quantity: quantity
            }
            dispatch(addProductToCart(newProduct))
        } catch (e) {
            console.log(e)
            toast.error(e.message, {
                theme: "colored"
            })
        }
    }


    return (
        <main>
            <section className="bg-white h-fit flex p-5 border">
                <div className="grid place-items-center">
                    <img src={product.images[0]} width="500px" />
                    <ul className="flex flex-wrap gap-5">
                        {
                            product.images.map((image, index) => (
                                <li key={index}><img src={image} className="border rounded-md" width="100px" /></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-5 flex flex-col justify-between">
                    <header className="space-y-1">
                        <h1 className="text-5xl font-bold">{product.title}</h1>
                        <p className="text-lg text-slate-500">{product.description}</p>
                        <div className="font-bold text-4xl text-green-500">${product.price}</div>
                    </header>

                    <div className="flex items-end justify-between">
                        <div className="flex gap-10">
                            <div className="flex items-center gap-4">
                                <button onClick={decreaseQuantity} disabled={quantity === 0} className="disabled:cursor-not-allowed disabled:bg-slate-300 rounded-md active:scale-95 bg-yellow-500 hover:bg-yellow-400 text-white p-2"><Minus /></button>
                                <span className="font-bold text-xl">{quantity}</span>
                                <button onClick={increaseQuantity} className="rounded-md active:scale-95 bg-yellow-500 hover:bg-yellow-400 text-white p-2"><Plus /></button>
                            </div>
                            <button onClick={addToCart} className="active:scale-95 bg-yellow-500 text-white px-10 hover:bg-yellow-400 rounded-md font-semibold flex items-center gap-2"><ShoppingCart /> Add To Cart</button>
                        </div>
                        <img src={product.meta.qrCode} alt={product.title} className="p-1 border border-yellow-500" />
                    </div>
                </div>
            </section>
        </main>
    )
}