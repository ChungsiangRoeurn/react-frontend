import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import ContactUs from "./pages/Contact-us";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
