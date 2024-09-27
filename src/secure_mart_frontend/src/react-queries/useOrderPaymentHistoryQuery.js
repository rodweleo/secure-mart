import { useQuery } from "react-query"
import { fetchOrderPaymentHistory } from "../functions/fetchOrderPaymentHistory";

const useOrderPaymentHistoryQuery = (order) => {

    const { data, isFetching, error } = useQuery("orderPaymentHistory", () => fetchOrderPaymentHistory(order.id))

    return {
        data,
        isFetching,
        error
    }
}

export default useOrderPaymentHistoryQuery