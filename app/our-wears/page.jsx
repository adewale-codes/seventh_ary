import { client } from '@/app/lib/sanity';
import WearCategories from '../components/WearCategories';

const getData = async () => {
  const query = `*[_type == 'product' && defined(slug.current)] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories[]-> {name}
  }`;
  const data = await client.fetch(query);
  return data;
};


const OurWears = async () => {
  const wears = await getData();

  return (
    <div>
      <WearCategories wears={wears} />
    </div>
  );
};

export default OurWears;
