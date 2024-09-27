import { useLocation } from "react-router-dom"
import { Minus, Plus, Star, StarHalf } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify"
import ProductReviewCard from "../../../components/product-review-card"
import RelatedProducts from "../../../components/related-products";
import convertUSDToKsh from "../../../functions/convertUSDToKsh";
import BackendActor from "../../../utils/BackendActor";

export default function ProductPage() {
    const location = useLocation()
    const { product } = location.state;
    const [selectedProductImage, setSelectedimage] = useState(product.images[0])
    const [quantity, setQuantity] = useState(0);
    const [rating, setRating] = useState(Math.round(product.rating * 2) / 2)
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
            toast.warn("Please select a quantity before adding the product to your cart.")
            return;
        }
        try {
            const principal = await BackendActor.whoami();

            const response = await BackendActor.addProductToCart(Number(product.id), product.title, product.price, quantity, product.thumbnail, principal);
            toast.success(response, {
                theme: "colored"
            })
        } catch (e) {
            console.log(e)
            toast.error(e.message, {
                theme: "colored"
            })
        }
    }

    const displayProductImage = (imageSrc) => {
        setSelectedimage(imageSrc)
    }

    useEffect(() => {
        setSelectedimage(product.images[0])
        setRating(Math.round(product.rating * 2) / 2)
    }, [product])

    // Helper function to render stars based on rating
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i < 6; i++) {
            if (i <= rating) {
                // Full star
                stars.push(<Star key={`star-${i}`} fill={"#ffe234"} color="gold" />);
            } else if (i - 0.5 === rating) {
                // Half star for decimal ratings
                stars.push(<StarHalf key={`star-${i}`} fill={"#ffe234"} color="gold" />);
            }
        }
        return stars;
    };

    return (
        <main className="space-y-5">
            <section className="rounded-xl bg-white w-full h-fit flex flex-wrap gap-10 p-5 border">
                <div className="grid place-items-center">
                    <img src={selectedProductImage} width="500px" />
                    <ul className="flex flex-wrap gap-5">
                        {
                            product.images.map((image, index) => (
                                <li key={index}><button className={`border rounded-md hover:border-yellow-500 ${selectedProductImage === image ? "border-yellow-500" : null}`} onClick={() => displayProductImage(image)}><img src={image} width="100px" /></button></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-5 flex flex-col max-w-2xl justify-between">
                    <header className="space-y-1">
                        <h1 className="text-4xl font-bold">{product.title}</h1>
                        <p className="text-lg text-slate-500">{product.description}</p>
                        <div className="flex items-center gap-4">
                            <ul className="flex gap-1">
                                {renderStars()}
                            </ul>
                            <span className="text-xl text-slate-500 font-medium">{product.reviews.length} reviews</span>
                        </div>

                        <div className="font-bold text-4xl text-green-500">${product.price}</div>
                    </header>

                    <div className="w-full flex flex-wrap gap-10 items-end justify-between">
                        <div className="flex flex-wrap gap-10 w-fit">
                            <div className="flex items-center gap-4">
                                <button onClick={decreaseQuantity} disabled={quantity === 0} className="disabled:cursor-not-allowed disabled:bg-slate-300 rounded-md active:scale-95 bg-yellow-500 hover:bg-yellow-400 text-white p-2"><Minus /></button>
                                <span className="font-bold text-xl">{quantity}</span>
                                <button onClick={increaseQuantity} className="rounded-md active:scale-95 bg-yellow-500 hover:bg-yellow-400 text-white p-2"><Plus /></button>
                            </div>
                            <button onClick={addToCart} className="active:scale-95 bg-yellow-500 text-white px-10 py-2 hover:bg-yellow-400 rounded-md font-semibold flex items-center gap-2"><ShoppingCart /> Add To Cart</button>
                        </div>
                        <img src={product.meta.qrCode} alt={product.title} className="border border-yellow-500 rounded-xl" />
                    </div>
                </div>
            </section>
            <section className="rounded-xl bg-white border p-5 space-y-5">
                <h1 className="font-bold text-2xl">Product Reviews [{product.reviews.length}]</h1>
                <ul className="flex items-center gap-5 flex-wrap">
                    {
                        product.reviews.map((review) => (
                            <li key={review.reviewerEmail}><ProductReviewCard review={review} /></li>
                        ))
                    }
                </ul>
            </section>

            <section className="rounded-xl bg-white border p-5 space-y-5 w-full">
                <h1 className="font-bold text-2xl">You may also like</h1>
                <RelatedProducts product={product} className="flex gap-5 overflow-hidden overflow-x-auto" />
            </section>
        </main>
    )
}