import { getAllProducts } from '@/lib/product/data';
import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = async () => {
  const productss = await getAllProducts();
  const products = productss.slice(0, 6); 
  return (
    <div className='my-10'>
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;