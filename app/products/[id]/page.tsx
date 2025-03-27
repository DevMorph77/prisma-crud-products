import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { editPost, deletePost } from "../../actions/actions";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) return <p className="text-center text-white">Product not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <Link
          href="/products/"
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          ⬅️ Go Back
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-800 mt-4">
          {product.name}
        </h1>

        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg shadow-md my-4"
        />

        <p className="text-gray-700 mb-2">
          <strong>💵 Price:</strong> ${product.price}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>📜 Description:</strong> {product.description}
        </p>

        {/* Edit Form */}
        <form
          action={editPost}
          className="mt-6 p-6 bg-gray-100 shadow-md rounded-lg border"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            ✏️ Edit Product
          </h2>

          <input type="hidden" name="id" value={product.id} />

          <input
            type="text"
            name="name"
            defaultValue={product.name}
            placeholder="Product Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 text-gray-800"
          />

          <textarea
            name="description"
            defaultValue={product.description}
            placeholder="Product Description"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 text-gray-800"
            rows={3}
          ></textarea>

          <input
            type="number"
            name="price"
            defaultValue={product.price}
            placeholder="Price (USD)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 text-gray-800"
            step="0.01"
          />

          <input
            type="text"
            name="imageUrl"
            defaultValue={product.imageUrl}
            placeholder="Image URL"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 text-gray-800"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            ✅ Save Changes
          </button>
        </form>

        {/* Delete Button */}
        <form action={deletePost} className="mt-4">
          <input type="hidden" name="id" value={product.id} />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            🗑️ Delete Product
          </button>
        </form>
      </div>
    </div>
  );
}
