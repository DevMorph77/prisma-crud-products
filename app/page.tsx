import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <main className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          🛍️ Product CRUD App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create, Read, Update, and Delete products effortlessly.
        </p>

        <Link href="/products">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
            📦 View Products
          </button>
        </Link>
      </main>
    </div>
  );
}
