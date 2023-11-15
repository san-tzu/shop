import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Payment from "./components/Payment";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/products/' element={<ProductList />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/payment' element={<Payment />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
