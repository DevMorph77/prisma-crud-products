import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { editPost, deletePost } from "../../actions/actions";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <Link href="/products/" className="text-blue-500 hover:underline">
        ⬅️ Go Back Home
      </Link>

      <h1 className="text-2xl font-bold mt-4">Product Details</h1>

      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg shadow-md my-4"
      />

      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>

      {/* Edit Form */}
      <form action={editPost} className="mt-6 p-4 bg-white shadow-md rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">✏️ Edit Product</h2>

        <input type="hidden" name="id" value={product.id} />

        <input
          type="text"
          name="name"
          defaultValue={product.name}
          placeholder="Product Name"
          className="w-full p-3 border rounded-lg mb-3"
        />

        <textarea
          name="description"
          defaultValue={product.description}
          placeholder="Product Description"
          className="w-full p-3 border rounded-lg mb-3"
          rows={3}
        ></textarea>

        <input
          type="number"
          name="price"
          defaultValue={product.price}
          placeholder="Price (USD)"
          className="w-full p-3 border rounded-lg mb-3"
          step="0.01"
        />

        <input
          type="text"
          name="imageUrl"
          defaultValue={product.imageUrl}
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg mb-3"
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
          ✅ Save Changes
        </button>
      </form>

      {/* Delete Button */}
      <form action={deletePost} className="mt-4">
        <input type="hidden" name="id" value={product.id} />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
        >
          🗑️ Delete Product
        </button>
      </form>
    </div>
  );
}
