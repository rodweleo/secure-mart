import { useQuery } from "react-query"
import fetchRelatedProducts from "../functions/fetchRelatedProducts";
const useRelatedProductsQuery = (productCategory) => {

    const fetchProducts = () => {
        return fetchRelatedProducts(productCategory);
    }
    const { data, isFetching, error } = useQuery("relatedProducts", fetchProducts)


    return {
        data,
        isFetching,
        error
    }
}

export default useRelatedProductsQuery