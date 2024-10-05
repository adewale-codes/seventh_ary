import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import AddToCartBtn from '@/app/components/AddToCartBtn';
import Link from 'next/link';
import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from 'lucide-react';

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const wear = await getData(params.slug);

  const firstImageUrl = wear?.images?.[0] ? urlFor(wear.images[0]).url() : null;
  const name = wear?.name ?? 'Unnamed Product';
  const price = wear?.price ?? 'N/A';
  const description = wear?.description ?? 'No description available.';
  const priceId = wear?.price_id ?? '';

  return (
    <section className='pt-24 pb-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-14'>
          <div className='xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] relative'>
            {firstImageUrl ? (
              <Image
                src={firstImageUrl}
                layout="fill" // This makes the image fill the parent container
                objectFit="contain" // Ensures the entire image is contained within the bounds
                priority
                alt={name}
              />
            ) : (
              <div className='text-gray-500 absolute inset-0 flex items-center justify-center'>
                Image not available
              </div>
            )}
          </div>

          <div className='flex-1 flex flex-col justify-center items-start gap-10'>
            <Link href='/' className='flex items-center gap-2 font-semibold'>
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className='flex flex-col gap-6 items-start'>
              <div>
                <h3>{name}</h3>
                <p className='text-lg font-semibold'>
                  {price !== 'N/A' ? `$${price}` : price}
                </p>
              </div>
              <p>{description}</p>
              <AddToCartBtn
                price_id={priceId}
                name={name}
                currency='USD'
                description={description}
                images={wear?.images}
                price={wear?.price}
                text='Add to cart'
                btnStyles='btn btn-accent'
              />
            </div>

            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <PackageCheck size={20} className='text-accent' />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className='flex gap-2'>
                <RefreshCw size={20} className='text-accent' />
                <p>Free return for 30 days</p>
              </div>
              <div className='flex gap-2'>
                <Clock size={20} className='text-accent' />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
