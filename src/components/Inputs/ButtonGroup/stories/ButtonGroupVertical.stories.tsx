import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonGroupVertical } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { Numbers } from 'stories/components/StoryBlockCode/constants';
import { Orientation } from '../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';
import { Variant } from '../../Button/constants';

const description = [
  'The button group can be displayed vertically using the <code>orientation</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      attributes: [
        { name: 'orientation', value: 'Orientation.vertical' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
    {
      attributes: [{ name: 'orientation', value: 'Orientation.vertical' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
    {
      attributes: [
        { name: 'orientation', value: 'Orientation.vertical' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
  ],
  imports: [
    {
      items: '{ Button, ButtonGroup, Orientation }',
      path: libraryName,
    },
  ],
};

export default {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yhTZ31Wn16kIrEeoHHV176/Components---UI?node-id=232%3A2',
    },
  },
  title: buttonGroupVertical,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Button group vertical"
  >
    {Object.keys(Variant).map((variant, key) => (
      <ButtonGroup
        key={key}
        orientation={Orientation.vertical}
        // @ts-ignore
        variant={variant}
        {...args}
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupVertical = Template.bind({});

ButtonGroupVertical.argTypes = {};

ButtonGroupVertical.args = {};
