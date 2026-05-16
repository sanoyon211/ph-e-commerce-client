import EditProductForm from '@/components/EditProductForm';
import React from 'react';

const EditProductPage = () => {
  return (
    <div className='my-10'>
      <h2 className='text-2xl font-bold mb-5'>Edit Product</h2>
      <EditProductForm/>
    </div>
  );
};

export default EditProductPage;