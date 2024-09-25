import { useQuery } from "react-query"
import fetchCart from "../functions/fetchCart";

const useCartQuery = () => {

    const queryOptions = {
        refetchIntervalInBackground: true,
        refetchInterval: 5000
    }

    const { data , isFetching, error} = useQuery("cart", fetchCart, queryOptions)
    

    return {
        data, 
        isFetching,
        error
    }
} 

export default useCartQuery