import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from './Button';

// others
import { BASIC_BUTTON } from '../../stories/constants';
import { Variant } from './constants';

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

const Template: ComponentStory<typeof Button> = () => (
  <>
    <Button variant={Variant.default}>Button</Button>
    <Button variant={Variant.contained}>Button</Button>
    <Button variant={Variant.outlined}>Button</Button>
  </>
);

export const BasicButton = Template.bind({});
