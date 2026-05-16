import EditProductForm from '@/components/EditProductForm';
import React from 'react';

const EditProductPage = async({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/products/${id}`);
  const product = await res.json();
  return (
    <div className='my-10'>
      <h2 className='text-2xl font-bold mb-5'>Edit {product.title}</h2>
      <EditProductForm product={product}/>
    </div>
  );
};

export default EditProductPage;