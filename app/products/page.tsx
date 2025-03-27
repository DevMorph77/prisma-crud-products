import { prisma } from "@/lib/db";
import Link from "next/link";
import { createPost } from "../actions/actions";

export default async function Products() {
  const products = await prisma.product.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          🛍️ Product List
        </h1>

        {/* Product List */}
        {products.length === 0 ? (
          <p className="text-center text-gray-600">No products available.</p>
        ) : (
          <ul className="space-y-4 mb-8">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-medium mt-2">
                  💵 ${product.price}
                </p>

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
        <form
          action={createPost} // Next.js server action
          className="mt-8 p-6 bg-gray-100 shadow-md rounded-lg border"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            ➕ Add New Product
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-3 border text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            required
          />

          <textarea
            name="description"
            placeholder="Product Description"
            className="w-full p-3 border text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            rows={4}
            required
          ></textarea>

          <input
            name="price"
            type="number"
            placeholder="Price (USD)"
            className="w-full p-3 border text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            step="0.01"
            required
          />

          <input
            name="imageUrl"
            type="text"
            placeholder="Image URL"
            className="w-full p-3 border text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            🚀 Add Product
          </button>
        </form>

        <Link href="/" className="text-blue-500 mt-4 inline-block hover:text-blue-600">
          🔙 Go Back Home
        </Link>
      </div>
    </div>
  );
}
