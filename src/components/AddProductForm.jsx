import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

const AddProductForm = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <Form className="flex w-96 flex-col gap-4 border border-gray-400 p-6 rounded-lg shadow-lg">
        <TextField isRequired name="title" type="text">
          <Label>Product Name</Label>
          <Input placeholder="Enter product name" />
          <FieldError />
        </TextField>
        <TextField isRequired name="description" type="text">
          <Label>Product Description</Label>
          <Input placeholder="Enter product description" />
          <FieldError />
        </TextField>
        <TextField isRequired name="price" type="number">
          <Label>Product Price</Label>
          <Input placeholder="Enter product price" />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="url">
          <Label>Product Image</Label>
          <Input placeholder="Enter product image URL" />
          <FieldError />
        </TextField>
        <TextField isRequired name="stock" type="number">
          <Label>Product Stock</Label>
          <Input placeholder="Enter product stock" />
          <FieldError />
        </TextField>


        <div className="flex gap-2">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProductForm;
