import { fetchProductsFromCanister } from "../functions/fetchProductsFromCanister";
import { useQuery } from "react-query";
import { toast } from 'react-toastify';

export const useCanisterProductsQuery = () => {
    const { data, error, isFetching } = useQuery(['products'], fetchProductsFromCanister);
    if(error) {
        toast.error(error.message)
    }
    return {
        data, 
        error, 
        isFetching
    }
}