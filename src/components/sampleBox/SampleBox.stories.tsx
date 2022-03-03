import React from 'react';
import { Meta, Story } from '@storybook/react';
import SampleBox, { SampleBoxProps } from './SampleBox';

export default {
  title: 'Example/SampleBox',
  component: SampleBox,
  argTypes: {},
} as Meta;

// eslint-disable-next-line react/function-component-definition
const Template: Story<SampleBoxProps> = (args) => <SampleBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'hello',
};
