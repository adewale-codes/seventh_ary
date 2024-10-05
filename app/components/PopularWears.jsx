import React from "react";
import Image from "next/image";
import { client } from "@/app/lib/sanity";
import Link from 'next/link';
import PopularWearsCarousel from '@/app/components/PopularWearsCarousel'

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular wears']._id, categories) && defined(slug.current)] {
    _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]-> {
      name
    }
  }`;
  
  const data = await client.fetch(query);
  return data;
};

const PopularWears = async () => {
  const popular = await getData();
  console.log(popular);
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Most Popular Wears</h2>
        <p className='text-center mb-[30px]'>
          The World's Premium Wears In One Destination.
        </p>
        <PopularWearsCarousel wears={popular} />
        <Link href='/our-wears'>
          <button className='btn btn-accent mx-auto'>See all wears</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularWears;
