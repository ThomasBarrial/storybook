import React from 'react';
import { Meta, Story } from '@storybook/react';
import FadeInButton, { FadeInButtonProps } from './FadeInButton';

export default {
  title: 'components/buttons/FadeInButton',
  component: FadeInButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    duration: { control: 'number' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<FadeInButtonProps> = (args) => <FadeInButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: 'Hover me 😁',
  duration: 1,
  className: 'w-52 text-white rounded-md',
  backgroundColor: '#0ea5e9',
};
