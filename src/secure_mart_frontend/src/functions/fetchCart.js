import BackendActor from "../utils/BackendActor";

const fetchCart = async () => {
    const principal = await BackendActor.whoami();
    const response = await BackendActor.getUserCart(principal)

    if (response.length > 0) {
        return response[0].cart

    } else {
        return []
    }
}

export default fetchCart;