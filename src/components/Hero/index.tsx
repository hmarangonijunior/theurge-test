import React from 'react';
import AppButton from '../AppButton';

import AppStoreIcon from '../../images/apple-store.svg';
import GoolePlayIcon from '../../images/google-play.svg';

const Hero = () => {
  return (
    <div className='h-99 lg:h-101 xl:h-102 bg-hero-background w-full bg-cover bg-center'>
      <div className='mx-4 lg:mx-32'>
        <div className='w-full md:w-6/12 lg:w-8/12'>
          <h1 className='pt-24 font-roc font-bold text-5xl lg:text-8xl text-white'>
            Quadpay anywhere
          </h1>
          <p className='mt-6 font-roc text-white text-base lg:text-2xl'>
            Shop your favorite brands with the Quadpay app—online or in-store.
          </p>
          <div className='mt-8'>
            <AppButton label='Get on the App Store' icon={AppStoreIcon} />
            <AppButton label='Get on Google Play' icon={GoolePlayIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
