'use client';

import { deleteProduct } from '@/lib/product/action';
import { AlertDialog, Button } from '@heroui/react';

export function DeleteModal({ productId }) {

  const handleDelete = async () => {
    // Call the deleteProduct function from your action file
    const data =   await deleteProduct(productId);
    // Optionally, you can add some feedback or refresh the product list after deletion

  }
  return (
    <AlertDialog>
      <Button variant="danger">Delete Product</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete product permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>Are you sure you want to delete this product?</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Product
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
