import { PackageCheck, Headphones, ShieldCheck } from 'lucide-react';
const Featured = () => {
  return (
    <section className='pt-14'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1 flex flex-col items-center'>
            <PackageCheck size={48} className='text-accent mb-6' />
            <h3>Fast and free delivery</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className='flex-1 flex flex-col items-center'>
            <Headphones size={48} className='text-accent mb-6' />
            <h3>24/7 Customer Support</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className='flex-1 flex flex-col items-center'>
            <ShieldCheck size={48} className='text-accent mb-6' />
            <h3>Money Back Guarantee</h3>
            <p>Money return within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
