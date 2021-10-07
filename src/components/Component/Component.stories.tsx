import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import ExampleComponent from './Component';

// others
import { component } from '../../stories/constants';

export default {
  component: ExampleComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Definitions?node-id=0%3A1',
    },
  },
  title: component,
} as ComponentMeta<typeof ExampleComponent>;

const Template: ComponentStory<typeof ExampleComponent> = () => (
  <ExampleComponent />
);

export const Component = Template.bind({});
