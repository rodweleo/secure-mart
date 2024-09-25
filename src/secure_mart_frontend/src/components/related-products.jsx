import useRelatedProductsQuery from "../react-queries/useRelatedProductsQuery"
import Loader from "./loader";
import ProductCard from "./product-card";

export default function RelatedProducts({ product, className }) {
    const { data, error, isFetching } = useRelatedProductsQuery(product.category);

    const products = data ? JSON.parse(data).products : []
    //console.log(products)

    if (isFetching) {
        return <Loader size={50} />
    }
    if (error) {
        return <p className="bg-red-100 p-2.5 rounded-lg text-red-500">{error.message}</p>
    }
    return (
        <ul className={className}>
            {
                products.map((product) => (
                    <li key={product.id}><ProductCard product={product} /></li>
                ))
            }
        </ul>
    )
}