import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#2d2d2d] mt-12 border-t">
      <div className="max-w-[1220px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-[#007580] text-3xl">🛍️</span> 1965.Store
          </h2>

          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Premium fashion at affordable prices. Experience the best clothes
            with comfort and style.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-[#007580] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#007580] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#007580] transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-[#007580] cursor-pointer">
              Women Clothes
            </li>
            <li className="hover:text-[#007580] cursor-pointer">Men Clothes</li>
            <li className="hover:text-[#007580] cursor-pointer">
              Kids Clothes
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-[#007580] cursor-pointer">
              Help & Support
            </li>
            <li className="hover:text-[#007580] cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-[#007580] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#007580] cursor-pointer">
              Return Policy
            </li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>

          {/* Email */}
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-[#007580]"
            />
            <button className="bg-[#007580] text-white px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </div>

          {/* Contact */}
          <div className="mt-4 space-y-2 text-gray-600 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +855 97 507 3775
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> mrchungsiang10@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Steung Meanchey, Phnom Penh, Cambodia
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} — Designed & Developed by JIANGSUNG
      </div>
    </footer>
  );
}
