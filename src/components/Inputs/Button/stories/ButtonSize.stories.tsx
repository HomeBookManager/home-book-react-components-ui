import { ComponentStory, ComponentMeta } from '@storybook/react';
import capitalize from 'lodash/capitalize';

// components
import Button from '../Button';
import StoryComponent, {
  ContentGridFlow,
} from '../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonSize } from '../../../../stories/constants';
import { Color, Size, Variant } from '../constants';
import { libraryName } from '../../../../constants';
import { TStoryBlockCode } from '../../../../stories/components/StoryBlockCode/types';

const description = [
  'For larger or smaller buttons, use the <code>size</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [
        { name: 'size', value: 'Size.small' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: Size.small,
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
      children: Size.medium,
    },
    {
      attributes: [
        { name: 'size', value: 'Size.large' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: Size.large,
    },
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: Size.small,
    },
    {
      children: Size.medium,
    },
    {
      attributes: [{ name: 'size', value: 'Size.large' }],
      children: Size.large,
    },
    {
      attributes: [
        { name: 'size', value: 'Size.small' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: Size.small,
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
      children: Size.medium,
    },
    {
      attributes: [
        { name: 'size', value: 'Size.large' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: Size.large,
    },
  ],
  imports: [
    {
      items: '{ Button, Size, Variant }',
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
  title: buttonSize,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxThreeColumns}
    description={description}
    title="Button sizes"
  >
    {Object.keys(Variant).map((variant, variantKey) =>
      Object.keys(Size).map((size, sizeKey) => (
        // @ts-ignore
        <Button
          key={variantKey + sizeKey}
          size={Size[size]}
          variant={Variant[variant]}
          {...args}
        >
          {capitalize(size)}
        </Button>
      ))
    )}
  </StoryComponent>
);

export const ButtonSize = Template.bind({});

ButtonSize.argTypes = {
  size: {
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

ButtonSize.args = {
  color: Color.primary,
};
