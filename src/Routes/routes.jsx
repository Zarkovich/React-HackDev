import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import Checkout from "../components/Checkout/Checkout";

function ReoutesPages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    );
}
export default ReoutesPages;