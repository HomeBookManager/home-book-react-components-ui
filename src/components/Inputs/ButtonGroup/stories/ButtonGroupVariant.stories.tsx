import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent, {
  ContentGridFlow,
} from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonGroupVariants } from '../../../../stories/constants';
import { libraryName } from '../../../../constants';
import { Numbers } from '../../../../stories/components/StoryBlockCode/constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';
import { Variant } from '../../Button/constants';

const description = ['All the standard button variants are supported.'];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
    {
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
  ],
  imports: [
    {
      items: '{ Button, ButtonGroup }',
      path: libraryName,
    },
    {
      items: '{ Variant }',
      path: `${libraryName}/dist/components/Button/constants`,
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
  title: buttonGroupVariants,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Button group variants"
  >
    {Object.keys(Variant).map((variant, key) => (
      // @ts-ignore
      <ButtonGroup key={key} variant={variant} {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupVariants = Template.bind({});

ButtonGroupVariants.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

ButtonGroupVariants.args = {};
