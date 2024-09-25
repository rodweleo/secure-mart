import BackendActor from "../utils/BackendActor";

const fetchCart = async () => {
    const response = await BackendActor.getCart();
    return response
}

export default fetchCart;