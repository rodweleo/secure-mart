export default function CartListItem({ cartItem, index}){

    const price = Number(cartItem.price);
    const quantity = Number(cartItem.quantity);

    return (
        <tr key={cartItem.title} className="border">
            <td className="p-5">{index + 1}</td>
            <td>
                <div className="flex gap-1 items-center">
                    <img src={cartItem.imageUrl} width="50px"/>
                    <h1 className="font-semibold text-lg">{cartItem.title}</h1>
                </div>
            </td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{price * quantity}</td>
        </tr>
    )
}