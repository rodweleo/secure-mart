import BackendActor from "../utils/BackendActor";

export const fetchProductsFromCanister = async () => {
    const products = await BackendActor.get_products();
    if (typeof products === "object") {
        return products;
    }
    return []
}