import { getAllProducts } from '@/lib/product/data';
import { Table, Button } from '@heroui/react';
import { DeleteModal } from '@/components/DeleteModal';
import Link from 'next/link';

export const ProductTable = async () => {
  const products = await getAllProducts();
  return (
    <Table className="">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Product Name</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Stock</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {products.map(product => (
              <Table.Row key={product._id}>
                <Table.Cell>{product.title}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>
                  <Link href={`/products/${product._id}/edit`}>
                    <Button className="mr-2" variant="secondary">
                      Edit
                    </Button>
                  </Link>
                  <DeleteModal productId={product._id} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};
