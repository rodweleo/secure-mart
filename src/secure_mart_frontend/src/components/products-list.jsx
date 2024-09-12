import ProductCard from "./product-card"
export default function ProductList({products}){
    return (
        <section>
            <ul className="flex flex-wrap gap-5">
                {products.map((product) => (
                    <li key={product.title}>
                        <ProductCard product={product}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}