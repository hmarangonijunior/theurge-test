import React from 'react';
import PartnerCard from '../PartnerCard';
import PaymentIcon from '../../images/payment.svg';
import RiskIcon from '../../images/shield-check.svg';
import CustomerIcon from '../../images/multiple-actions-cart.svg';
import CardIcon from '../../images/credit-card-check.svg';
import CommunityIcon from '../../images/fireworks-people-watch.svg';
import ChartIcon from '../../images/analytics-graph-bar.svg';

type ServiceType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const Partner = () => {
  const services: ServiceType[] = [
    {
      id: 0,
      icon: PaymentIcon,
      title: 'Make payment seamless',
      description:
        'Online or in-store, Quadpay means more flexibility at checkout.',
    },
    {
      id: 1,
      icon: RiskIcon,
      title: 'Take on zero risk',
      description: 'You get paid today. Your customers pay over time.',
    },
    {
      id: 2,
      icon: CustomerIcon,
      title: 'Put your customers first',
      description:
        'Interest-free installment plans with no hard credit check or impact on credit.',
    },
    {
      id: 3,
      icon: CardIcon,
      title: 'Accept all major cards',
      description:
        'QuadPay is the only Buy Now, Pay Later solution that accepts Amex and Discover along with Visa.',
    },
    {
      id: 4,
      icon: CommunityIcon,
      title: 'Tap into our community',
      description:
        'Introduce your brand to millions of existing QuadPay customers in our marketplace.',
    },
    {
      id: 5,
      icon: ChartIcon,
      title: 'Track progress',
      description:
        'Easily manage customer data, order management, and reconciliation in the merchant portal.',
    },
  ];
  return (
    <div className='bg-secondary w-full bg-cover bg-center'>
      <div className='mx-4 lg:mx-32'>
        <h1 className='pt-20 lg:pt-24 font-roc font-bold text-5xl lg:text-6xl'>
          Partnering with Quadpay
        </h1>
        <div className='mt-16 -mx-3.5 pb-24 flex flex-wrap'>
          {services.map((service) => (
            <div key={service.id} className='w-full md:w-6/12 lg:w-4/12 px-3.5'>
              <PartnerCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
