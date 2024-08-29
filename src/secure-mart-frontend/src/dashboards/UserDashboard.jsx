import { Routes, Route } from "react-router-dom"
import MainHeader from "../components/main-header"
import Homepage from "../pages/homepage"
import CartPage from "../pages/cart/page"
import MyOrders from "../pages/my-orders/page"
import OrderPage from "../pages/my-orders/[id]/page"
import ProductPage from "../pages/products/[id]/page"
export default function UserDashboard() {
    return (
        <main className="min-h-screen bg-slate-100">
            <MainHeader />
            <section className="container  p-5">
                <Routes>
                    <Route path="/">
                        <Route index element={<Homepage />} />
                        <Route path="cart" element={<CartPage />} />
                        <Route exact path="products/:id" element={<ProductPage />} />
                        <Route path="orders">
                            <Route index element={<MyOrders />} />
                            <Route path=":id" element={<OrderPage />} />
                        </Route>
                    </Route>
                </Routes>
            </section>
        </main>
    )
}