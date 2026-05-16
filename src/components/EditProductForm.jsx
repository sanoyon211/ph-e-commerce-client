'use client';
import {
  Button,
  
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { useRouter } from 'next/navigation';

const EditProductForm = () => {
  const router = useRouter();
  const handleSubmit = async formData => {
    
  };
  return (
    <div className="flex w-full items-center justify-center">
      <Form
        action={handleSubmit}
        className="flex w-96 flex-col gap-4 border p-5 rounded-md"
      >
        <TextField name="title" type="text">
          <Label>Product Name</Label>
          <Input placeholder="Enter Product Name" />
        </TextField>
        <TextField name="description" type="text">
          <Label>Product Description</Label>
          <Input placeholder="Enter Product Description" />
        </TextField>
        <TextField name="price" type="number">
          <Label>Product Price</Label>
          <Input placeholder="Enter Product Price" />
        </TextField>
        <TextField name="image" type="url">
          <Label>Product Image</Label>
          <Input placeholder="Enter Product Image" />
        </TextField>
        <TextField name="stock" type="number">
          <Label>Product Stock</Label>
          <Input placeholder="Enter Product Stock" />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">Add Product</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditProductForm;
