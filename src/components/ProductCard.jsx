import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa6';
const ProductCard = ({ product }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.title}
          className="object-cover rounded-xl"
        />

        {/* <Chip size="sm" className="absolute right-2 top-2">
          {product.category}
        </Chip> */}
      </div>

      <div>
        <h2 className="font-semibold mb-2">{product.title}</h2>
        <h2 className="text-sm text-muted-foreground mb-2">
          {product.description}
        </h2>
        <h2 className='text-xl font-bold text-red-800'>{product.price} Tk</h2>
      </div>

      <Link href={`/products/${product._id}`}>
        {' '}
        <Button variant="outline" className={'w-full'}>
          View
        </Button>
      </Link>
        
    </Card>
  );
};

export default ProductCard;
