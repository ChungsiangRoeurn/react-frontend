const Products = () => {
  return (
    <main className="max-w-[1220px] mx-auto px-4 py-10 justify-center flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl font-medium text-[#272343] mb-6">All Products</h1>

      {/* Tabs */}
      <div className="flex gap-6 border-b pb-4 mb-10 text-sm text-gray-500">
        <button className="text-[#007580] font-medium border-b-2 border-[#007580] pb-1">
          ALL
        </button>
        <button>NEWEST</button>
        <button>TRENDING</button>
        <button>BEST SELLERS</button>
        <button>FEATURED</button>
      </div>
    </main>
  );
};

export default Products;
