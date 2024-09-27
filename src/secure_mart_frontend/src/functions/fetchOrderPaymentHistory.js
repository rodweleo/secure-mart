import BackendActor from "../utils/BackendActor";

export const fetchOrderPaymentHistory = async (orderId) => {
    const response = await BackendActor.getOrderPaymentHistory(orderId)
    return response
}
