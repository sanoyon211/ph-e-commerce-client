import { getAllProducts } from '@/lib/product/data';
import ProductCard from './ProductCard';

const AllProducts = async () => {
  const products = await getAllProducts();
  return (
    <div className='my-10'>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;