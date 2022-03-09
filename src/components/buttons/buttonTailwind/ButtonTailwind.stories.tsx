import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ButtonTailwind from './ButtonTailwind';

export default {
  title: 'components/buttons/buttontailwind',
  component: ButtonTailwind,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonTailwind>;

const Template: ComponentStory<typeof ButtonTailwind> = (args) => (
  <ButtonTailwind {...args} />
);

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
