import { ComponentStory, ComponentMeta } from '@storybook/react';
import capitalize from 'lodash/capitalize';

// components
import Button from '../Button';
import StoryComponent from '../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicButton } from '../../../stories/constants';
import { Color, Variant } from '../constants';
import { libraryName } from '../../../constants';
import { TStoryBlockCode } from '../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>Button</code> comes with three variants: text, contained, and outlined.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
      children: Variant.text,
    },
    {
      children: Variant.contained,
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
      children: Variant.outlined,
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
  title: basicButton,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic button"
  >
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
