import { useQuery } from "react-query"
import fetchCart from "../functions/fetchCart";

const useCartQuery = () => {

    const { data , isFetching, error} = useQuery("cart", fetchCart)


    return {
        data, 
        isFetching,
        error
    }
} 

export default useCartQuery