import BackendActor from "../utils/BackendActor";

const fetchCart = async () => {
    const principal = await BackendActor.whoami();
    const response = await BackendActor.getUserCart(principal)
    return response
}

export default fetchCart;