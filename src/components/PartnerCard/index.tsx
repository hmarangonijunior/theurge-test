import React from 'react';
import { IProps } from './types';

const PartnerCard: React.FC<IProps> = ({ icon, title, description }) => {
  return (
    <div className='mb-12'>
      <img src={icon} alt='' width='60' height='60' />
      <div className='mt-8 font-roc font-bold text-2xl lg:text-3xl'>
        {title}
      </div>
      <div className='mt-4 font-roc text-lg'>{description}</div>
    </div>
  );
};

export default PartnerCard;
