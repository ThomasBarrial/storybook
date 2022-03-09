import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import SlideUp from './SlideUp';

export default {
  title: 'Components/Animation/SlideUp',
  component: SlideUp,
  argTypes: {
    duration: { control: 'number' },
  },
} as ComponentMeta<typeof SlideUp>;

const Template: ComponentStory<typeof SlideUp> = (args) => (
  <SlideUp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p>Hello</p>
    </div>
  ),
  duration: 2,
  className: 'font-bold text-5xl',
};
