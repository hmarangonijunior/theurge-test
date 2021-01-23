import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PartnerCard from './index';
import { IProps } from './types';

import PaymentIcon from '../../images/payment.svg';

export default {
  title: 'Example/PartnerCard',
  component: PartnerCard,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args) => <PartnerCard {...args} />;

export const MakePaymentSeamless = Template.bind({});
MakePaymentSeamless.args = {
  icon: PaymentIcon,
  title: 'Make payment seamless',
  description:
    'Online or in-store, Quadpay means more flexibility at checkout.',
};
