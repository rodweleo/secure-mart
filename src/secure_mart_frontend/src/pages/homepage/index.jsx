import Loader from "../../components/loader"
import ProductList from "../../components/products-list"
import { useCanisterProductsQuery } from "../../react-queries/useCanisterProductsQuery"

export default function Homepage() {
    const { data, error, isFetching } = useCanisterProductsQuery()
    return <main>
        {error && <div>{error.message}</div>}
        {isFetching && <Loader size={50} />}
        {data && <ProductList products={data} />}
    </main>
}