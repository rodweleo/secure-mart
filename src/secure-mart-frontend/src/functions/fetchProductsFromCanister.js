import BackendActor from "../utils/BackendActor";

export const fetchProductsFromCanister = async () => {    
    const response = await BackendActor.get_products();
    const products = JSON.parse(response).products;
    return products;
}