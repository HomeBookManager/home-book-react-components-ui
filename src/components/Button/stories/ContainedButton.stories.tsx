import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../stories/components/StoryComponent/StoryComponent';

// others
import { Color, Variant } from '../constants';
import { containedButton } from '../../../stories/constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';

const description = [
  '<code>Contained buttons</code> are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.contained' }],
      children: 'Contained',
    },
    {
      attributes: [
        { name: 'forcedHover', value: '' },
        { name: 'variant', value: 'Variant.contained' },
      ],
      children: 'Hover',
    },
    {
      attributes: [
        { name: 'disabled', value: '' },
        { name: 'variant', value: 'Variant.contained' },
      ],
      children: 'Disabled',
    },
  ],
  imports: [
    {
      items: '{ Button, Variant }',
      path: libraryName,
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
  title: containedButton,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Contained button"
  >
    <Button {...args}>Contained</Button>
    <Button forcedHover {...args}>
      Hover
    </Button>
    <Button disabled {...args}>
      Disabled
    </Button>
  </StoryComponent>
);

export const ContainedButton = Template.bind({});

ContainedButton.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

ContainedButton.args = {
  color: Color.primary,
  variant: Variant.contained,
};
