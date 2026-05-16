'use server';
import { revalidatePath } from 'next/cache';

export const addProduct = async formdata => {
  const newProduct = Object.fromEntries(formdata.entries());
  const modifiedData = {
    title: newProduct.title,
    price: parseFloat(newProduct.price),
    stock: parseInt(newProduct.stock),
    description: newProduct.description,
    image: newProduct.image,
  };

  const res = await fetch('http://localhost:8000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(modifiedData),
  });
  const data = await res.json();
  //   console.log(res.ok);

  if (!res.ok) {
    return;
  }
  revalidatePath('/products');
  return data;
};


export const deleteProduct = async (id) => {
  const res = await fetch(`http://localhost:8000/products/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  //   console.log(res.ok);

  if (!res.ok) {
    return;
  }
  revalidatePath('/products');
  return data;
};
