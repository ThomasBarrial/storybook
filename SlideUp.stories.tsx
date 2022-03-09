import React from 'react';
import { Meta, Story } from '@storybook/react';
import SlideUp, {
  SlideUpProps,
} from './src/components/Animation/slideUp/SlideUp';

export default {
  title: 'Components/Animated/SlideUp',
  component: SlideUp,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the SlideUp component
const Template: Story<SlideUpProps> = (args) => <SlideUp {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      <p>Hello</p>
    </div>
  ),
  duration: 2,
  className: 'font-bold text-5xl',
};

// export const Secondary = Template.bind({});
// Secondary.args = {  };
