import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonTailwind, { ButtonTailwindProps } from './ButtonTailwind';

export default {
  title: 'Components/ButtonTailwind',
  component: ButtonTailwind,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonTailwindProps> = (args) => (
  <ButtonTailwind {...args} />
);

// Reuse that template for creating different stories
export const Medium = Template.bind({});
Medium.args = {
  label: 'Tailwind button 😁',
  className: 'w-52 text-white rounded-md',
  size: 'medium',
  backgroundColor: '#0ea5e9',
};

export const Large = Template.bind({});
Large.args = {
  ...Medium.args,
  label: 'large Tailwind button 😁',
  className: 'w-96 text-white rounded-md ',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Medium.args,
  label: 'small Tailwind button 😁',
  className: 'w-52 text-white rounded-md',
  size: 'small',
};
