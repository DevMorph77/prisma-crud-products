import { prisma } from "@/lib/db";
import Link from "next/link";
import { createPost } from "../actions/actions";

export default async function Products() {
  const products = await prisma.product.findMany();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        🛍️ Product List
      </h1>

      {/* Product List */}
      {products.length === 0 ? (
        <p className="text-center text-black">No products available.</p>
      ) : (
        <ul className="space-y-4 mb-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-black">
                {product.name}
              </h2>
              <p className="text-black">{product.description}</p>
              <p className="text-black font-medium mt-2">${product.price}</p>

              <Link
                href={`/products/${product.id}`}
                className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
              >
                🔍 View Product
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Product Form */}
      <form action={createPost} // Next.js server action
        className="mt-8 p-4 bg-white shadow-md rounded-lg border"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">
          ➕ Add New Product
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          rows={4}
          required
        ></textarea>

        <input
          name="price"
          type="number"
          placeholder="Price (USD)"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          step="0.01"
          required
        />

        <input
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          🚀 Add Product
        </button>
      </form>
    </div>
  );
}
