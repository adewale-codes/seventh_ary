import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start'>
            <h1 className='text-center xl:text-left mb-6'>
              Where <span>Perfect</span> Dresses Are Made
            </h1>
            <p className='mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              consectetur quam fugit provident eveniet sequi odit, quasi
              corporis obcaecati sed.
            </p>
            <div className='flex items-center gap-4 mx-auto xl:mx-0'>
              <Link href='/our-wears' className='mx-auto md:mx-0'>
                <button className='btn btn-primary'>Shop now</button>
              </Link>
              <Link href='/our-wears' className='mx-auto md:mx-0'>
                <button className='btn btn-accent'>Our wears</button>
              </Link>
            </div>
          </div>
          <div className='hidden xl:flex'>
            {/* <Image
              src='/hero/bike.png'
              width={765}
              height={480}
              alt=''
              quality={100}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
