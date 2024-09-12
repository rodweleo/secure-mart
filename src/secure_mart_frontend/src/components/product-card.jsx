import { Link } from "react-router-dom"
import convertUSDToKsh from "../functions/convertUSDToKsh"
export default function ProductCard({ product }) {

    const slug = product.title.toLowerCase().concat("_", product.id).trim().replaceAll(" ", "_")

    return <Link to={`/products/${slug}`} state={{
        product: product
    }}>
        <div className="bg-white w-[300px]  rounded-lg space-y-2.5 flex flex-col justify-between border shadow-md hover:shadow-lg hover:scale-[1.0075] duration-300">
            <img src={product.thumbnail} alt={product.title} className="size-auto" />
            <div className="space-y-2.5 p-2.5 flex flex-col">
                <div>
                    <h1 className="font-bold text-2xl text-wrap line-clamp-1">{product.title}</h1>
                    <p className="text-slate-400 line-clamp-2 text-md">{product.description}</p>
                </div>
                <span className="font-bold text-2xl text-green-600">{convertUSDToKsh(product.price)}
                </span>
            </div>
        </div>
    </Link>
}