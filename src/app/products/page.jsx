import AllProducts from '@/components/AllProducts';
import { ProductTable } from '@/components/ProductTable';

import React from 'react';

const Products = () => {
  return (
    <div>
      <AllProducts />
      <h2 className='text-xl font-bold mb-5'>Product Table</h2>
      <ProductTable/>
    </div>
  );
};

export default Products;
