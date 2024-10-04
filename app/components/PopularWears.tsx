import React from "react";
import Image from "next/image";
import { client } from "@/app/lib/sanity";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular wears']._id, categories)] {
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
      }
      `;
  const data = await client.fetch(query);
  return data;
};

const PopularWears = async () => {
  const popular = await getData();
  console.log(popular);
  return <div>PopularWears</div>;
};

export default PopularWears;
