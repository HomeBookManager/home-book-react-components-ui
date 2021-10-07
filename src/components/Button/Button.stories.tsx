import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from './Button';

// others
import { BASIC_BUTTON } from '../../stories/constants';

export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components-UI?node-id=4%3A2',
    },
  },
  title: BASIC_BUTTON,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button>Button</Button>;

export const BasicButton = Template.bind({});
