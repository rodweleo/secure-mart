import BackendActor from "../utils/BackendActor";

const fetchRelatedProducts = async (productCategory) => {
    const response = await BackendActor.getCategoryProducts(productCategory);
    return response
}

export default fetchRelatedProducts;