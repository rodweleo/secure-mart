import CartListItem from "./cart-list-item";

export default function CartListItems({ cartItems}){


    return (
        <table className="w-full border h-fit">
            <thead className="text-left text-slate-400 text-sm">
                <tr >
                    <th className="p-4">#</th>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price (@)</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((cartItem, index) => (
                    <CartListItem cartItem={cartItem} index={index}/>
                ))}
            </tbody>
        </table>
    )
}