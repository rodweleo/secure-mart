import CartListItem from "./cart-list-item";

export default function CartListItems({ cartItems }) {


    return (
        <table className="w-full border">
            <thead className="text-left text-slate-400 text-sm">
                <tr className="w-full">
                    <th className="p-4">#</th>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price (@)</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className="w-full">
                {cartItems ? cartItems.map((cartItem, index) => (
                    <CartListItem cartItem={cartItem} index={index} />
                )) : null}
            </tbody>
        </table>
    )
}