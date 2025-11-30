import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/storefront/Home";
import Products from "./pages/storefront/Product";
import About from "./pages/storefront/About";
import ContactUs from "./pages/storefront/Contact-us";
import Cart from "./pages/storefront/Cart";
import Wishlist from "./pages/storefront/Wishlist";
import LoginPage from "./pages/auth/Login";
import SignUpPage from "./pages/auth/SignUp";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
