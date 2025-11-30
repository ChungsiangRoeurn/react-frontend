import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Package,
  Plus,
  Settings,
  ShoppingBag,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: BarChart3 },
    { name: "Products", href: "/dashboard/products", icon: Package },
    { name: "Add Product", href: "/dashboard/products/new", icon: Plus },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleLogout = () => {
    if (onLogout) onLogout(); // call global logout from context
    localStorage.clear(); // remove token/user
    navigate("/"); // redirect to login page
  };

  return (
    <div className="fixed left-0 top-0 w-64 min-h-screen bg-gradient-to-br from-[#1E1B3C] to-[#272343] text-white flex flex-col justify-between shadow-2xl z-20 border-r border-[#303254]">
      <div>
        {/* Logo Section */}
        {/* Increased vertical padding, refined horizontal padding to match nav links */}
        <div className="flex items-center space-x-2 py-8 px-5">
          <div className="bg-[#FFD803] w-9 h-9 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-[#272343] font-black text-xl">S</span>
          </div>
          <span className="text-xl font-extrabold tracking-wide">
            1965<span className="text-[#FFD803]">.Store</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 px-4">
          {/* Refined text color and margin */}
          <div className="text-xs uppercase font-bold text-gray-400 mb-2 tracking-widest px-1">
            Menu
          </div>

          {navigation.map((item, key) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={key}
                to={item.href}
                // Refined classes for subtle effect and cleaner active state
                className={({ isActive }) =>
                  `flex items-center space-x-3 py-2.5 px-3 rounded-lg transition-all duration-200 group 
                  ${
                    isActive
                      ? "bg-[#FFD803] text-[#272343] font-bold shadow-md" // Brighter, more defined active state
                      : "text-gray-300 hover:bg-[#303254] hover:text-white"
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-4 mb-6">
        {/* Separator line for visual break */}
        <div className="border-t border-[#303254] mb-4"></div>

        {/* Logout Button: Made the background less aggressive, relies on hover */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-start w-full py-2.5 px-3 rounded-lg bg-[#303254] hover:bg-red-600 transition-colors duration-200 text-white font-medium shadow-lg"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
