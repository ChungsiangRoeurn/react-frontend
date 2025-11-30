import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#272343] text-white text-[12px] md:text-[13px] py-2">
        <div className="max-w-[1220px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Check className="size-4" />
            <span>Free Shipping On All Orders Over $50</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1">
              Eng <ChevronDown className="size-4" />
            </button>
            <span className="hidden md:block">|</span>
            <button>Need Help</button>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-[#F0F2F3] py-4">
        <div className="max-w-[1220px] mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-[22px] md:text-[25px] font-normal text-[#272343]"
          >
            🛋️ 1965.Store
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block relative w-full">
            <input
              type="text"
              placeholder="Search here"
              className="w-full text-[15px] p-2 pl-12 border border-gray-200 rounded-lg focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
          </div>

          {/* Icons */}
          <div className="flex justify-end items-center gap-4 md:gap-5">
            <Link
              to="/cart"
              className="relative bg-white py-2 px-3 rounded-lg flex items-center gap-2"
            >
              <ShoppingCart className="size-5 text-gray-700" />
              <span className="hidden sm:inline text-[12px]">Cart</span>
              <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/wishlist" className="relative bg-white p-2 rounded-lg">
              <Heart className="size-5 text-gray-700" />
            </Link>
            <Link to="/login" className="relative bg-white p-2 rounded-lg">
              <User className="size-5 text-gray-700" />
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 mt-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search here"
              className="w-full text-[15px] p-2 pl-12 border border-gray-200 rounded-lg focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="max-w-[1220px] mx-auto px-4 flex justify-between items-center py-2">
          <nav className="overflow-x-auto no-scrollbar">
            <ul className="flex items-center gap-6 whitespace-nowrap">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-medium text-[14px] md:text-[15px] text-[#007580] hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="text-[#007580] text-[14px] hidden md:block">
            Contact: <span className="font-medium">(855) 967-073-775</span>
          </span>
        </div>
      </div>
    </header>
  );
}
