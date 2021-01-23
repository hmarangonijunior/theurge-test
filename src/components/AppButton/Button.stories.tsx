import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import AppButton from './index';
import { IProps } from './types';

import AppStoreIcon from '../../images/apple-store.svg';

export default {
  title: 'Example/Button',
  component: AppButton,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args) => <AppButton {...args} />;

export const AppStoreButton = Template.bind({});
AppStoreButton.args = {
  icon: AppStoreIcon,
  label: 'Get on the App Store',
};
