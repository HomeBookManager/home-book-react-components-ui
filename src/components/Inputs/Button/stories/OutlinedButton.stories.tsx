import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { Color, Variant } from '../constants';
import { libraryName } from '../../../../constants';
import { outlinedButton } from '../../../../stories/constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  `<code>Outlined buttons</code> are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app.`,
  `Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
      children: 'Outlined',
    },
    {
      attributes: [
        { name: 'forcedHover', value: '' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: 'Hover',
    },
    {
      attributes: [
        { name: 'disabled', value: '' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: 'Disabled',
    },
  ],
  imports: [
    {
      items: '{ Button }',
      path: libraryName,
    },
    {
      items: '{ Variant }',
      path: `${libraryName}/dist/components/Button/constants`,
    },
  ],
};

export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components-UI?node-id=4%3A2',
    },
  },
  title: outlinedButton,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Outlined button"
  >
    <Button {...args}>Outlined</Button>
    <Button forcedHover {...args}>
      Hover
    </Button>
    <Button disabled {...args}>
      Disabled
    </Button>
  </StoryComponent>
);

export const OutlinedButton = Template.bind({});

OutlinedButton.argTypes = {
  disabled: {
    table: {
      disable: true,
    },
  },
  forcedHover: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
};

OutlinedButton.args = {
  color: Color.primary,
  variant: Variant.outlined,
};
