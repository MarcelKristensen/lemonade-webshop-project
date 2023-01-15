import Product from "./pages/Product";
import { ProductProvider } from "./components/ProductContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <ProductProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}
