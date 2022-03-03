import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { SampleBox, SampleBoxProps } from './SampleBox';

export default {
  title: 'Example/SampleBox',
  component: SampleBox,
  argTypes: {},
} as Meta;

const Template: Story<SampleBoxProps> = (args) => <SampleBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'hello',
};
