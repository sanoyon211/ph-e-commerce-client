import { getAllProducts } from '@/lib/product/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// 'params' ke await korte hobe Next.js er latest version e
const ProductDetails = async ({ params }) => {
  // 1. Params await kora
  const { id } = await params;

  // 2. Product fetch kora
  const products = await getAllProducts();
  const product = products.find(p => p._id === id);

  // 3. Error Handling (Product na paile crash korbe na)
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-start lg:space-x-12">
          {/* Product Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Image container e 'relative' thaka dorkar karon Next Image 'fill' use korse */}
            <div className="relative aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={product.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={product.title}
                className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-500"
                priority // First image tai priority dewa bhalo
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {product.title}
              </h1>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-semibold text-blue-600">
                  ৳{product.price?.toLocaleString()}
                </p>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.stock > 0
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : 'Out of stock'}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                Description
              </h3>
              <div className="mt-4 text-gray-600 leading-relaxed">
                {product.description}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg active:scale-95">
                Add to Cart
              </button>
              <Link href={`/products/${product._id}/edit`}>
                <button className="flex-1 bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors active:scale-95">
                  Edit
                </button>
              </Link>
            </div>

            {/* Extra Features Icons... (Same as before) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
