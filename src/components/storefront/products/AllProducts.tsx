import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Pagination } from "../../ui/pagination";

// Sample data
const products = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  name: "Library Stool Chair",
  price: 20,
  oldPrice: i % 3 === 0 ? 30 : null,
  category: i % 3 === 0 ? "men" : i % 3 === 1 ? "women" : "kids",
  isNew: i % 2 === 0,
  createdAt: new Date(Date.now() - i * 86400000),
  isTrending: i % 2 === 0,
  isBestSeller: i % 3 === 0,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6amXCvoHrttnoD1qN9erWJLKLYZxUk_fUw&s",
}));

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filter products by category
  let filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Filter by tab
  switch (selectedTab) {
    case "newest":
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
      break;
    case "trending":
      filteredProducts = filteredProducts.filter((p) => p.isTrending);
      break;
    case "best-sellers":
      filteredProducts = filteredProducts.filter((p) => p.isBestSeller);
      break;
    case "featured":
      filteredProducts = filteredProducts.filter((p) => p.isNew);
      break;
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIdx,
    startIdx + productsPerPage
  );

  const tabs = [
    { key: "all", label: "ALL" },
    { key: "newest", label: "NEWEST" },
    { key: "trending", label: "TRENDING" },
    { key: "best-sellers", label: "BEST SELLERS" },
    { key: "featured", label: "FEATURED" },
  ];

  return (
    <main className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#272343]">
          All Products
        </h1>
        <div className="absolute right-0">
          <Select onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger className="w-[130px] md:w-[180px] text-base md:text:">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="men">Men</SelectItem>
              <SelectItem value="women">Women</SelectItem>
              <SelectItem value="kids">Kids</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-5 border-b py-4 mb-6 text-sm text-gray-500">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`transition pb-1 ${
              selectedTab === tab.key
                ? "text-[#007580] font-medium border-b-2 border-[#007580]"
                : "hover:text-[#007580]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        <AnimatePresence>
          {paginatedProducts.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-60 object-cover"
                    />
                    {p.isNew && (
                      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col gap-2">
                    <p className="text-sm text-gray-500">{p.name}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[#007580] font-semibold text-sm">
                          ${p.price}
                        </span>
                        {p.oldPrice && (
                          <span className="text-xs line-through text-gray-400">
                            ${p.oldPrice}
                          </span>
                        )}
                      </div>

                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full h-8 w-8 flex items-center justify-center"
                      >
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      )}
    </main>
  );
}
