import { Link } from "react-router-dom"

export default function ProductCard({ product }) {

    const slug = product.title.toLowerCase().concat("_", product.id).trim().replaceAll(" ", "_")

    return <Link to={`/products/${slug}`} state={{
        product: product
    }}>
        <div className="bg-white w-[300px]  rounded-xl space-y-2.5 flex flex-col justify-between border">
            <img src={product.thumbnail} alt={product.title} />
            <div className="space-y-2.5 p-2.5 flex flex-col">
                <div>
                    <h1 className="font-bold text-xl line-clamp-1">{product.title}</h1>
                    <p className="text-slate-400 line-clamp-2 text-sm">{product.description}</p>
                </div>
                <span className="font-bold text-lg text-green-600">{(product.price * 125).toLocaleString("en", {
                    style: "currency",
                    currency: "KES"
                })}
                </span>
            </div>
        </div>
    </Link>
}