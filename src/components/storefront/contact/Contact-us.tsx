import { useEffect, useState, type ChangeEvent } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function Contact() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const getData = async (): Promise<void> => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");

      const data: Product[] = await res.json();
      setProducts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <input
        className="border px-3 py-2 mb-6 w-full max-w-md"
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearch}
      />

      {filteredProducts.length === 0 && <p className="text-gray-500">No products found</p> }

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <div className="h-40 flex items-center justify-center mb-4">
              <img
                src={p.image}
                alt={p.title}
                className="max-h-full object-contain"
              />
            </div>

            <h2 className="text-lg font-semibold mb-2 truncate">
              {p.title}
            </h2>

            <p className="text-sm text-gray-500 mb-3 line-clamp-3">
              {p.description}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-indigo-600 font-bold text-lg">
                ${p.price}
              </span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {p.category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
