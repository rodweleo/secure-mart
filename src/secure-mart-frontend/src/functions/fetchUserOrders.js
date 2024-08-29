import BackendActor from "../utils/BackendActor";

const fetchUserOrders = async (customerPrincipal) => {
    const response = await BackendActor.getUserOrders(customerPrincipal);
    return response
}

export default fetchUserOrders;