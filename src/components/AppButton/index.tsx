import React from 'react';
import { IProps } from './types';

const AppButton: React.FC<IProps> = ({ icon, label, ...props }) => {
  return (
    <button
      type='button'
      className='bg-white mr-1.5 mb-1 w-full  md:w-80 lg:w-56 min-w-max h-11 rounded hover:shadow-lg focus:outline-none'
      {...props}
      onClick={props.onClick}
    >
      <div className='flex flex-row items-center'>
        <img src={icon} alt='' className='ml-6 mr-3' width='15' height='17' />
        <span className='mr-6 font-roc font-bold text-primary text-base'>
          {label}
        </span>
      </div>
    </button>
  );
};

export default AppButton;
