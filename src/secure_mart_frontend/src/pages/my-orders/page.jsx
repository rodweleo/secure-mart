import Loader from "../../components/loader";
import OrderList from "../../components/order-list";
import useUserOrdersQuery from "../../react-queries/useUserOrdersQuery";

export default function MyOrders() {

    const { data, isFetching } = useUserOrdersQuery();

    return <main className="p-5 space-y-5 bg-white">
        <h1 className="font-bold text-2xl flex items-center">My Orders [{data ? data.length : 0}] {isFetching ? <Loader size={20} /> : null}</h1>
        <div className="overflow-x-auto">
            {data ? <OrderList orders={data} /> : null}
        </div>
    </main>
}