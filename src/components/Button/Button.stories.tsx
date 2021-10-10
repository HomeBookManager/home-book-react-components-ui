import { ComponentStory, ComponentMeta } from '@storybook/react';
import capitalize from 'lodash/capitalize';

// components
import Button from './Button';
import StoryComponent from '../../stories/components/StoryComponent';

// others
import { BASIC_BUTTON } from '../../stories/constants';
import { Color, Variant } from './constants';

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

const description =
  'The <code>Button</code> comes with three variants: text (default), contained, and outlined.';

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent description={description} title="Basic button">
    {Object.keys(Variant).map((variant, key) => (
      // @ts-ignore
      <Button key={key} variant={Variant[variant]} {...args}>
        {capitalize(variant)}
      </Button>
    ))}
  </StoryComponent>
);

export const BasicButton = Template.bind({});

BasicButton.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

BasicButton.args = {
  color: Color.primary,
};
