'use client';
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Slider } from './ui/slider';
import Wear from './Wear';

const WearCategories = ({ wears }) => {
  const [category, setCategory] = useState('all');
  const [filteredWears, setFilteredWears] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = wears.filter((wear) => {
      const categoryMatch =
        category === 'all'
          ? true
          : wear?.categories?.some((categ) => categ.name === category);
      const priceMatch = wear.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredWears(filtered);
  }, [category, price, wears]);

  return (
    <section className='min-h-[1200px] py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          <aside className='w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
            <RadioGroup
              defaultValue='all'
              className='flex flex-col gap-6 mb-12'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='all'
                  id='all'
                  onClick={() => setCategory('all')}
                />
                <label htmlFor='all'>All</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='Popular wears'
                  id='Popular wears'
                  onClick={() => setCategory('Popular wears')}
                />
                <label htmlFor='Popular wears'>Popular wears</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='Bridals'
                  id='Bridals'
                  onClick={() => setCategory('Bridals')}
                />
                <label htmlFor='Bridals'>Bridals</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='Party wears'
                  id='Party wears'
                  onClick={() => setCategory('Party wears')}
                />
                <label htmlFor='Party wears'>Party wears</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='Professional'
                  id='Professional'
                  onClick={() => setCategory('Professional')}
                />
                <label htmlFor='Professional'>Professional</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='Ready to wear'
                  id='Ready to wear'
                  onClick={() => setCategory('Ready to wear')}
                />
                <label htmlFor='Ready to wear'>Ready to wear</label>
              </div>
            </RadioGroup>
            <div className='max-w-56'>
              <div className='text-lg mb-4 font-medium'>
                Max Price: 
                <span className='text-accent font-semibold ml-2'>${price}</span>
                <span className='ml-2'>
                  (
                  {filteredWears.length > 1
                    ? `${filteredWears.length} items`
                    : `${filteredWears.length} item`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          <div className='w-full xl:w-[1050px] ml-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
              {filteredWears.map((wear) => {
                return <Wear wear={wear} key={wear.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WearCategories;
