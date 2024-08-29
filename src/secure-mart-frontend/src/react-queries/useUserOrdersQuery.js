import { useQuery } from "react-query"
import fetchUserOrders from "../functions/fetchUserOrders";
import BackendActor from "../utils/BackendActor";

const useUserOrdersQuery = () => {

    const queryOptions = {
        refetchIntervalInBackground: true,
        refetchInterval: 5000
    }

    const { data , isFetching, error} = useQuery(["orders"], async () => {
        const customerPrincipal = await BackendActor.whoami();
        return fetchUserOrders(customerPrincipal);
    }, queryOptions)
    
    return {
        data, 
        isFetching,
        error
    }
} 

export default useUserOrdersQuery